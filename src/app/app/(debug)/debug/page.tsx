"use client";
import FootballPasses, {
  type PassData,
} from "@/components/graphs/SoccerPitchArrows";

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
  return (
    <>
      <div className="mx-auto grid w-full grid-cols-2 items-center justify-center gap-2">
        <div className="flex flex-col items-center gap-4">
          <FootballPasses data={sampleData} size={700} grassPattern="striped" />
        </div>
      </div>
    </>
  );
}

export default App;
