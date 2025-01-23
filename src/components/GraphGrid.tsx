import React, { useRef, useState, useEffect } from "react";

const GraphGrid: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  //   const [labels, setLabels] = useState<
  //     { x: number; y: number; label: string }[]
  //   >([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const canvasWidth = 1800;
    const canvasHeight = 1800;
    canvas.width = canvasWidth;
    canvas.height = canvasHeight;

    const gridSpacing = 10;
    const normalLineColor = "rgb(238, 238, 238)";
    const highlightLineColor = "darkgray";

    const drawGrid = () => {
      const { width, height } = canvas;

      ctx.clearRect(0, 0, width, height);

      // Draw vertical lines
      for (let x = 0; x <= width; x += gridSpacing) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, height);

        // highlight every 10th line
        ctx.strokeStyle =
          x % (gridSpacing * 10) === 0 ? highlightLineColor : normalLineColor;

        ctx.stroke();
      }

      // Draw horizontal lines
      for (let y = 0; y <= height; y += gridSpacing) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);

        // highlight every 10th line
        ctx.strokeStyle =
          y % (gridSpacing * 10) === 0 ? highlightLineColor : normalLineColor;

        ctx.stroke();
      }
    };

    drawGrid();

    // Redraw grid on window resize
    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      drawGrid();
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // Create labels after every 100th line
  useEffect(() => {
    const generateLabels = () => {
      const labelsList: { x: number; y: number; label: string }[] = [];
      for (let i = 100; i <= 1800; i += 100) {
        // Start at 100 to skip 0
        labelsList.push({ x: i, y: 0, label: `${i}` }); // X-axis labels
        labelsList.push({ x: 0, y: i, label: `${i}` }); // Y-axis labels
      }
      //   setLabels(labelsList);
    };

    generateLabels();
  }, []);

  return (
    <div style={{ position: "relative" }}>
      <canvas ref={canvasRef} style={{ border: "1px solid #ccc", zIndex: 1 }} />
      {/* <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          pointerEvents: "none",
          zIndex: 2,
        }}
      >
        {labels.map((label, index) => (
          <div
            key={index}
            style={{
              position: "absolute",
              left: `${label.x + 5}px`, // Position the label slightly to the right of the grid lines
              top: `${label.y + 5}px`, // Position the label slightly below the grid lines
              color: "darkgray",
              fontSize: "12px",
            }}
          >
            {label.label}
          </div>
        ))}
      </div> */}
    </div>
  );
};

export default GraphGrid;
