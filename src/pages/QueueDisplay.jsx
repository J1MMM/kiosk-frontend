import React, { useState } from "react";
import { Box, Grid, Stack } from "@mui/material";
import QueueCard from "../components/QueueDisplay/QueueCard";
import QueueCardGrid from "../components/QueueDisplay/QueueCardGrid";

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
    const activeItem = queue.find((item) => item.status === "active");
    if (!activeItem) return;

    // Mark as removing (triggers animation)
    setQueue((prev) =>
      prev.map((item) =>
        item.id === activeItem.id ? { ...item, removing: true } : item
      )
    );

    // After animation, remove from queue
    setTimeout(() => {
      setQueue((prev) => {
        const updated = prev.filter((item) => item.id !== activeItem.id);
        // Set next item as active
        if (updated.length > 0) updated[0].status = "active";
        return updated;
      });
    }, 500);
  };

  return (
    <Stack
      bgcolor="#95C3FF"
      height="100vh"
      width="100%"
      justifyContent="center"
      alignItems="center"
    >
      <button onClick={handleNext}>Next</button>

      <QueueCardGrid>
        {queue.map((item) => (
          <QueueCard
            key={item.id}
            label={item.id}
            status={item.status}
            removing={item.removing}
          />
        ))}
      </QueueCardGrid>
    </Stack>
  );
}

export default QueueDisplay;
