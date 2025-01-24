import styles from "../css/Marker.module.css";

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
  return (
    <div
      className={
        orientation === HORIZONTAL
          ? styles.horizontalMarker
          : styles.verticalMarker
      }
      ref={mRef}
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
        <small>{value}</small>
      </div>
    </div>
  );
}
