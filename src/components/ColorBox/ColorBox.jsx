import { useState } from "react";
import ColorInput from "./ColorInput/ColorInput";

const ColorBox = ({ Colors }) => {
  const [colors, setColors] = useState(Colors);

  const addColor = (newColor) => {
    setColors([...colors, newColor]);
  };

  return (
    <div>
      {colors.map((color, index) => (
        <div
          key={index}
          style={{
            backgroundColor: color,
            width: "10rem",
            height: "10rem",
            margin: "1rem",
            textAlign: "center",
            textTransform: "uppercase",
          }}
        >
          {color}
        </div>
      ))}
      <ColorInput onAddColor={addColor} />
    </div>
  );
};

export default ColorBox;
