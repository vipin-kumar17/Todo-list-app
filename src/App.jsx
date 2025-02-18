import { useState } from "react";
import "./App.css";

function App() {
  const [task, settask] = useState("");
  const [mainTask, setmainTask] = useState([]);
  const submitHandler = (e) => {
    e.preventDefault();
    setmainTask([...mainTask, { task }]);
    settask("");
  };

  const deleteHandler = (i) => {
    let copytask = [...mainTask]
    copytask.splice(i,1);
    setmainTask(copytask);
  };

  let renderTask = <h2>No Task Available</h2>;
  if (mainTask.length > 0) {
    renderTask = mainTask.map((t, i) => {
      return (
        <li key={i} className="flex items-center justify-between">
          <div>
            <h6 className="text-2xl font-semibold mb-5">{t.task}</h6>
          </div>
          <button onClick = {() => {
              deleteHandler(i);
            }}
            className="bg-red-500 text-white px-4 py-2 rounded font-bold"
          >
            Delete
          </button>
        </li>
      );
    });
  }
  return (
    <>
      <h1 className="bg-black text-white p-5 text-5xl font-bold text-center">
        My Todo App
      </h1>

      <form onSubmit={submitHandler}>
        <input
          type="text"
          className="text-2xl border-zinc-800 border-4 m-5 px-4 py-2"
          placeholder="enter task here"
          value={task}
          onChange={(e) => {
            settask(e.target.value);
          }}
        />
        <button className="bg-black text-white px-4 py-3 text-2xl font-bold rounded m-5">
          Add Task
        </button>
      </form>
      <hr />
      <div className="p-8 bg-slate-300">
        <ul>{renderTask}</ul>
      </div>
    </>
  );
}

export default App;
