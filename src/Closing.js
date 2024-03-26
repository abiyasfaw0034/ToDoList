export function Closing({ handlecleartasks, lists }) {
  const isdone = lists.filter((list) => list.done !== false).length;
  const alltask = lists.length;
  const perct = Math.round((isdone / alltask) * 100);
  return (
    <div>
      <h3 class="closin">you have done {perct ? perct : "0"}% of your task.</h3>
      {lists.length > 0 && <button onClick={handlecleartasks}>Clear</button>}
    </div>
  );
}
