import { useState } from "react";

export function Addlist({ handleaddlists }) {
  const [task, settask] = useState("");

  function handleaddlist(e) {
    e.preventDefault();

    if (!task) return;

    const newtask = {
      task,
      done: false,
      id: crypto.randomUUID(), // Corrected to call crypto.randomUUID() as a function
    };
    handleaddlists(newtask);
    settask("");
  }

  return (
    <div>
      <form onSubmit={handleaddlist}>
        <input
          className="input"
          type="text"
          placeholder="Add Text"
          value={task}
          onChange={(e) => settask(e.target.value)}
        />
        <button onClick={handleaddlist} style={{ height: "20px" }}>
          +
        </button>
      </form>
    </div>
  );
}
