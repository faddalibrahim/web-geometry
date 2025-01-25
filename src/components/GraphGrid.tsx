import React, { useRef, useState, useEffect, useMemo } from "react";
import GridLabels from "./GridLabels";
import { useSettings } from "../hooks/useSettings";

const GraphGrid: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [canvasSize, setCanvasSize] = useState({ width: 1800, height: 1800 });

  const { showGrid, gridLineColor, highlightedGridLineColor } = useSettings();

  const labelPositions = useMemo(() => {
    const positions: { x: number; y: number; label: string }[] = [];
    for (let i = 100; i <= canvasSize.width; i += 100) {
      positions.push({ x: i, y: 0, label: `${i}` }); // X-axis labels
      positions.push({ x: 0, y: i, label: `${i}` }); // Y-axis labels
    }
    return positions;
  }, [canvasSize.width]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas || !showGrid) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const gridSpacing = 10;
    const normalLineColor = gridLineColor;
    const highlightLineColor = highlightedGridLineColor;

    ctx.lineWidth = 1;

    const drawGrid = () => {
      const { width, height } = canvas;

      // Clear only the canvas area that needs updating
      ctx.clearRect(0, 0, width, height);

      // Draw vertical lines
      for (let x = 0; x <= width; x += gridSpacing) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, height);
        ctx.strokeStyle =
          x % (gridSpacing * 10) === 0 ? highlightLineColor : normalLineColor;
        ctx.stroke();
      }

      // Draw horizontal lines
      for (let y = 0; y <= height; y += gridSpacing) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
        ctx.strokeStyle =
          y % (gridSpacing * 10) === 0 ? highlightLineColor : normalLineColor;
        ctx.stroke();
      }
    };

    drawGrid();

    // Redraw grid on window resize using requestAnimationFrame
    const handleResize = () => {
      setCanvasSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [gridLineColor, highlightedGridLineColor, showGrid]);

  if (!showGrid) return <></>;

  return (
    <div>
      <canvas
        ref={canvasRef}
        width={canvasSize.width}
        height={canvasSize.height}
      />
      <GridLabels labels={labelPositions} />
    </div>
  );
};

export default GraphGrid;
