export function Closing({ handlecleartasks, lists }) {
  const isdone = lists.filter((list) => list.done !== false).length;
  const alltask = lists.length;
  const perct = Math.round((isdone / alltask) * 100);
  return (
    <div className="open">
      <h3 class="closin">{perct ? perct : "0"}% Task Completed.</h3>
      {lists.length > 0 && (
        <button onClick={handlecleartasks} className="bts">
          Clear all
        </button>
      )}
    </div>
  );
}
