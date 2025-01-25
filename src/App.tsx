import GraphGrid from "./components/GraphGrid";
import DraggableBox from "./components/DraggableBox";
import Settings from "./components/Settings";
import { SettingsProvider } from "./context/SettingsContext";

function App() {
  return (
    <SettingsProvider>
      <GraphGrid />
      <DraggableBox />
      <Settings />
    </SettingsProvider>
  );
}

export default App;
