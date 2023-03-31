import React, { Component } from "react";
import "./App.css";
export default class App extends Component {
  btnStyle = {
    color: "#fff",
    border: "none",
    padding: "5px 9px",
    borderRadius: "50%",
    cursor: "pointer",
    float: "right",
  };

  getStyle = () => {
    return {
      padding: "10px",
      borderBottom: "1px #ccc dotted",
      textDecoration: "none",
    };
  };

  state = {
    todoData: [
      {
        id: "1",
        title: "공부하기",
        completed: true,
      },
      {
        id: "2",
        title: "청소하기",
        completed: false,
      },
    ],
  };

  handleClick = (id) => {
    let newTodoData = this.state.todoData.filter((data) => data.id !== id);
    this.setState({ todoData: newTodoData });
  };
  render() {
    return (
      <div className="container">
        <div className="todoBlock">
          <div className="title">
            <h1>할일 목록</h1>
          </div>
          {/* map은 배열 요소를 함수를 거쳐 새로운 배열을 반환해준다 */}
          {this.state.todoData.map((data) => (
            <div style={this.getStyle()} key={data.id}>
              {/* 여러개의 객체를 넣을때는 unique한 key prop이 있어야함 */}
              <input type="checkbox" defaultChecked={false} />
              {data.title}
              {/* 중괄호로 넣어야 실제 데이터가 들어감 */}
              <button
                style={this.btnStyle}
                onClick={() => this.handleClick(data.id)}
              >
                X
              </button>
            </div>
          ))}
        </div>
      </div>
    );
  }
}
