import { useRef, useEffect, useCallback, useState } from "react";
import Marker from "./Marker";
import styles from "../css/DraggableBox.module.css";
import {
  HORIZONTAL,
  VERTICAL,
  MOUSE_DOWN,
  MOUSE_MOVE,
  MOUSE_UP,
} from "../utils/constants";
import { useSettings } from "../hooks/useSettings";

const DraggableBox: React.FC = () => {
  const boxRef = useRef<HTMLDivElement>(null);
  const xMarkerRef = useRef<HTMLDivElement>(null);
  const yMarkerRef = useRef<HTMLDivElement>(null);

  const lastLeftRef = useRef(0);
  const lastTopRef = useRef(0);
  const startingXRef = useRef(0);
  const startingYRef = useRef(0);

  const rMarkerRef = useRef<HTMLDivElement>(null);
  const bMarkerRef = useRef<HTMLDivElement>(null);

  // Add state for x and y values
  const [xValue, setXValue] = useState(0);
  const [yValue, setYValue] = useState(0);

  const [rValue, setRValue] = useState(0);
  const [bValue, setBValue] = useState(0);

  const handleMouseMove = useCallback((event: MouseEvent) => {
    if (
      boxRef.current &&
      xMarkerRef.current &&
      yMarkerRef.current &&
      rMarkerRef.current &&
      bMarkerRef.current
    ) {
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

      rMarkerRef.current.style.width = `${newLeft + 100}px`;
      rMarkerRef.current.style.top = `${newTop + 100}px`;

      bMarkerRef.current.style.left = `${newLeft + 100}px`;
      bMarkerRef.current.style.height = `${newTop + 100}px`;

      setXValue(newLeft);
      setYValue(newTop);

      setRValue(newLeft + 100);
      setBValue(newTop + 100);
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
    window.removeEventListener(MOUSE_MOVE, handleMouseMove);
    window.removeEventListener(MOUSE_UP, handleMouseUp);
  }, [handleMouseMove]);

  useEffect(() => {
    const box = boxRef.current;
    const xMarker = xMarkerRef.current;
    const yMarker = yMarkerRef.current;
    const rMarker = rMarkerRef.current;
    const bMarker = bMarkerRef.current;

    if (box && xMarker && yMarker && rMarker && bMarker) {
      const { top, left, right, height, bottom, width } =
        box.getBoundingClientRect();

      xMarker.style.top = `${top}px`;
      xMarker.style.width = `${left}px`;

      yMarker.style.left = `${left}px`;
      yMarker.style.height = `${top}px`;

      rMarker.style.width = `${right}px`;
      rMarker.style.top = `${top + height}px`;

      bMarker.style.height = `${bottom}px`;
      bMarker.style.left = `${left + width}px`;

      setXValue(left);
      setYValue(top);

      setRValue(right);
      setBValue(bottom);

      box.addEventListener("mousedown", handleMouseDown);
    }

    return () => {
      if (box) {
        box.removeEventListener(MOUSE_DOWN, handleMouseDown);
      }
      window.removeEventListener(MOUSE_MOVE, handleMouseMove);
      window.removeEventListener(MOUSE_UP, handleMouseUp);
    };
  }, [handleMouseDown, handleMouseMove, handleMouseUp]);

  const {
    boxTransitionDuration,
    boxTransitionTiming,
    showDimensionLines,
    boxColor,
  } = useSettings();

  return (
    <>
      <div
        className={styles.box}
        ref={boxRef}
        style={{
          transition: `all ${boxTransitionDuration}ms ${boxTransitionTiming}`,
          "--box-color": boxColor,
        }}
      >
        <small>100 x 100</small>
      </div>
      {showDimensionLines && (
        <>
          {" "}
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
          <Marker
            mRef={rMarkerRef}
            label="right"
            orientation={HORIZONTAL}
            value={rValue}
          />
          <Marker
            mRef={bMarkerRef}
            label="bottom"
            orientation={VERTICAL}
            value={bValue}
          />
        </>
      )}
    </>
  );
};

export default DraggableBox;
