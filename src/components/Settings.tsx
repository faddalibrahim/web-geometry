import { useState } from "react";
import styles from "../css/settings.module.css";
import Icons from "./Icons";
import CustomColorPicker from "./CustomColorPicker";
import { useSettings } from "../hooks/useSettings";
import { EASE_IN, EASE_IN_OUT, EASE_OUT, LINEAR } from "../utils/constants";

const Settings: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const {
    updateSettings,
    showGrid,
    canvasBgColor,
    boxColor,
    gridLineColor,
    highlightedGridLineColor,
    dimensionLinesColor,
  } = useSettings();

  const toggleSettings = () => {
    setIsOpen((prev) => !prev);
  };
  return (
    <div className={styles.settings}>
      {!isOpen && (
        <div className={styles.settingsIcon} onClick={toggleSettings}>
          <Icons.Settings />
        </div>
      )}
      <div
        className={`${styles.settingsContainer} ${isOpen ? styles.show : ""}`}
      >
        <div className={styles.header}>
          <Icons.Close onClick={toggleSettings} />
        </div>

        <label>
          <input
            type="checkbox"
            id="gridLines"
            onChange={(e) => updateSettings("showGrid", e.target.checked)}
            checked={showGrid}
          />
          <span>Toggle Grid</span>
        </label>

        <label>
          <input
            type="checkbox"
            id="markers"
            onChange={(e) =>
              updateSettings("showDimensionLines", e.target.checked)
            }
          />
          <span>Toggle Dimension Lines</span>
        </label>

        <hr />

        <CustomColorPicker
          label="Canvas Background Color"
          onChange={(color: string) => updateSettings("canvasBgColor", color)}
          defaultColor={canvasBgColor}
        />
        <CustomColorPicker
          label=" Grid Line Color"
          onChange={(color: string) => updateSettings("gridLineColor", color)}
          defaultColor={gridLineColor}
        />
        <CustomColorPicker
          label="Highlighted Grid Line Color"
          onChange={(color: string) =>
            updateSettings("highlightedGridLineColor", color)
          }
          defaultColor={highlightedGridLineColor}
        />
        <CustomColorPicker
          label="Marker Color Grid Line Color"
          onChange={(color: string) =>
            updateSettings("dimensionLinesColor", color)
          }
          defaultColor={dimensionLinesColor}
        />
        <CustomColorPicker
          label="Box Color"
          onChange={(color: string) => updateSettings("boxColor", color)}
          defaultColor={boxColor}
        />

        <hr />

        <label>
          <span>Box Transition Timing Function</span>
          <select
            id="transitionTimingFunction"
            onChange={(e) =>
              updateSettings("boxTransitionTiming", e.target.value)
            }
          >
            <option value="ease-in">{EASE_IN}</option>
            <option value="ease-out">{EASE_OUT}</option>
            <option value="ease-in-out">{EASE_IN_OUT}</option>
            <option value="linear">{LINEAR}</option>
          </select>
        </label>

        <label>
          <span>Box Transition Duration (ms)</span>
          <input
            type="number"
            id="transitionDuration"
            min={0}
            max={1000}
            step={100}
            onChange={(e) =>
              updateSettings("boxTransitionDuration", parseInt(e.target.value))
            }
          />
        </label>
      </div>
    </div>
  );
};

export default Settings;
