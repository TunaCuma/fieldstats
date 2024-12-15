"use client";
import FootballPasses, {
  type PassData,
} from "@/components/graphs/SoccerPitchArrows";
import { useEffect, useState } from "react";
import { fetchAndStyleHtml } from "@/lib/utils";
import Buttons from "./Buttons";

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

function App() {
  const [htmlContent, setHtmlContent] = useState("");
  const [htmlContent2, setHtmlContent2] = useState("");

  useEffect(() => {
    const fetchContent = async () => {
      const styledHtml = await fetchAndStyleHtml("/api/python/passes");

      if (styledHtml) {
        console.log("styledHtml:", styledHtml);
        setHtmlContent(styledHtml);
      }
    };

    const fetchContent2 = async () => {
      const styledHtml = await fetchAndStyleHtml("/api/python/dominations");

      if (styledHtml) {
        console.log("styledHtml2:", styledHtml);
        setHtmlContent2(styledHtml);
      }
    };

    const runFetches = async () => {
      await fetchContent();
      await fetchContent2();
    };

    runFetches();
  }, []);

  return (
    <>
      <div className="mx-auto grid w-full grid-cols-2 items-center justify-center gap-2">
        <div className="flex flex-col items-center gap-4">
          <div
            className="relative h-[875px] w-[990px] transform-gpu overflow-hidden rounded-lg"
            dangerouslySetInnerHTML={{ __html: htmlContent }}
          />
          <Buttons />
        </div>
        <div className="flex flex-col items-center gap-4">
          <div
            className="relative h-[475px] w-[700px] transform-gpu overflow-hidden rounded-lg"
            dangerouslySetInnerHTML={{ __html: htmlContent2 }}
          />
          <Buttons />
        </div>
        <div className="flex flex-col items-center gap-4">
          <FootballPasses data={sampleData} size={700} grassPattern="striped" />
          <Buttons />
        </div>
      </div>
    </>
  );
}

export default App;
