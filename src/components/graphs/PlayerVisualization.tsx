import React, { useState, useEffect, useCallback, useRef } from "react";
import { motion } from "motion/react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import FootballPitch from "./FootballPitch";

interface PlayerData {
  frame_index: number;
  objects: {
    class_id: number;
    confidence: number;
    bbox: [number, number, number, number];
    center: [number, number];
    color: string;
    team_index: number;
    team_classification_confidence: number;
    source: string;
    transformed_center: [number, number];
  }[];
}

interface PlayerVisualizationProps {
  width?: number;
  height?: number;
}

const FPS = 60;

// the ratio of football pitch is 3:2
const PlayerVisualization: React.FC<PlayerVisualizationProps> = ({
  width = 735,
  height = 490,
}) => {
  const [frames, setFrames] = useState<Record<number, PlayerData>>({});
  const [currentFrameIndex, setCurrentFrameIndex] = useState<number | null>(
    null,
  );
  const [isStreaming, setIsStreaming] = useState(false);

  const framesRef = useRef(frames);
  const currentFrameIndexRef = useRef(currentFrameIndex);

  const normalizeCoordinates = useCallback(
    (coords: [number, number], source: string) => {
      // Split the width in half for each camera
      const halfWidth = width / 2;

      if (source === "left") {
        // Assuming transformed_center coordinates are in some original range
        // You might need to adjust these min/max values based on your actual data
        const [origMinX, origMaxX] = [0, 400]; // Original coordinate range from camera
        const [origMinY, origMaxY] = [0, 300]; // Original coordinate range from camera

        // Map to left half of the display
        const normalizedX =
          ((coords[0] - origMinX) / (origMaxX - origMinX)) * halfWidth;
        const normalizedY =
          ((coords[1] - origMinY) / (origMaxY - origMinY)) * height;

        return [normalizedX, normalizedY];
      } else {
        // Right camera uses same original ranges but maps to right half
        const [origMinX, origMaxX] = [0, 400]; // Original coordinate range from camera
        const [origMinY, origMaxY] = [0, 300]; // Original coordinate range from camera

        const normalizedX =
          ((coords[0] - origMinX) / (origMaxX - origMinX)) * halfWidth +
          halfWidth;
        const normalizedY =
          ((coords[1] - origMinY) / (origMaxY - origMinY)) * height;

        return [normalizedX, normalizedY];
      }
    },
    [width, height],
  );

  const progressFrames = useCallback(() => {
    const currentFrames = framesRef.current;
    const currentFrame = currentFrameIndexRef.current;

    const sortedFrameIndices = Object.keys(currentFrames)
      .map(Number)
      .sort((a, b) => a - b);

    const nextFrame = sortedFrameIndices.find(
      (index) => index > (currentFrame ?? -1),
    );

    if (nextFrame !== undefined) {
      setCurrentFrameIndex(nextFrame);
      currentFrameIndexRef.current = nextFrame;
    }
  }, []);

  useEffect(() => {
    let eventSource: EventSource | null = null;
    let frameProgressInterval: NodeJS.Timeout | null = null;

    const startStreaming = () => {
      eventSource = new EventSource("/api/python/stream-frames");

      eventSource.onmessage = (event) => {
        try {
          const frameData: PlayerData = JSON.parse(event.data);
          setFrames((prevFrames) => {
            const updatedFrames = {
              ...prevFrames,
              [frameData.frame_index]: frameData,
            };
            framesRef.current = updatedFrames;
            return updatedFrames;
          });
        } catch (error) {
          console.error("Error parsing frame:", error);
        }
      };

      eventSource.onerror = (error) => {
        console.error("EventSource failed:", error);
        eventSource?.close();
        setIsStreaming(false);
      };
    };

    if (isStreaming) {
      startStreaming();
      frameProgressInterval = setInterval(progressFrames, 1000 / FPS);
    }

    return () => {
      eventSource?.close();
      if (frameProgressInterval) {
        clearInterval(frameProgressInterval);
      }
    };
  }, [isStreaming, progressFrames]);

  const currentFrame =
    currentFrameIndex !== null ? frames[currentFrameIndex] : null;

  return (
    <Card className="mx-auto w-full max-w-4xl">
      <CardHeader>
        <CardTitle className="flex items-center justify-between">
          Football Player Tracking
          <div className="flex items-center space-x-4">
            <span className="text-sm text-muted-foreground">
              Frames Received: {Object.keys(frames).length}
            </span>
            <Button
              variant={isStreaming ? "destructive" : "default"}
              onClick={() => setIsStreaming(!isStreaming)}
            >
              {isStreaming ? "Stop Streaming" : "Start Streaming"}
            </Button>
          </div>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div
          className="relative overflow-hidden border border-gray-300"
          style={{
            width: `${width}px`,
            height: `${height}px`,
          }}
        >
          {currentFrame?.objects.map((player, index) => {
            const [x, y] = normalizeCoordinates(
              player.transformed_center,
              player.source,
            );

            return (
              <div
                key={`${index}`}
                style={{
                  position: "absolute",
                  left: `${x}px`,
                  top: `${y}px`,
                  backgroundColor: player.color,
                }}
                className={`absolute flex h-5 w-5 -translate-x-1/2 -translate-y-1/2 transform items-center justify-center rounded-full font-bold text-white shadow-md`}
              >
                {player.team_index}
              </div>
            );
          })}

          <FootballPitch size={width} grassPattern="striped" />

          <div className="absolute bottom-4 left-4 rounded bg-black/50 p-2 text-white">
            Frame: {currentFrameIndex ?? "N/A"}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default PlayerVisualization;
