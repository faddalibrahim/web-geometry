import { useState } from "react";
import styles from "../css/custom-color-picker.module.css";

const CustomColorPicker = ({
  onChange,
  label,
  defaultColor,
}: {
  onChange?: any;
  defaultColor?: string;
  label: string;
}) => {
  const [selectedColor, setSelectedColor] = useState(defaultColor || "fff");

  const handleColorChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const color = e.target.value;
    setSelectedColor(color);
    if (onChange) onChange(color); // Trigger the callback if provided
  };

  return (
    <div className={styles.customColorPicker}>
      <input
        type="color"
        id={label}
        value={selectedColor}
        onChange={handleColorChange}
        hidden
        defaultValue="orange"
      />
      <label htmlFor={label}>
        <div
          className={styles.colorPreview}
          style={{ backgroundColor: selectedColor }}
        />
        <p>{label}</p>
      </label>
    </div>
  );
};

export default CustomColorPicker;
