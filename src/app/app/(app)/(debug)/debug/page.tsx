"use client";
import Figure from "./Figure";
import { type PassData } from "@/components/graphs/SoccerPitchArrows";
import FootballPitch from "@/components/graphs/FootballPitch";
import FootballArrows from "@/components/graphs/FootballArrows";
import { fetchJson } from "./figure-fetch-action";
import { useEffect, useState } from "react";
import FigureTools from "./FigureTools";
import PlayerVisualization from "@/components/graphs/PlayerVisualization";

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
      <div className="mx-auto flex flex-col items-center gap-2">
        <div className="flex flex-col items-center gap-4">
          <PlayerVisualization />
        </div>
        <div className="flex flex-row items-center gap-4">
          {data ? (
            <div>
              <Figure className="size-96" id="mpld3-figure" _json={data} />
              <FigureTools containerId="mpld3-figure" />
            </div>
          ) : (
            <p>Loading...</p>
          )}
          {data2 ? (
            <div>
              <Figure className="size-96" id="mpld3-figure2" _json={data2} />
              <FigureTools containerId="mpld3-figure2" />
            </div>
          ) : (
            <p>Loading...</p>
          )}
        </div>
      </div>
    </>
  );
}

export default App;