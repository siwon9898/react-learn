import React from "react";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";

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
    <DragDropContext>
      <Droppable droppableId="todo">
        {(provided) => (
          <div {...provided.droppableProps} ref={provided.innerRef}>
            {TodoData.map((data, index) => (
              <Draggable
                key={data.id}
                draggableId={data.id.toString()}
                index={index}
              >
                <div key={data.id}>
                  <div className="flex items-center justify-between w-full px-4 py-1 my-2 text-gray-600 bg-gray-100 border rounded">
                    <div className="items-center">
                      <input
                        type="checkbox"
                        defaultChecked={false}
                        onChange={() => handleCompleteChange(data.id)}
                      />
                      <span
                        className={data.complete ? "line-through" : undefined}
                      >
                        {data.title}
                      </span>
                    </div>
                    <div>
                      <button
                        className="px-4 py-2 float-right"
                        onClick={() => handleClick(data.id)}
                      >
                        X
                      </button>
                    </div>
                  </div>
                </div>
              </Draggable>
            ))}
          </div>
        )}
      </Droppable>
    </DragDropContext>
  );
}
