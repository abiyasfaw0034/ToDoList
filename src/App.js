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
  const [lists, setlists] = useState([]);
  const [showaddtext, setshowaddtext] = useState(false);

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
  function handleshowaddtext() {
    setshowaddtext(() => setshowaddtext(!showaddtext));
  }
  return (
    <div className="container">
      <Logo />

      <div className="space"></div>

      <Todolist
        lists={lists}
        handledeletelist={handledeletelist}
        handledonetasks={handledonetasks}
      />
      {lists.length > 0 ? (
        <Closing handlecleartasks={handlecleartasks} lists={lists} />
      ) : (
        ""
      )}

      {showaddtext ? (
        <Addlist
          handleaddlists={handleaddlists}
          setshowaddtext={setshowaddtext}
        />
      ) : (
        <Mtss handleshowaddtext={handleshowaddtext} />
      )}
    </div>
  );
}
function Mtss({ handleshowaddtext }) {
  return (
    <div className="addtask" onClick={handleshowaddtext}>
      + New task
    </div>
  );
}

// if(symbol){
//   handlecalculate
// }
// else{

// }
