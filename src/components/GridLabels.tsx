interface LabelProps {
  x: number;
  y: number;
  label: string;
}

interface LabelsProps {
  labels: { x: number; y: number; label: string }[];
}

const Label: React.FC<LabelProps> = ({ x, y, label }) => {
  return (
    <div
      style={{
        position: "absolute",
        left: `${x + 2}px`,
        top: `${y + 2}px`,
        color: "darkgray",
        fontSize: "12px",
      }}
    >
      {label}
    </div>
  );
};

const GridLabels: React.FC<LabelsProps> = ({ labels }) => {
  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        pointerEvents: "none",
      }}
    >
      {labels.map((label, index) => (
        <Label key={index} x={label.x} y={label.y} label={label.label} />
      ))}
    </div>
  );
};

export default GridLabels;
