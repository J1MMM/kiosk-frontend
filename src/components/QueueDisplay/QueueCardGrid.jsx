import { Box } from "@mui/material";
import { motion } from "framer-motion";

function QueueCardGrid({ children }) {
  return (
    <motion.div
      layout
      style={{
        display: "grid",
        gridTemplate: "repeat(2, auto) / repeat(4, auto)", // 2 rows, 4 cols
        alignItems: "center",
        width: "fit-content",
        height: "fit-content",
        border: "1px solid",
        padding: 16,
        borderRadius: "26px",
        gap: 16,
      }}
    >
      {children}
    </motion.div>
  );
}

export default QueueCardGrid;
