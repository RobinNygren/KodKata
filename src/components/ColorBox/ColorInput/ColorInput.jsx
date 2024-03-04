import { useState } from "react";

const ColorInput = ({ onAddColor }) => {
  const [inputColor, setInputColor] = useState("");

  const handleAddColor = () => {
    if (inputColor) {
      onAddColor(inputColor);
      setInputColor("");
    }
  };

  return (
    <div>
      <input
        type="text"
        value={inputColor}
        onChange={(e) => setInputColor(e.target.value)}
        placeholder="Add a color"
      />
      <button onClick={handleAddColor}>Add Color</button>
    </div>
  );
};

export default ColorInput;
