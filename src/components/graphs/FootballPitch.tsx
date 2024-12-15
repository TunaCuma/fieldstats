import React, { type FC } from "react";

const SOLID_COLOR = "#2d6a4f";
const STRIPED_COLOR_1 = "#2d7a3f";
const STRIPED_COLOR_2 = "#2d6f3f";

interface FootballPitchProps {
  size?: number;
  grassPattern?: "solid" | "striped";
}

const FootballPitch: FC<FootballPitchProps> = ({
  size = 1050,
  grassPattern = "solid",
}) => {
  const REAL_LENGTH = 105;
  const REAL_WIDTH = 70;
  const scale = size / REAL_LENGTH;

  const pitchWidthPx = size;
  const pitchHeightPx = REAL_WIDTH * scale;

  const lineColor = "white";
  const lineWidth = 2;

  const centerX = pitchWidthPx / 2;
  const centerY = pitchHeightPx / 2;

  const penaltySpotDistance = 11;
  const penaltyAreaDepth = 16.5;
  const goalAreaDepth = 5.5;
  const penaltyAreaWidth = 40.32;
  const goalAreaWidth = 18.32;
  const centerCircleRadiusM = 9.15;
  const penaltyArcRadiusM = 9.15;
  const cornerArcRadiusM = 1;

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

      {/* Pitch Lines */}
      <g stroke={lineColor} strokeWidth={lineWidth} fill="none">
        <rect x={0} y={0} width={pitchWidthPx} height={pitchHeightPx} />
        <line x1={centerX} y1={0} x2={centerX} y2={pitchHeightPx} />
        <circle cx={centerX} cy={centerY} r={centerCircleRadius} />
        <circle cx={centerX} cy={centerY} r={3} fill="white" stroke="none" />
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
        <rect x={0} y={goalAreaTop} width={goalDepthPx} height={goalWidthPx} />
        <rect
          x={pitchWidthPx - goalDepthPx}
          y={goalAreaTop}
          width={goalDepthPx}
          height={goalWidthPx}
        />
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
        <path d={topLeftCornerArc} />
        <path d={topRightCornerArc} />
        <path d={bottomRightCornerArc} />
        <path d={bottomLeftCornerArc} />
        <path d={leftPenaltyArcPath} />
        <path d={rightPenaltyArcPath} />
      </g>
    </svg>
  );
};

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

export default FootballPitch;
