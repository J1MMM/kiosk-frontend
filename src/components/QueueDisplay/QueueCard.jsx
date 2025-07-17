import { Typography } from "@mui/material";
import "./QueueCard.style.scss";

function QueueCard({ label, status, removing }) {
  const cardClass = `queue-card ${status} ${removing ? "remove" : ""}`;

  return (
    <div className={cardClass}>
      <Typography className="text" variant="h1">
        {label}
      </Typography>
    </div>
  );
}

export default QueueCard;
