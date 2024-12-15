import React from "react";
import { Button } from "@/components/ui/button";
import { RefreshCw, Move, SquareDashed } from "lucide-react";

type ClickButtonProps = {
  containerId: string;
};

const FigureTools: React.FC<ClickButtonProps> = ({ containerId }) => {
  const handleClick = (selector: string) => {
    // Find the container by ID and search for the button within it
    const container = document.getElementById(containerId);
    if (container) {
      const button = container.querySelector(selector);
      if (button) {
        button.dispatchEvent(
          new MouseEvent("click", { bubbles: true, cancelable: true }),
        );
      } else {
        console.warn(
          `Button with selector '${selector}' not found in container '${containerId}'`,
        );
      }
    } else {
      console.warn(`Container with ID '${containerId}' not found`);
    }
  };

  return (
    <div className="flex flex-row gap-4 p-4">
      <Button
        className="flex items-center gap-2 rounded-md bg-blue-500 px-4 py-2 text-white hover:bg-blue-600"
        onClick={() => handleClick("image.mpld3-resetbutton")}
      >
        <RefreshCw className="h-4 w-4" />
      </Button>

      <Button
        className="flex items-center gap-2 rounded-md bg-green-500 px-4 py-2 text-white hover:bg-green-600"
        onClick={() => handleClick("image.mpld3-zoombutton")}
      >
        <Move className="size-4" />
      </Button>

      <Button
        className="flex items-center gap-2 rounded-md bg-yellow-500 px-4 py-2 text-white hover:bg-yellow-600"
        onClick={() => handleClick("image.mpld3-boxzoombutton")}
      >
        <SquareDashed className="size-4" />
      </Button>
    </div>
  );
};

export default FigureTools;
