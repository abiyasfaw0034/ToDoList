export function List({ lists, handledeletelist, handledonetasks }) {
  return (
    <div className="addlist">
      <input type="checkbox" onClick={() => handledonetasks(lists)} />
      <span className={lists.done === true ? "closing task" : "task"}>
        {lists.task}
      </span>
      <button onClick={() => handledeletelist(lists.id)} className="btn">
        &times;
      </button>
    </div>
  );
}
