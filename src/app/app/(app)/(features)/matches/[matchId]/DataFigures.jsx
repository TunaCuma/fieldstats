import Figure from "../../../(debug)/debug/Figure";
import FigureTools from "../../../(debug)/debug/FigureTools";
import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const DataFigures = () => {
  const HeatmapData = () => {
    const teamHeatmapFiles = [
      {
        filename: "home_high_speed_heatmap_percent.json",
        id: "team-home-high-speed-heatmap-percent",
        title: "Home High Speed Heatmap (Percentage)",
      },
      {
        filename: "away_gaussian_heatmap.json",
        id: "team-away-gaussian-heatmap",
        title: "Away Gaussian Heatmap",
      },
      {
        filename: "home_high_speed_gaussian_heatmap.json",
        id: "team-home-high-speed-gaussian-heatmap",
        title: "Home High Speed Gaussian Heatmap",
      },
      {
        filename: "away_high_speed_gaussian_heatmap.json",
        id: "team-away-high-speed-gaussian-heatmap",
        title: "Away High Speed Gaussian Heatmap",
      },
      {
        filename: "home_heatmap_percent.json",
        id: "team-home-heatmap-percent",
        title: "Home Heatmap (Percentage)",
      },
      {
        filename: "away_heatmap_percent.json",
        id: "team-away-heatmap-percent",
        title: "Away Heatmap (Percentage)",
      },
      {
        filename: "home_gaussian_heatmap.json",
        id: "team-home-gaussian-heatmap",
        title: "Home Gaussian Heatmap",
      },
    ];

    return (
      <div className="space-y-8">
        <h2 className="text-2xl font-bold">Heatmaps</h2>

        <Accordion type="single" collapsible className="w-full">
          {/* Team Heatmaps */}
          <AccordionItem value="team-heatmaps">
            <AccordionTrigger className="text-xl font-semibold">
              Team Heatmaps
            </AccordionTrigger>
            <AccordionContent>
              <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                {teamHeatmapFiles.map(({ filename, id, title }) => (
                  <div key={`team-heatmap-${filename}`} className="space-y-2">
                    <h4 className="text-lg font-medium">{title}</h4>
                    <div>
                      <Figure
                        id={id}
                        className="aspect-video w-96"
                        _json={`/data/heatmap_data/team/${filename}`}
                      />
                      <FigureTools containerId={id} />
                    </div>
                  </div>
                ))}
              </div>
            </AccordionContent>
          </AccordionItem>

          {/* Player Heatmaps */}
          {Array.from({ length: 23 }, (_, i) => i + 1).map((playerId) => (
            <AccordionItem
              key={`player-${playerId}-accordion`}
              value={`player-${playerId}`}
            >
              <AccordionTrigger className="text-lg font-medium">
                Player {playerId} Heatmaps
              </AccordionTrigger>
              <AccordionContent>
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                  <div className="space-y-2">
                    <h4 className="text-base font-medium">Standard Heatmap</h4>
                    <div>
                      <Figure
                        id={`player-${playerId}-gaussian-heatmap`}
                        className="aspect-video w-96"
                        _json={`/data/heatmap_data/player/${playerId}/gaussian_heatmap.json`}
                      />
                      <FigureTools
                        containerId={`player-${playerId}-gaussian-heatmap`}
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <h4 className="text-base font-medium">
                      Percentage Heatmap
                    </h4>
                    <div>
                      <Figure
                        id={`player-${playerId}-heatmap-percent`}
                        className="aspect-video w-96"
                        _json={`/data/heatmap_data/player/${playerId}/heatmap_percent.json`}
                      />
                      <FigureTools
                        containerId={`player-${playerId}-heatmap-percent`}
                      />
                    </div>
                  </div>

                  {/* High-speed heatmaps for specific players */}
                  {[
                    1, 3, 4, 5, 6, 7, 9, 10, 11, 14, 15, 16, 17, 18, 19, 20, 22,
                    23,
                  ].includes(playerId) && (
                      <>
                        <div className="space-y-2">
                          <h4 className="text-base font-medium">
                            High Speed Gaussian Heatmap
                          </h4>
                          <div>
                            <Figure
                              id={`player-${playerId}-high-speed-gaussian-heatmap`}
                              className="aspect-video w-96"
                              _json={`/data/heatmap_data/player/${playerId}/high_speed_gaussian_heatmap.json`}
                            />
                            <FigureTools
                              containerId={`player-${playerId}-high-speed-gaussian-heatmap`}
                            />
                          </div>
                        </div>

                        <div className="space-y-2">
                          <h4 className="text-base font-medium">
                            High Speed Percentage Heatmap
                          </h4>
                          <div>
                            <Figure
                              id={`player-${playerId}-high-speed-heatmap-percent`}
                              className="aspect-video w-96"
                              _json={`/data/heatmap_data/player/${playerId}/high_speed_heatmap_percent.json`}
                            />
                            <FigureTools
                              containerId={`player-${playerId}-high-speed-heatmap-percent`}
                            />
                          </div>
                        </div>
                      </>
                    )}
                </div>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    );
  };

  return (
    <div className="space-y-12 p-8">
      <HeatmapData />
    </div>
  );
};

export default DataFigures;
