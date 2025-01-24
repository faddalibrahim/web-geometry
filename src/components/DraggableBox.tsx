import { useRef, useEffect } from "react";
import Marker from "./Marker";
import styles from "../css/DraggableBox.module.css";

interface DraggableBoxProps {}

const DraggableBox: React.FC<DraggableBoxProps> = ({}) => {
  const boxRef = useRef<HTMLDivElement>(null);
  const xMarkerRef = useRef<HTMLDivElement>(null);
  const yMarkerRef = useRef<HTMLDivElement>(null);
  const HORIZONTAL = "horizontal";
  const VERTICAL = "vertical";

  const handleMouseDownRef = useRef<(event: MouseEvent) => void>();

  // for box tracking
  const lastLeftRef = useRef(0);
  const lastTopRef = useRef(0);

  // for mouse tracking
  const startingXRef = useRef(0);
  const startingYRef = useRef(0);

  function moved(event: MouseEvent) {
    if (event.buttons === 0) {
      window.removeEventListener("mousemove", moved);
    } else {
      if (boxRef.current && startingXRef.current) {
        const distX = event.clientX - startingXRef.current;
        const distY = event.clientY - startingYRef.current;

        const newLeft = lastLeftRef.current + distX;
        const newTop = lastTopRef.current + distY;

        boxRef.current.style.left = newLeft + "px";
        boxRef.current.style.top = newTop + "px";

        xMarkerRef.current.style.width = newLeft + "px";
        xMarkerRef.current.style.top = newTop + "px";

        yMarkerRef.current.style.height = newTop + "px";
        yMarkerRef.current.style.left = newLeft + "px";
      }
    }
  }

  function init() {
    const box = boxRef.current;
    const xMarker = xMarkerRef.current;
    const yMarker = yMarkerRef.current;

    if (box && xMarker && yMarker) {
      const { top, left } = box.getBoundingClientRect();
      console.log("init", box.getBoundingClientRect());

      lastLeftRef.current = left;
      lastTopRef.current = top;

      xMarker.style.top = `${lastTopRef.current}px`;
      xMarker.style.width = `${lastLeftRef.current}px`;

      yMarker.style.left = `${lastLeftRef.current}px`;
      yMarker.style.height = `${lastTopRef.current}px`;
      const handleMouseDown = (event: MouseEvent) => {
        if (event.button === 0) {
          startingXRef.current = event.clientX;
          startingYRef.current = event.clientY;

          const { top, left } = box.getBoundingClientRect();

          lastLeftRef.current = left;
          lastTopRef.current = top;

          //   xMarker.style.top = `${lastTopRef.current}px`;
          //   yMarker.style.left = `${lastLeftRef.current}px`;

          window.addEventListener("mousemove", moved);
          event.preventDefault();
        }
      };

      handleMouseDownRef.current = handleMouseDown;
      box.addEventListener("mousedown", handleMouseDown);
    }
  }

  useEffect(() => {
    init();

    return () => {
      const box = boxRef.current;

      if (box && handleMouseDownRef.current) {
        box.removeEventListener("mousedown", handleMouseDownRef.current);
      }

      window.removeEventListener("mousemove", moved);
    };
  }, []);

  return (
    <>
      <div className={styles.box} ref={boxRef}>
        <small>100 x 100</small>
      </div>
      <Marker mRef={xMarkerRef} label="x / left" orientation={HORIZONTAL} />
      <Marker mRef={yMarkerRef} label="y / top" orientation={VERTICAL} />
    </>
  );
};

export default DraggableBox;
