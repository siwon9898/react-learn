import React, { Component } from "react";
import "./App.css";
export default class App extends Component {
  render() {
    return (
      <div className="container">
        <div className="todoBlock">
          <div className="title">
            <h1>할일 목록</h1>
          </div>
          <div>
            <input type="checkbox" defaultChecked={false} />
            공부하기
            <button>X</button>
          </div>
        </div>
      </div>
    );
  }
}
