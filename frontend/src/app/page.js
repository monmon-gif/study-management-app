"use client";

import { useEffect, useState } from "react";

export default function Home() {
  const [tasks, setTasks] = useState([]);
  const [title, setTitle] = useState("");
  const [filter, setFilter] = useState("all");

  const fetchTasks = async () => {
    // const res = await fetch("http://localhost:8080/tasks"); ローカルで動かすときはこっち
    const res = await fetch("https://study-management-app.onrender.com/tasks");
    const data = await res.json();
    setTasks(data);
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  const addTask = async () => {
    if (!title.trim()) return;
    // const res = await fetch("http://localhost:8080/tasks", {　ローカルで動かすときはこっち
    const res = await fetch("https://study-management-app.onrender.com/tasks", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title: title,
        done: false,
      }),
    });

    setTitle("");

    fetchTasks();
  };

  const toggleTask = async (id) => {
    // const res = await fetch(`http://localhost:8080/tasks/${id}`, {　ローカルで動かすときはこっち
    const res = await fetch(`https://study-management-app.onrender.com/tasks/${id}`, {
      method: "PUT",
    });

    fetchTasks();
  };

  const deleteTask = async (id) => {
    // const res = await fetch(`http://localhost:8080/tasks/${id}`, {　ローカルで動かすときはこっち
    const res = await fetch(`https://study-management-app.onrender.com/tasks/${id}`, {
      method: "DELETE",
    });

    fetchTasks();
  };

  return (
    <main className="min-h-screen bg-gray-100 p-8">
      <div className="mx-auto max-w-2xl rounded-xl bg-white p-6 shadow">
        <h1 className="mb-6 text-3xl font-bold">学習管理アプリ</h1>
        <p className="mb-4 text-gray-500">タスク数：{tasks.length}</p>

        <div className="mb-6 flex gap-2">
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="学習内容を入力"
            className="flex-1 rounded border border-gray-300 px-4 py-2"
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                addTask();
              }
            }}
          />

          <button
            onClick={addTask}
            className="rounded bg-blue-600 px-4 py-2 text-white hover:bg-blue-700"
          >
            追加
          </button>
        </div>

        <div className="mb-4 flex gap-2">
          <button
            onClick={() => setFilter("all")}
            className="rounded bg-gray-300 px-3 py-1"
          >
            すべて
          </button>

          <button
            onClick={() => setFilter("todo")}
            className="rounded bg-yellow-300 px-3 py-1"
          >
            未完了
          </button>

          <button
            onClick={() => setFilter("done")}
            className="rounded bg-green-300 px-3 py-1"
          >
            完了
          </button>
        </div>

        <ul className="space-y-3">
          {tasks
            .filter((task) => {
              if (filter === "todo") return !task.done;
              if (filter === "done") return task.done;
              return true;
            })
            .map((task) => (
            <li
              key={task.id}
              className="flex items-center justify-between rounded-lg border border-gray-200 p-4"
            >
              <div>
                <p
                  className={
                    task.done
                      ? "text-green-600 line-through font-semibold"
                      : "text-gray-900"
                  }
                >
                  {task.title}
                </p>

                <p className="text-sm text-gray-500">
                  {task.done ? "完了" : "未完了"}
                </p>
              </div>

              <div className="flex gap-2">
                <button
                  onClick={() => toggleTask(task.id)}
                  className="rounded bg-green-600 px-3 py-1 text-white hover:bg-green-700"
                >
                  切り替え
                </button>

                <button
                  onClick={() => deleteTask(task.id)}
                  className="rounded bg-blue-600 px-4 py-2 text-white hover:bg-blue-700"
                >
                  削除
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
}