import "./QueueCard.style.scss";

function QueueCard({ label, status }) {
  return (
    <div
      className={`queue-card ${status === "done" ? "removed" : ""} ${status}`}
    >
      <h1 className="label">{label}</h1>
    </div>
  );
}
export default QueueCard;
