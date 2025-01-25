// context/SettingsContext.tsx
import { createContext, useState, ReactNode } from "react";

type SettingsState = {
  canvasBgColor: string;
  showGrid: boolean;
  showDimensionLines: boolean;
  gridLineColor: string;
  highlightedGridLineColor: string;
  dimensionLinesColor: string;
  boxColor: string;
  boxTransitionTiming: string;
  boxTransitionDuration: number;
  updateSettings: (
    key: keyof SettingsState,
    value: string | boolean | number
  ) => void;
};

const SettingsContext = createContext<SettingsState | undefined>(undefined);

export const SettingsProvider = ({ children }: { children: ReactNode }) => {
  const [settings, setSettings] = useState({
    canvasBgColor: "#fff",
    showGrid: true,
    showDimensionLines: true,
    gridLineColor: "#eee",
    highlightedGridLineColor: "darkgray",
    dimensionLinesColor: "rgba(72, 61, 139, 0.5)",
    boxColor: "rgba(72, 61, 139, 0.5)",
    boxTransitionTiming: "ease-in-out",
    boxTransitionDuration: 200,
    updateSettings: (
      key: keyof SettingsState,
      value: string | boolean | number
    ) => {
      setSettings((prev) => ({ ...prev, [key]: value }));
    },
  });

  const updateSettings = (
    key: keyof SettingsState,
    value: string | boolean | number
  ) => {
    setSettings((prev) => ({ ...prev, [key]: value }));
  };

  return (
    <SettingsContext.Provider value={{ ...settings, updateSettings }}>
      {children}
    </SettingsContext.Provider>
  );
};

export default SettingsContext;
