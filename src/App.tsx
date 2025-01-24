import GraphGrid from "./components/GraphGrid";
import DraggableBox from "./components/DraggableBox";

function App() {
  return (
    <div>
      <GraphGrid />
      {/* <div className="box" ref={boxRef}>
        <small>100 x 100</small>
      </div>
      <Marker mRef={xMarkerRef} label="x / left" orientation={HORIZONTAL} />
      <Marker mRef={yMarkerRef} label="y / top" orientation={VERTICAL} /> */}
      {/* <Box/> */}
      {/* <Settings/> */}
      <DraggableBox />
    </div>
  );
}

export default App;
