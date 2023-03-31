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
          <div className="flex items-center justify-between w-full px-4 py-1 my-2 text-gray-600 bg-gray-100 border rounded">
            <div className="items-center">
              <input
                type="checkbox"
                defaultChecked={false}
                onChange={() => handleCompleteChange(data.id)}
              />
              <span className="line-through">{data.title}</span>
            </div>
            <div>
              <button onClick={() => handleClick(data.id)}>X</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
