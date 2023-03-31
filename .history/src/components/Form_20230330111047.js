import React from "react";

export default function Form({ handleSubmit, value, setValue }) {
  const handleChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <form style={{ display: "flex" }} onSubmit={handleSubmit}>
      <input
        style={{ flex: 10, padding: "5px" }}
        type="text"
        name="value"
        placeholder="할일을 입력하세요"
        value={value}
        onChange={handleChange}
      />
      <input className="btn" style={{ flex: 1 }} type="submit" value="입력" />
    </form>
  );
}
