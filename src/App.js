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
  const [currentScore, setCurrentScore] = useState(0);
  const [maxScore, setMaxScore] = useState(0);
  const [currentCards, setCurrentCards] = useState([]);

  useEffect(() => {
    const item = JSON.parse(localStorage.getItem("maxScore"));
    if (item) {
      setMaxScore(item["maxScore"]);
    }
  }, []);

  useEffect(() => {
    const item = JSON.parse(localStorage.getItem("maxScore"));
    if (item) {
      if (maxScore > item["maxScore"]) {
        localStorage.setItem("maxScore", JSON.stringify({ maxScore }));
      }
    }
    if (!item) {
      localStorage.setItem("maxScore", JSON.stringify({ maxScore }));
    }
  }, [maxScore]);

  useEffect(() => {
    if (checkIfRepeated(currentCards)) {
      setCurrentCards([]);
      setCurrentScore(0);
      setMaxScore((prev) => (prev >= currentScore ? prev : currentScore - 1));
    }
  }, [currentCards]);

  function checkIfRepeated(arr) {
    for (let i = 0; i < arr.length; i++) {
      if (arr.indexOf(arr[i]) !== arr.lastIndexOf(arr[i])) {
        return true;
      }
    }
    return false;
  }

  function handleCardClick(e) {
    if (e.target.tagName.toLowerCase() != "img") {
      return;
    }
    setCurrentCards((previous) => [...previous, e.target.id]);
    let images = document.querySelectorAll("img");
    for (let i = 0; i < images.length; i++) {
      images[i].style.gridArea = gridOrder[i];
    }
    setGridOrder(generateRandomOrder());
    setCurrentScore((prev) => prev + 1);
  }

  return (
    <div className="App">
      <header>
        <p>Current Score: {currentScore}</p>
        <h1>Memory Game!</h1>
        <p>Max Score: {maxScore}</p>
      </header>
      <div className="image-area" onClick={handleCardClick}>
        <img src={Dance} id="dance"></img>
        <img src={Doom} id="doom"></img>
        <img src={Drown} id="drown"></img>
        <img src={Escape} id="escape"></img>
        <img src={Elder} id="elder"></img>
        <img src={Garruk} id="garruk"></img>
        <img src={Grumgully} id="grumgully"></img>
        <img src={Improbable} id="improbable"></img>
        <img src={Veteran} id="veteran"></img>
        <img src={Lochmere} id="lochmere"></img>
        <img src={Pixie} id="pixie"></img>
        <img src={Oko} id="oko"></img>
        <img src={Outlaws} id="outlaws"></img>
        <img src={Scions} id="scions"></img>
        <img src={Hunter} id="hunter"></img>
        <img src={Chaser} id="chaser"></img>
        <img src={Lance} id="lance"></img>
        <img src={Crusader} id="crusader"></img>
        <img src={Wandermare} id="wandermare"></img>
        <img src={Commander} id="commander"></img>
      </div>
    </div>
  );
}

export default App;
