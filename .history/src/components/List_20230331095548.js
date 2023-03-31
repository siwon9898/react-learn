import React, { useState } from "react";

export const List = React.memo(
  ({
    id,
    title,
    complete,
    TodoData,
    setTodoData,
    provided,
    snapshot,
    handleClick,
  }) => {
    const handleCompleteChange = (id) => {
      let newTodo = TodoData.map((data) => {
        if (data.id === id) {
          data.complete = !data.complete;
        }
        return data;
      });
      setTodoData(newTodo);
    };

    const [isEditing, setIsEditing] = useState(false);
    const [editedTitle, setEditedTitle] = useState(title);

    return (
      <div
        key={id}
        {...provided.draggableProps}
        ref={provided.innerRef}
        {...provided.dragHandleProps}
        className={`${
          snapshot.isDragging ? "bg-gray-400" : "bg-gray-100"
        } flex items-center justify-between w-full px-4 py-1 my-2 text-gray-600 bg-gray-100 border rounded`}
      >
        <div className="items-center">
          <input
            type="checkbox"
            defaultChecked={false}
            onChange={() => handleCompleteChange(id)}
          />
          <span className={complete ? "line-through" : undefined}>{title}</span>
        </div>
        <div>
          <button
            className="px-4 py-2 float-right"
            onClick={() => handleClick(id)}
          >
            X
          </button>
          <button
            className="px-4 py-2 float-right"
            onClick={() => setIsEditing(true)}
          >
            Edit
          </button>
        </div>
      </div>
    );
  }
);
