import React from "react";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import { List } from "./List";

const Lists = React.memo(({ TodoData, setTodoData, handleClick }) => {
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
    // localStorage.setItem("TodoData", JSON.stringify(newTodoData));
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
                  <List
                    key={data.id}
                    id={data.id}
                    title={data.title}
                    complete={data.complete}
                    TodoData={TodoData}
                    setTodoData={setTodoData}
                    provided={provided}
                    snapshot={snapshot}
                    handleClick={handleClick}
                  />
                )}
              </Draggable>
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </DragDropContext>
  );
});

export default Lists;
