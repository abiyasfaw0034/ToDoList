// ababebxj

import { useState } from "react";
import "./index.css";
import { Addlist } from "./Addlist";
import { Todolist } from "./Todolist";
import { Logo } from "./Logo";
import { Closing } from "./Closing";

const todo = [
  {
    task: "add smtg abebe",
    done: false,
    id: crypto.randomUUID(),
  },
];

export default function App() {
  const [lists, setlists] = useState(todo);

  function handleaddlists(item) {
    setlists([...lists, item]);
  }
  function handlecleartasks() {
    const isConfirmed = window.confirm("Are you sure you clear all data?");
    if (isConfirmed) {
      setlists([]);
    }
  }
  function handledeletelist(id) {
    setlists((items) => items.filter((item) => item.id !== id));
  }
  function handledonetasks(item) {
    setlists((lists) =>
      lists.map((list) =>
        list.id === item.id ? { ...list, done: !item.done } : list
      )
    );
  }
  return (
    <div className="container">
      <Logo />
      <Addlist handleaddlists={handleaddlists} />
      <Todolist
        lists={lists}
        handledeletelist={handledeletelist}
        handledonetasks={handledonetasks}
      />
      <Closing handlecleartasks={handlecleartasks} lists={lists} />
    </div>
  );
}
