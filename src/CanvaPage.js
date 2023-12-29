import "./CanvaPage.css";
import { useEffect } from "react";

function TextWidget(props) {
  const textId = "text-" + props.id;
  useEffect(() => {
    let isMoving = false;
    let offsetX, offsetY;

    const movable = document.getElementById(textId);
    const canva = document.querySelector("#canva");

    movable.addEventListener("mousedown", (e) => {
      isMoving = true;
      offsetX = e.clientX - movable.getBoundingClientRect().left;
      offsetY = e.clientY - movable.getBoundingClientRect().top;
      movable.style.cursor = "grabbing";
    });

    document.addEventListener("mousemove", (e) => {
      if (!isMoving) return;

      let x = e.clientX - offsetX;
      let y = e.clientY - offsetY;

      x = Math.min(Math.max(x, 0), canva.clientWidth - movable.clientWidth);
      y = Math.min(Math.max(y, 0), canva.clientHeight - movable.clientHeight);

      movable.style.left = x + "px";
      movable.style.top = y + "px";
    });

    document.addEventListener("mouseup", () => {
      isMoving = false;
      movable.style.cursor = "grab";
    });
  }, []);

  return (
    <div
      contentEditable={true}
      className="movable"
      id={textId}
      style={props.style}
    >
      {props.text}
    </div>
  );
}

export default function Canva(props) {
  let textsCount = 0;
  const textStyle = {
    color: props.color,
    fontFamily: props.font,
    fontSize: props.size + "px",
  };
  return (
    <div id="canva">
      <div>
        {props.arr.map((text) => (
          <TextWidget text={text} style={textStyle} id={++textsCount} />
        ))}
      </div>
    </div>
  );
}
