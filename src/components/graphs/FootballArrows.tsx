import React, { type FC } from "react";

export interface PassData {
  id: number | string;
  from: [number, number];
  to: [number, number];
  color?: string;
  type?: "arrow" | "line";
}

interface FootballArrowsProps {
  data: PassData[];
  pitchWidthPx: number;
  pitchHeightPx: number;
}

const FootballArrows: FC<FootballArrowsProps> = ({
  data,
  pitchWidthPx,
  pitchHeightPx,
}) => {
  return (
    <>
      {data.map((item) => {
        const { id, from, to, color, type } = item;
        const [fx, fy] = from;
        const [tx, ty] = to;
        const x1 = fx * pitchWidthPx;
        const y1 = fy * pitchHeightPx;
        const x2 = tx * pitchWidthPx;
        const y2 = ty * pitchHeightPx;

        const markerId = `arrowhead-${id}`;

        return (
          <React.Fragment key={id}>
            {type === "arrow" && (
              <defs>
                <marker
                  id={markerId}
                  markerWidth={10}
                  markerHeight={10}
                  refX={9}
                  refY={3}
                  orient="auto"
                  fill={color || "white"}
                >
                  <path d="M0,0 L0,6 L9,3 z" />
                </marker>
              </defs>
            )}
            <line
              x1={x1}
              y1={y1}
              x2={x2}
              y2={y2}
              stroke={color || "white"}
              strokeWidth={2}
              markerEnd={type === "arrow" ? `url(#${markerId})` : undefined}
              style={{
                vectorEffect:
                  "non-scaling-stroke" as React.CSSProperties["vectorEffect"],
              }}
            />
          </React.Fragment>
        );
      })}
    </>
  );
};

export default FootballArrows;
