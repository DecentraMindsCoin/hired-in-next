import React, { useState } from "react";

const styles = {
}


const TodoAddDelete = () => {
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
    <div className="App">
      <input type="text" value={value} onChange={changeHandler} />{" "}
      <button onClick={submitHandler}>Add</button>
      <hr />
      <ul>
        {list.length > 0 &&
          list.map((item) => {
            return <li onClick={() => deleteHandler(item)}>{item}</li>;
          })}
      </ul>
    </div>
  );
};

export default TodoAddDelete;