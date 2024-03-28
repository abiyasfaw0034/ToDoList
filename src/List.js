import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";

export function List({ lists, handledeletelist, handledonetasks }) {
  return (
    <div className="addlist">
      <input
        type="checkbox"
        onClick={() => handledonetasks(lists)}
        className="checkbox-round"
      />
      <span className={lists.done === true ? "closing task" : "task"}>
        {lists.task}
      </span>

      <button onClick={() => handledeletelist(lists.id)} className="btn">
        {/* <FontAwesomeIcon icon="fa-solid fa-trash-can" className="btn" /> */}
        <FontAwesomeIcon icon={faTrashAlt} />
      </button>
    </div>
  );
}
