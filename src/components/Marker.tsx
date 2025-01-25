import styles from "../css/Marker.module.css";
import { useSettings } from "../hooks/useSettings";

interface MarkerProps {
  mRef: React.RefObject<HTMLDivElement>;
  label: string;
  orientation: string;
  value: number;
}

export default function Marker({
  mRef,
  label,
  orientation,
  value,
}: MarkerProps) {
  const HORIZONTAL = "horizontal";
  const { boxTransitionDuration, boxTransitionTiming, dimensionLinesColor } =
    useSettings();
  return (
    <div
      className={
        orientation === HORIZONTAL
          ? styles.horizontalMarker
          : styles.verticalMarker
      }
      ref={mRef}
      style={{
        transition: `all ${boxTransitionDuration}ms ${boxTransitionTiming}`,
        "--line-color": dimensionLinesColor,
      }}
    >
      <div
        className={
          orientation === HORIZONTAL
            ? styles.horizontalBody
            : styles.verticalBody
        }
      >
        {orientation === HORIZONTAL ? (
          <div className={styles.arrowLeft} />
        ) : (
          <div className={styles.arrowUp} />
        )}
        <div
          className={
            orientation === HORIZONTAL
              ? styles.horizontalLine
              : styles.verticalLine
          }
        />
        {orientation === HORIZONTAL ? (
          <div className={styles.arrowRight} />
        ) : (
          <div className={styles.arrowDown} />
        )}
      </div>
      <div className={styles.markerLabel}>
        <p> {label} </p>
        <small>{value} px</small>
      </div>
    </div>
  );
}
