import { useState } from "react";

function RobotListSearch() {
  return <RobotList />;
}

const RobotList = () => {
  const [input, setInput] = useState("");
  const [robotList, setRobotList] = useState([]);

  const onSubmit = (e) => {
    e.preventDefault(); // prevents page refresh
    setRobotList([...robotList, input]);
    setInput("");
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: 20,
      }}
    >
      <form onSubmit={onSubmit}>
        <input
          value={input}
          placeholder={"Generate Robot"}
          type="text"
          onChange={(e) => setInput(e.target.value)}
        />
      </form>
      <h2>Robot List</h2>
      <div style={{ display: "flex", flexDirection: "row", flexWrap: "wrap" }}>
        {robotList.map((robo) => (
          <img
            onClick={() => setRobotList(robotList.filter((r) => r != robo))}
            width={200}
            height={200}
            src={`https://robohash.org/${robo}`}
          ></img>
        ))}
      </div>
    </div>
  );
};
export default RobotListSearch;