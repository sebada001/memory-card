import { useState, useEffect } from "react";
import "./App.css";
import { generateRandomOrder } from "./utilities";
import {
  Dance,
  Doom,
  Drown,
  Escape,
  Elder,
  Garruk,
  Grumgully,
  Improbable,
  Veteran,
  Lochmere,
  Pixie,
  Oko,
  Outlaws,
  Scions,
  Hunter,
  Chaser,
  Lance,
  Crusader,
  Wandermare,
  Commander,
} from "./img/image_index.js";

function App() {
  const [gridOrder, setGridOrder] = useState(generateRandomOrder());

  // useEffect(() => {
  //   setGridOrder(generateRandomOrder());
  // }, [gridOrder, setGridOrder]);

  function handleChange(e) {
    let images = document.querySelectorAll("img");
    for (let i = 0; i < images.length; i++) {
      images[i].style.gridArea = gridOrder[i];
      setGridOrder(generateRandomOrder());
    }
  }

  return (
    <div className="App">
      <header>
        <h1>Memory Game!</h1>
      </header>
      <div className="image-area">
        <img src={Dance} id="dance" onClick={handleChange}></img>
        <img src={Doom} id="doom" onClick={handleChange}></img>
        <img src={Drown} id="drown" onClick={handleChange}></img>
        <img src={Escape} id="escape" onClick={handleChange}></img>
        <img src={Elder} id="elder" onClick={handleChange}></img>
        <img src={Garruk} id="garruk" onClick={handleChange}></img>
        <img src={Grumgully} id="grumgully" onClick={handleChange}></img>
        <img src={Improbable} id="improbable" onClick={handleChange}></img>
        <img src={Veteran} id="veteran" onClick={handleChange}></img>
        <img src={Lochmere} id="lochmere" onClick={handleChange}></img>
        <img src={Pixie} id="pixie" onClick={handleChange}></img>
        <img src={Oko} id="oko" onClick={handleChange}></img>
        <img src={Outlaws} id="outlaws" onClick={handleChange}></img>
        <img src={Scions} id="scions" onClick={handleChange}></img>
        <img src={Hunter} id="hunter" onClick={handleChange}></img>
        <img src={Chaser} id="chaser" onClick={handleChange}></img>
        <img src={Lance} id="lance" onClick={handleChange}></img>
        <img src={Crusader} id="crusader" onClick={handleChange}></img>
        <img src={Wandermare} id="wandermare" onClick={handleChange}></img>
        <img src={Commander} id="commander" onClick={handleChange}></img>
      </div>
    </div>
  );
}

export default App;
