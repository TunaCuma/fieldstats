import FootballPasses from "@/components/graphs/SoccerPitchArrows";

const sampleData = [
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
    <div className="flex h-screen w-full flex-col items-center justify-center gap-2">
      <h1>Football Data Visualization</h1>
      <FootballPasses data={sampleData} size={700} grassPattern="striped" />
    </div>
  );
}

export default App;
