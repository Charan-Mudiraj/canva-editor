import { useState } from "react";
import "./App.css";
import Canva from "./CanvaPage";
import About from "./About";

function App() {
  const [textColor, setTextColor] = useState("#000000");
  const [fontSize, setFontSize] = useState(8);
  const [font, setFont] = useState("serif");
  const [textsArr, setTextsArr] = useState([]);

  function updateColor(event) {
    setTextColor(event.target.value);
  }
  function updateFontSize(event) {
    const optionIndex = event.target.selectedIndex;
    const optionValue = Number(event.target.options[optionIndex].value);
    setFontSize(optionValue);
  }
  function updateFont(event) {
    const optionIndex = event.target.selectedIndex;
    const optionValue = event.target.options[optionIndex].value;
    setFont(optionValue);
  }
  function addText() {
    setTextsArr([...textsArr, "Enter Here"]);
  }

  return (
    <div id="app">
      <Canva color={textColor} font={font} size={fontSize} arr={textsArr} />
      <div id="tools">
        <div>
          Color:
          <input type="color" onInput={updateColor} id="color" />
        </div>
        <div>
          Size:
          <select onInput={updateFontSize} id="size">
            <option value="8">8</option>
            <option value="10">10</option>
            <option value="12">12</option>
            <option value="14">14</option>
            <option value="16">16</option>
            <option value="18">18</option>
            <option value="20">20</option>
            <option value="22">22</option>
            <option value="24">24</option>
            <option value="26">26</option>
            <option value="28">28</option>
          </select>
        </div>
        <div>
          Font:
          <select onInput={updateFont} id="font">
            <option value="serif">serif</option>
            <option value="sans-serif">sans-serif</option>
            <option value="monospace">monospace</option>
            <option value="fantasy">fantasy</option>
            <option value="cursive">cursive</option>
          </select>
        </div>
        <button onClick={addText} id="add-text">
          ADD TEXT
        </button>
      </div>
      <About />
    </div>
  );
}

export default App;
