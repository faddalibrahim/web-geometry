import { useRef, useEffect, useCallback, useState } from "react";
import Marker from "./Marker";
import styles from "../css/DraggableBox.module.css";

const DraggableBox: React.FC = () => {
  const boxRef = useRef<HTMLDivElement>(null);
  const xMarkerRef = useRef<HTMLDivElement>(null);
  const yMarkerRef = useRef<HTMLDivElement>(null);
  const HORIZONTAL = "horizontal";
  const VERTICAL = "vertical";

  const lastLeftRef = useRef(0);
  const lastTopRef = useRef(0);
  const startingXRef = useRef(0);
  const startingYRef = useRef(0);

  // Add state for x and y values
  const [xValue, setXValue] = useState(0);
  const [yValue, setYValue] = useState(0);

  const handleMouseMove = useCallback((event: MouseEvent) => {
    if (boxRef.current && xMarkerRef.current && yMarkerRef.current) {
      const distX = event.clientX - startingXRef.current;
      const distY = event.clientY - startingYRef.current;

      const newLeft = lastLeftRef.current + distX;
      const newTop = lastTopRef.current + distY;

      boxRef.current.style.left = `${newLeft}px`;
      boxRef.current.style.top = `${newTop}px`;

      xMarkerRef.current.style.width = `${newLeft}px`;
      xMarkerRef.current.style.top = `${newTop}px`;

      yMarkerRef.current.style.height = `${newTop}px`;
      yMarkerRef.current.style.left = `${newLeft}px`;

      setXValue(newLeft);
      setYValue(newTop);
    }
  }, []);

  const handleMouseDown = useCallback(
    (event: MouseEvent) => {
      if (event.button === 0 && boxRef.current) {
        const { top, left } = boxRef.current.getBoundingClientRect();

        startingXRef.current = event.clientX;
        startingYRef.current = event.clientY;
        lastLeftRef.current = left;
        lastTopRef.current = top;

        window.addEventListener("mousemove", handleMouseMove);
        window.addEventListener("mouseup", handleMouseUp);
        event.preventDefault();
      }
    },
    [handleMouseMove]
  );

  const handleMouseUp = useCallback(() => {
    window.removeEventListener("mousemove", handleMouseMove);
    window.removeEventListener("mouseup", handleMouseUp);
  }, [handleMouseMove]);

  useEffect(() => {
    const box = boxRef.current;
    const xMarker = xMarkerRef.current;
    const yMarker = yMarkerRef.current;

    if (box && xMarker && yMarker) {
      const { top, left } = box.getBoundingClientRect();

      xMarker.style.top = `${top}px`;
      xMarker.style.width = `${left}px`;

      yMarker.style.left = `${left}px`;
      yMarker.style.height = `${top}px`;

      setXValue(left);
      setYValue(top);

      box.addEventListener("mousedown", handleMouseDown);
    }

    return () => {
      if (box) {
        box.removeEventListener("mousedown", handleMouseDown);
      }
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, [handleMouseDown, handleMouseMove, handleMouseUp]);

  return (
    <>
      <div className={styles.box} ref={boxRef}>
        <small>100 x 100</small>
      </div>
      <Marker
        mRef={xMarkerRef}
        label="x / left"
        orientation={HORIZONTAL}
        value={xValue}
      />
      <Marker
        mRef={yMarkerRef}
        label="y / top"
        orientation={VERTICAL}
        value={yValue}
      />
    </>
  );
};

export default DraggableBox;
