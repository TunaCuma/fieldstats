"use client";
import { useEffect } from "react";
import mpld3 from "mpld3";

//TODO if rect is white make it black
//TODO hide toolbar
export default function Figure({
  id,
  _json,
  className,
}: {
  id: string;
  _json: any;
  className?: string;
}) {
  useEffect(() => {
    // Remove any existing figure
    mpld3.remove_figure(id);
    // Draw the new figure
    mpld3.draw_figure(id, _json);

    // Update SVG attributes
    const updateSvgAttributes = () => {
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
        }
      }
    };

    // Ensure the SVG is updated after the figure is drawn
    setTimeout(updateSvgAttributes, 0);

    // Cleanup on unmount
    return () => {
      mpld3.remove_figure(id);
    };
  }, [id, _json]); // Dependency array to re-run effect when id or _json changes

  return <div id={id} className={className} />;
}
