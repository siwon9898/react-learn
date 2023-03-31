import React from "react";
import { useState } from "react";
import "./App.css";
import List from "./components/List";
import Form from "./components/Form";
// export default class App extends Component {
//   btnStyle = {
//     color: "#fff",
//     border: "none",
//     padding: "5px 9px",
//     borderRadius: "50%",
//     cursor: "pointer",
//     float: "right",
//   };

//   getStyle = (completed) => {
//     return {
//       padding: "10px",
//       borderBottom: "1px #ccc dotted",
//       textDecoration: completed ? "line-through" : "none",
//     };
//   };

//   state = {
//     todoData: [],
//     value: "",
//   };

//   handleClick = (id) => {
//     let newTodoData = this.state.todoData.filter((data) => data.id !== id);
//     this.setState({ todoData: newTodoData });
//   };

//   handleChange = (e) => {
//     this.setState({ value: e.target.value });
//   };

//   handleSubmit = (e) => {
//     e.preventDefault(); //form안에서 input 전송(submit)할때 reload 막아줌

//     //새로운 할일 데이터
//     let newTodo = {
//       id: Date.now(),
//       title: this.state.value,
//       completed: false,
//     };
//     //원래있던 할일에 새로운 할일 추가해줌
//     this.setState({ todoData: [...this.state.todoData, newTodo], value: "" });
//   };

//   handleCompleteChange = (id) => {
//     let newTodo = this.state.todoData.map((data) => {
//       if (data.id === id) {
//         data.completed = !data.completed;
//       }
//       return data;
//     });

//     this.setState({ todoData: newTodo });
//   };
//   render() {
//     return (
//       <div className="container">
//         <div className="todoBlock">
//           <div className="title">
//             <h1>할일 목록</h1>
//           </div>
//           {/* map은 배열 요소를 함수를 거쳐 새로운 배열을 반환해준다 */}
//           {this.state.todoData.map((data) => (
//             <div style={this.getStyle(data.completed)} key={data.id}>
//               {/* 여러개의 객체를 넣을때는 unique한 key prop이 있어야함 */}
//               <input
//                 type="checkbox"
//                 defaultChecked={false}
//                 onChange={() => this.handleCompleteChange(data.id)}
//               />
//               {data.title}
//               {/* 중괄호로 넣어야 실제 데이터가 들어감 */}
//               <button
//                 style={this.btnStyle}
//                 onClick={() => this.handleClick(data.id)}
//               >
//                 X
//               </button>
//             </div>
//           ))}

//           <form style={{ display: "flex" }} onSubmit={this.handleSubmit}>
//             <input
//               type="text"
//               name="value"
//               placeholder="할일을 입력하세요"
//               style={{ flex: "10", padding: "5px" }}
//               value={this.state.value}
//               onChange={this.handleChange}
//             />
//             <input
//               type="submit"
//               value="입력"
//               className="btn"
//               style={{ flex: "1" }}
//             />
//           </form>
//         </div>
//       </div>
//     );
//   }
// }

export default function App() {
  const [TodoData, setTodoData] = useState([]);
  const [value, setValue] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();

    let newTodo = {
      id: Date.now(),
      title: value,
      complete: false,
    };
    setTodoData((prev) => [...prev, newTodo]);
    setValue("");
  };
  return (
    <div className="flex items-center justify-center w-screen h-screen bg-blue-100">
      <div className="w-full p-6 m-4 bg-white rounded shadow lg:w-3/4">
        <div>
          <h1>할일 목록</h1>
        </div>
        {/* tododata state는여러개의 컴포넌트에서 쓰기때문에 state자체를 옮기기보다는 props로 내려주는것이 적합 */}
        <List TodoData={TodoData} setTodoData={setTodoData} />
        <Form handleSubmit={handleSubmit} value={value} setValue={setValue} />
      </div>
    </div>
  );
}
