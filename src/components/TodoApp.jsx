import React, { useState } from "react";

const TodoApp = () => {
  const [todo, setTodo] = useState([]);

  const [newTask, setNewTask] = useState("");

  const HandleClick = () => {
    setTodo([...todo, { id: Date.now(), task: newTask, completed: false }]);
    setNewTask("");
  };
  const HandleCheckbox = (id) => {
    setTodo(
      todo.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };
  const HandleDelete = (id) => {
    setTodo(todo.filter((items) => items.id !== id));
  };
  return (
    <div className="w-full h-screen text-white bg-zinc-900 flex justify-center">
      <div className="p-10  bg-zinc-700">
        <h1 className="text-3xl font-bold text-center pb-6">Todo List</h1>
        <form action="">
          <div className="px-10 flex gap-7 justify-between mb-10 ">
            <input
              value={newTask}
              onChange={(e) => setNewTask(e.target.value)}
              className="w-100 px-3 py-1 border rounded-lg  bg-transparent"
              type="text"
              placeholder="Create a Task"
            />
            <input
              className=" px-4 py-2 bg-red-400 rounded-lg"
              onClick={HandleClick}
              type="button"
              value="Add task"
            />
          </div>
        </form>
        <div className="px-10">
          {todo.length === 0 ? (
            <h1 className="text-lg text-center">No Tasks Added yet</h1>
          ) : (
            todo.map((val) => {
              return (
                <div key={val.id} className="flex flex-col gap-2">
                  <div className="flex gap-5 items-center  ">
                    <input
                      checked={val.completed}
                      onChange={() => HandleCheckbox(val.id)}
                      type="checkbox"
                      className="w-6 h-6"
                    />
                    <h1
                      className={`text-xl py-2 ${
                        val.completed ? "line-through text-gray-400" : ""
                      }`}
                      key={val.id}
                    >
                      {val.task}
                    </h1>
                    <span
                      onClick={() => HandleDelete(val.id)}
                      className=" text-xl cursor-pointer"
                    >
                      ❌
                    </span>
                  </div>
                  <hr className="border-gray-500" />
                </div>
              );
            })
          )}
        </div>
      </div>
    </div>
  );
};

export default TodoApp;
