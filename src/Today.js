export function Today() {
  const time = new Date().toLocaleDateString();
  return (
    <div className="time">
      <h1>{time}</h1>
    </div>
  );
}
