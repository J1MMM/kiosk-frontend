import React, { useState } from "react";
import { Box, Grid, Stack } from "@mui/material";
import QueueCard from "../components/QueueDisplay/QueueCard";
import QueueCardGrid from "../components/QueueDisplay/QueueCardGrid";
import { AnimatePresence } from "framer-motion";
import { Flipper, Flipped } from "react-flip-toolkit";
function chunkArray(array, chunkSize) {
  const result = [];
  for (let i = 0; i < array.length; i += chunkSize) {
    result.push(array.slice(i, i + chunkSize));
  }
  return result;
}
function QueueDisplay() {
  const [queue, setQueue] = useState([
    { id: "M-001", status: "active" },
    { id: "M-002", status: "waiting" },
    { id: "M-003", status: "waiting" },
    { id: "M-004", status: "waiting" },
    { id: "M-005", status: "waiting" },
    { id: "M-006", status: "waiting" },
    { id: "M-007", status: "waiting" },
  ]);

  const handleNext = () => {
    setQueue((prev) => {
      const activeIndex = prev.findIndex((item) => item.status === "active");
      if (activeIndex === -1) return prev;

      const updated = [...prev];
      updated.splice(activeIndex, 1); // Remove current
      if (updated[0]) updated[0].status = "active";
      return updated;
    });
  };
  const rowSize = 4;
  const rows = chunkArray(queue, rowSize);

  console.log(rows);

  return (
    <Stack
      bgcolor="#95C3FF"
      height="100vh"
      width="100%"
      justifyContent="center"
      alignItems="center"
    >
      <button onClick={handleNext}>Next</button>

      <Flipper flipKey={queue.map((item) => item.id).join(",")}>
        <Stack spacing={2}>
          {rows.map((row, rowIndex) => (
            <Box
              key={rowIndex}
              display="flex"
              flexDirection={rowIndex % 2 === 1 ? "row-reverse" : "row"}
              gap={2}
            >
              {row.map((item) => (
                <Flipped key={item.id} flipId={item.id}>
                  <div>
                    <QueueCard label={item.id} status={item.status} />
                  </div>
                </Flipped>
              ))}
            </Box>
          ))}
        </Stack>
      </Flipper>
    </Stack>
  );
}

export default QueueDisplay;
