import React, { type FC } from "react";

const SOLID_COLOR = "#2d6a4f";
const STRIPED_COLOR_1 = "#2d7a3f";
const STRIPED_COLOR_2 = "#2d6f3f";

export interface PassData {
  id: number | string;
  from: [number, number]; // Percentage coordinates: [0 to 1, 0 to 1]
  to: [number, number];
  color?: string;
  type?: "arrow" | "line";
}

interface FootballPassesProps {
  data: PassData[];
  size?: number;
  grassPattern?: "solid" | "striped";
}

const FootballPasses: FC<FootballPassesProps> = ({
  data,
  size = 1050,
  grassPattern = "solid",
}) => {
  // Real-world standard dimensions (in meters)
  const REAL_LENGTH = 105;
  const REAL_WIDTH = 70;
  const scale = size / REAL_LENGTH;

  const pitchWidthPx = size;
  const pitchHeightPx = REAL_WIDTH * scale;

  const lineColor = "white";
  const lineWidth = 2;

  const centerX = pitchWidthPx / 2;
  const centerY = pitchHeightPx / 2;

  // Key distances (meters)
  const penaltySpotDistance = 11;
  const penaltyAreaDepth = 16.5;
  const goalAreaDepth = 5.5;
  const penaltyAreaWidth = 40.32;
  const goalAreaWidth = 18.32;
  const centerCircleRadiusM = 9.15;
  const penaltyArcRadiusM = 9.15;
  const cornerArcRadiusM = 1;

  // Pixel conversions
  const penaltyDepthPx = penaltyAreaDepth * scale;
  const penaltyWidthPx = penaltyAreaWidth * scale;
  const goalDepthPx = goalAreaDepth * scale;
  const goalWidthPx = goalAreaWidth * scale;
  const centerCircleRadius = centerCircleRadiusM * scale;
  const penaltyArcRadius = penaltyArcRadiusM * scale;
  const cornerArcRadius = cornerArcRadiusM * scale;

  const penaltyAreaTop = centerY - penaltyWidthPx / 2;
  const goalAreaTop = centerY - goalWidthPx / 2;

  const leftPenaltySpotX = penaltySpotDistance * scale;
  const rightPenaltySpotX = pitchWidthPx - penaltySpotDistance * scale;

  // Penalty arcs
  const leftPenaltyArcPath = describeArc(
    leftPenaltySpotX,
    centerY,
    penaltyArcRadius,
    37.5,
    142.5,
  );
  const rightPenaltyArcPath = describeArc(
    rightPenaltySpotX,
    centerY,
    penaltyArcRadius,
    217.5,
    322.5,
  );

  // Corner arcs
  const topLeftCornerArc = describeArc(0, 0, cornerArcRadius, 90, 180);
  const topRightCornerArc = describeArc(
    pitchWidthPx,
    0,
    cornerArcRadius,
    180,
    270,
  );
  const bottomRightCornerArc = describeArc(
    pitchWidthPx,
    pitchHeightPx,
    cornerArcRadius,
    270,
    360,
  );
  const bottomLeftCornerArc = describeArc(
    0,
    pitchHeightPx,
    cornerArcRadius,
    0,
    90,
  );

  // Stripes setup
  const stripesCount = 14;
  const stripeWidth = pitchWidthPx / stripesCount;

  return (
    <svg width={pitchWidthPx} height={pitchHeightPx}>
      {/* Background */}
      {grassPattern === "solid" ? (
        <rect
          x={0}
          y={0}
          width={pitchWidthPx}
          height={pitchHeightPx}
          fill={SOLID_COLOR}
        />
      ) : (
        <g>
          {[...Array(stripesCount)].map((_, i) => (
            <rect
              key={i}
              x={i * stripeWidth}
              y={0}
              width={stripeWidth}
              height={pitchHeightPx}
              fill={i % 2 === 0 ? STRIPED_COLOR_1 : STRIPED_COLOR_2}
            />
          ))}
        </g>
      )}

      {/* Add Background Arrow */}
      <image
        href="/right-arrow.svg"
        x={0} // Position in the middle of the pitch
        y={pitchHeightPx * 0.1} // Center the image vertically
        width={pitchWidthPx} // Scale the width relative to the pitch
        height={pitchHeightPx * 0.8} // Scale the height relative to the pitch
        opacity={0.2} // Add transparency for better effect
      />

      {/* Pitch Lines */}
      <g stroke={lineColor} strokeWidth={lineWidth} fill="none">
        {/* Outer boundary */}
        <rect x={0} y={0} width={pitchWidthPx} height={pitchHeightPx} />

        {/* Halfway line */}
        <line x1={centerX} y1={0} x2={centerX} y2={pitchHeightPx} />

        {/* Center circle */}
        <circle cx={centerX} cy={centerY} r={centerCircleRadius} />

        {/* Center spot */}
        <circle cx={centerX} cy={centerY} r={3} fill="white" stroke="none" />

        {/* Penalty areas */}
        <rect
          x={0}
          y={penaltyAreaTop}
          width={penaltyDepthPx}
          height={penaltyWidthPx}
        />
        <rect
          x={pitchWidthPx - penaltyDepthPx}
          y={penaltyAreaTop}
          width={penaltyDepthPx}
          height={penaltyWidthPx}
        />

        {/* Goal areas */}
        <rect x={0} y={goalAreaTop} width={goalDepthPx} height={goalWidthPx} />
        <rect
          x={pitchWidthPx - goalDepthPx}
          y={goalAreaTop}
          width={goalDepthPx}
          height={goalWidthPx}
        />

        {/* Penalty spots */}
        <circle
          cx={leftPenaltySpotX}
          cy={centerY}
          r={3}
          fill="white"
          stroke="none"
        />
        <circle
          cx={rightPenaltySpotX}
          cy={centerY}
          r={3}
          fill="white"
          stroke="none"
        />

        {/* Corner arcs */}
        <path d={topLeftCornerArc} />
        <path d={topRightCornerArc} />
        <path d={bottomRightCornerArc} />
        <path d={bottomLeftCornerArc} />

        {/* Penalty arcs */}
        <path d={leftPenaltyArcPath} />
        <path d={rightPenaltyArcPath} />
      </g>

      {/* Render lines/arrows from data */}
      {data.map((item) => {
        const { id, from, to, color, type } = item;
        // from and to are percentages, scale them
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
    </svg>
  );
};

/**
 * describeArc creates a path for an arc centered at (x,y) with radius and start/end angles.
 * Angles:
 * 0° = top, 90° = right, 180° = bottom, 270° = left, and increase clockwise.
 */
function describeArc(
  x: number,
  y: number,
  radius: number,
  startAngle: number,
  endAngle: number,
): string {
  const start = polarToCartesian(x, y, radius, endAngle);
  const end = polarToCartesian(x, y, radius, startAngle);
  const largeArcFlag = endAngle - startAngle <= 180 ? "0" : "1";

  return [
    "M",
    start.x,
    start.y,
    "A",
    radius,
    radius,
    0,
    largeArcFlag,
    0,
    end.x,
    end.y,
  ].join(" ");
}

function polarToCartesian(
  centerX: number,
  centerY: number,
  radius: number,
  angleInDegrees: number,
) {
  const angleInRadians = ((angleInDegrees - 90) * Math.PI) / 180.0;
  return {
    x: centerX + radius * Math.cos(angleInRadians),
    y: centerY + radius * Math.sin(angleInRadians),
  };
}

export default FootballPasses;
