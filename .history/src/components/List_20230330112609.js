import React from "react";

export default function List({ TodoData, setTodoData }) {
  const handleCompleteChange = (id) => {
    let newTodo = TodoData.map((data) => {
      if (data.id === id) {
        data.complete = !data.complete;
      }
      return data;
    });
    setTodoData(newTodo);
  };

  const handleClick = (id) => {
    let newTodoData = TodoData.filter((data) => data.id !== id);
    setTodoData(newTodoData);
  };

  return (
    <div>
      {TodoData.map((data) => (
        <div key={data.id}>
          <input
            type="checkbox"
            defaultChecked={false}
            onChange={() => handleCompleteChange(data.id)}
          />
          {data.title}
          <button onClick={() => handleClick(data.id)}>X</button>
        </div>
      ))}
    </div>
  );
}
