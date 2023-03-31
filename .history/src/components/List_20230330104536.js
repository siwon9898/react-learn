import React from "react";

export default function List() {
  return (
    <div>
      {TodoData.map((data) => (
        <div style={getStyle(data.complete)} key={data.id}>
          <input
            type="checkbox"
            defaultChecked={false}
            onChange={() => handleCompleteChange(data.id)}
          />
          {data.title}
          <button style={btnStyle} onClick={() => handleClick(data.id)}>
            X
          </button>
        </div>
      ))}
    </div>
  );
}
