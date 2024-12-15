"use client";
import Figure from "./Figure";
import { type PassData } from "@/components/graphs/SoccerPitchArrows";
import FootballPitch from "@/components/graphs/FootballPitch";
import FootballArrows from "@/components/graphs/FootballArrows";
import { fetchJson } from "./figure-fetch-action";
import { useEffect, useState } from "react";
import FigureTools from "./FigureTools";
import FootballVisualizer from "@/components/graphs/FootballVisualizer";

const sampleData: PassData[] = [
  {
    id: 1,
    from: [0.2, 0.3], // 20% across width, 30% down height
    to: [0.6, 0.5], // 60% across width, 50% down height
    color: "lime",
    type: "arrow",
  },
  {
    id: 2,
    from: [0.4, 0.2],
    to: [0.8, 0.7],
    color: "red",
    type: "arrow",
  },
];
const size = 500;
const REAL_WIDTH = 70;
const scale = size / 105;
function App() {
  const [data, setData] = useState(null);
  const [data2, setData2] = useState(null);

  useEffect(() => {
    fetchJson({ url: "/api/python/passes" }).then(setData);
    fetchJson({ url: "/api/python/dominations" }).then(setData2);
  }, []);

  return (
    <>
      <div className="mx-auto grid w-full grid-cols-2 items-center justify-center gap-2">
        <div className="flex flex-col items-center gap-4">
          <div className="flex flex-col items-center gap-4">
            <FootballVisualizer />
          </div>
          <div className="grid grid-cols-2 items-center justify-center gap-2">
            {data ? (
              <>
                <Figure className="size-96" id="mpld3-figure" _json={data} />
                <FigureTools containerId="mpld3-figure" />
              </>
            ) : (
              <p>Loading...</p>
            )}
            {data2 ? (
              <>
                <Figure className="size-96" id="mpld3-figure2" _json={data2} />
                <FigureTools containerId="mpld3-figure2" />
              </>
            ) : (
              <p>Loading...</p>
            )}
          </div>
          <div className="relative">
            <FootballPitch size={size} grassPattern="striped" />
            <svg
              className="absolute top-0"
              width={size}
              height={REAL_WIDTH * scale}
            >
              <FootballArrows
                data={sampleData}
                pitchWidthPx={size}
                pitchHeightPx={REAL_WIDTH * scale}
              />
            </svg>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
