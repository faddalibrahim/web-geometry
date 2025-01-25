// context/SettingsContext.tsx
import { createContext, useState, ReactNode } from "react";

type SettingsState = {
  canvasBgColor: string;
  showGrid: boolean;
  horizontalGridLineColor: string;
  verticalGridLineColor: string;
  highlightedGridLineColor: string;
  dimensionLinesColor: string;
  gridSize: number;
  boxColor: string;
  updateSettings: (
    key: keyof SettingsState,
    value: string | boolean | number
  ) => void;
};

const SettingsContext = createContext<SettingsState | undefined>(undefined);

export const SettingsProvider = ({ children }: { children: ReactNode }) => {
  const [settings, setSettings] = useState({
    gridSize: 10,
    boxColor: "blue",
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
