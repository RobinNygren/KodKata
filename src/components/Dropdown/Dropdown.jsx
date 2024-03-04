import React, { useState } from "react";

function DropDown({ items }) {
  const [selectedItem, setSelectedItem] = useState("");

  const handleChange = (event) => {
    setSelectedItem(event.target.value);
  };

  return (
    <div>
      <label>
        Vald enhet:
        <p>{selectedItem}</p>
      </label>
      <select onChange={handleChange} value={selectedItem}>
        <option value="">Välj ett fordon</option>
        {items.map((item, index) => (
          <option key={index} value={item}>
            {item}
          </option>
        ))}
      </select>
    </div>
  );
}

export default DropDown;
