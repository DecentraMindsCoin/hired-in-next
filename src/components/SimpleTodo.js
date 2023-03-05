import React, { useState } from "react";
const SimpleTodo = () => {
  const [list, setList] = useState([]);
  const [value, setValue] = useState("");

  const changeHandler = (e) => {
    setValue(e.target.value);
  };

  const submitHandler = () => {
    setList([...list, value]);
    setValue("");
  };

  const deleteHandler = (item) => {
    setList(list.filter((ele) => ele != item));
  };

  return (
    <div className="SimpleTodo">
      <input type="text" value={value} onChange={changeHandler} />{" "}
      <button onClick={submitHandler}>Add</button>
      <hr />
      <ul>
        {list.length > 0 &&
          list.map((item, i) => {
            return <li key={i} onClick={() => deleteHandler(item)}>{item}</li>;
          })}
      </ul>
    </div>
  );
};

export default SimpleTodo;