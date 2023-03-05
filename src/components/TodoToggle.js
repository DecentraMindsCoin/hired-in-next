//Write a functional component that accepts two props — an array of tasks and a function to update the array. Each element in the array is an object with two fields: “task” and “subtasks”. The “task” field is associated with a string description and the “subtasks” field is associated with an array of string descriptions. Here is an example of one such array (this array is also included in the starter code below):

import { useState } from "react";

const TASKS = [
  {
    task: "Clean bedroom",
    subtasks: ["Do laundry", "Organize desk", "Wipe floors"],
  },
  {
    task: "Study",
    subtasks: ["Review chemistry", "Do a React coding challenge"],
  },
  {
    task: "Build website",
    subtasks: ["Choose tech stack", "Design pages", "Develop", "Publish"],
  },
];

function TodoToggle() {
  const [tasks, setTasks] = useState(TASKS);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        marginTop: 30,
      }}
    >
      <TasksAndSubtasks taskArray={tasks} setTaskArray={setTasks} />
    </div>
  );
}

const TasksAndSubtasks = ({ taskArray, setTaskArray }) => {
  const [completed, setCompleted] = useState(() =>
    taskArray.map((taskObj) => taskObj.subtasks.map(() => false))
  );

  const flipCompleted = (outerIndex, innerIndex) =>
    setCompleted(
      completed.map((arr, index) =>
        index != outerIndex
          ? arr
          : arr.map((bool, jIndex) => (jIndex != innerIndex ? bool : !bool))
      )
    );

  const clearCompleted = () => {
    const completedCopy = [];

    setTaskArray(
      taskArray.filter((_, index) => {
        if (completed[index].some((value) => !value)) {
          completedCopy.push(completed[index]);
          return true;
        } else return false;
      })
    );
    setCompleted(completedCopy);
  };

  return (
    <div>
      <input
        type={"button"}
        onClick={clearCompleted}
        value={"Clear completed tasks"}
      />
      {taskArray.map((obj, i) => (
        <>
          <p>
            {completed[i].some((value) => !value) ? (
              obj.task
            ) : (
              <s>{obj.task}</s>
            )}
          </p>
          <div style={{ marginLeft: 20 }}>
            {obj.subtasks.map((subtask, j) => (
              <p onClick={() => flipCompleted(i, j)}>
                {completed[i][j] ? <s>{subtask}</s> : subtask}
              </p>
            ))}
          </div>
        </>
      ))}
    </div>
  );
};

export default TodoToggle;