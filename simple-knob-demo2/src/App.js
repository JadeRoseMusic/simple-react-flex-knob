import React from "react";
import Knob from "simple-react-flex-knob";
import "./App.css";
import GIF from "./image/ro.gif";

function App() {
  const [disp, setDisp] = React.useState({ midi: 0, val: 0 });
  return (
    <>
      <h1>
        midi: {parseInt(disp.midi)} val: {disp.val.toFixed(2)}
      </h1>
      <Knob
        diameter="20vw"
        color="lightblue"
        pointerColor="white"
        action={(midi, val) => setDisp({ midi: midi, val: val })}
      />
      <Knob
        diameter="20vmax"
        style={{
          backgroundImage: "linear-gradient(to right, #4880EC, #019CAD)",
        }}
        pointerColor="white"
        action={(midi, val) => setDisp({ midi: midi, val: val })}
      />
      <Knob
        diameter="20%"
        style={{ backgroundImage: "url(" + GIF + ")" }}
        pointerColor="white"
        action={(midi, val) => setDisp({ midi: midi, val: val })}
      />
    </>
  );
}

export default App;
