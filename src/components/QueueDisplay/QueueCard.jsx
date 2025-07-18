import { Typography } from "@mui/material";
import { motion } from "framer-motion";
import "./QueueCard.style.scss";

function QueueCard({ label, status }) {
  return (
    <div className={`queue-card ${status}`}>
      <h1 className="label">{label}</h1>
    </div>
  );
}
export default QueueCard;
