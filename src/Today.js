export function Today() {
  const time = new Date().toLocaleDateString();
  return (
    <div className="time">
      <p>{time}</p>
    </div>
  );
}
