"use client";
import { useEffect, useState, useRef } from "react";
import mpld3 from "mpld3";

export default function Figure({
  id,
  _json,
  className,
}: {
  id: string;
  _json: string | object;
  className?: string;
}) {
  const [jsonData, setJsonData] = useState<any>(null);
  const [error, setError] = useState<string | null>(null);
  const figureRef = useRef<boolean>(false);

  useEffect(() => {
    const fetchAndDrawFigure = async () => {
      try {
        // Reset states
        setError(null);

        // Get the JSON data
        let data;
        if (typeof _json === "string") {
          // If _json is a URL, fetch it
          const response = await fetch(_json);
          if (!response.ok) {
            throw new Error(`Failed to fetch data: ${response.statusText}`);
          }
          data = await response.json();
        } else {
          // If _json is already an object, use it directly
          data = _json;
        }

        setJsonData(data);

        // Only remove the figure if it was previously drawn
        if (figureRef.current) {
          mpld3.remove_figure(id);
        }

        // Draw the new figure
        mpld3.draw_figure(id, data);
        figureRef.current = true;

        // Update SVG attributes with retry logic
        const updateSvgAttributes = (retries = 5) => {
          const svg = document.querySelector(`#${id} svg`);
          if (svg) {
            const width = svg.getAttribute("width");
            const height = svg.getAttribute("height");
            if (width && height) {
              const widthNum = parseFloat(width);
              const heightNum = parseFloat(height);
              svg.removeAttribute("width");
              svg.removeAttribute("height");
              svg.setAttribute("viewBox", `0 0 ${widthNum} ${heightNum}`);
              svg.setAttribute("preserveAspectRatio", "xMidYMid meet");
            }
          } else if (retries > 0) {
            // Retry if SVG is not found
            setTimeout(() => updateSvgAttributes(retries - 1), 100);
          }
        };

        // Initial attempt to update SVG
        updateSvgAttributes();
      } catch (err) {
        console.error("Error in Figure component:", err);
        setError(err instanceof Error ? err.message : "An error occurred");
        if (figureRef.current) {
          mpld3.remove_figure(id);
          figureRef.current = false;
        }
      }
    };

    fetchAndDrawFigure();

    // Cleanup on unmount
    return () => {
      if (figureRef.current) {
        mpld3.remove_figure(id);
        figureRef.current = false;
      }
    };
  }, [id, _json]); // Fixed dependency array

  if (error) {
    return (
      <div
        id={id}
        className={`${className} flex items-center justify-center text-red-500`}
      >
        Error: {error}
      </div>
    );
  }

  if (!jsonData) {
    return (
      <div id={id} className={`${className} flex items-center justify-center`}>
        Loading...
      </div>
    );
  }

  return <div id={id} className={className} />;
}
