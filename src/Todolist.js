import { List } from "./List";

export function Todolist({ lists, handledeletelist, handledonetasks }) {
  return (
    <ul>
      {lists.map((list) => (
        <List
          lists={list}
          handledeletelist={handledeletelist}
          handledonetasks={handledonetasks}
          key={lists.id}
        />
      ))}
    </ul>
  );
}
