import { useRef } from "react";
import Marker from ".//Marker";

interface DraggableBoxProps {
  // Optional props to customize labels for markers
  xLabel?: string;
  yLabel?: string;
  rightLabel?: string;
  bottomLabel?: string;
}

const DraggableBox: React.FC<DraggableBoxProps> = ({
  xLabel = "x / left",
  yLabel = "y / top",
  rightLabel = "right",
  bottomLabel = "bottom",
}) => {
  const boxRef = useRef<HTMLDivElement>(null);
  const xMarkerRef = useRef<HTMLDivElement>(null);
  const yMarkerRef = useRef<HTMLDivElement>(null);
  const HORIZONTAL = "horizontal";
  const VERTICAL = "vertical";

  return (
    <>
      <div className="box" ref={boxRef}>
        <small>100 x 100</small>
      </div>
      <Marker mRef={xMarkerRef} label="x / left" orientation={HORIZONTAL} />
      <Marker mRef={yMarkerRef} label="y / top" orientation={VERTICAL} />
    </>
  );
};

export default DraggableBox;
