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

  const handleEnd = (result) => {
    //result 매개변수에는 source 항목 및 대사 위치와 같은 드래그 이벤트에 대한 정보가 포함된다.
    //목적지 없으면 종료
    if (!result.destination) return;

    //react의 불변성을 지키기 위해 새로운 tododata 생성
    const newTodoData = [...TodoData];

    //1. 변경시키는 아이템을 배열에서 지워줍니다.
    //2.  return값으로 지워진 아이템을 잡아줍니다.
    const [reorderedItem] = newTodoData.splice(result.source.index, 1);

    //원하는 자리애 reorderItem을 insert 해줍니다.
    newTodoData.splice(result.destination.index, 0, reorderedItem);
    setTodoData(newTodoData);
  };

  return (
    <DragDropContext onDragEnd={handleEnd}>
      <Droppable droppableId="todo">
        {(provided) => (
          <div {...provided.droppableProps} ref={provided.innerRef}>
            {TodoData.map((data, index) => (
              <Draggable
                key={data.id}
                draggableId={data.id.toString()}
                index={index}
              >
                {(provided, snapshot) => (
                  <div
                    key={data.id}
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
                )}
              </Draggable>
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </DragDropContext>
  );
}
