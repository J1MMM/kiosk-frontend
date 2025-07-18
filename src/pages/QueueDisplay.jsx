import React, { useEffect, useState } from "react";
import { Box, Grid, Stack } from "@mui/material";
import QueueCard from "../components/QueueDisplay/QueueCard";
import { AnimatePresence } from "framer-motion";
import { Flipper, Flipped } from "react-flip-toolkit";
import AnimatedCardContainer from "../components/QueueDisplay/AnimatedCardContainer";

function QueueDisplay() {
  const [mayorsOfficeQueue, setMayorsOfficeQueue] = useState([
    { id: "M-001", status: "active" },
    { id: "M-002", status: "waiting" },
    { id: "M-003", status: "waiting" },
    { id: "M-004", status: "waiting" },
    { id: "M-005", status: "waiting" },
    { id: "M-006", status: "waiting" },
    { id: "M-007", status: "waiting" },
    { id: "M-008", status: "waiting" },
    { id: "M-009", status: "waiting" },
    { id: "M-010", status: "waiting" },
    { id: "M-011", status: "waiting" },
    { id: "M-012", status: "waiting" },
    { id: "M-013", status: "waiting" },
    { id: "M-014", status: "waiting" },
    { id: "M-015", status: "waiting" },
  ]);

  const [cioQueue, setCioQueue] = useState([
    { id: "C-001", status: "active" },
    { id: "C-002", status: "waiting" },
    { id: "C-003", status: "waiting" },
    { id: "C-004", status: "waiting" },
    { id: "C-005", status: "waiting" },
    { id: "C-006", status: "waiting" },
    { id: "C-007", status: "waiting" },
    { id: "C-008", status: "waiting" },
    { id: "C-009", status: "waiting" },
    { id: "C-010", status: "waiting" },
    { id: "C-011", status: "waiting" },
    { id: "C-012", status: "waiting" },
    { id: "C-013", status: "waiting" },
    { id: "C-014", status: "waiting" },
    { id: "C-015", status: "waiting" },
  ]);

  const [cityAdminQueue, setCityAdminQueue] = useState([
    { id: "A-001", status: "active" },
    { id: "A-002", status: "waiting" },
    { id: "A-003", status: "waiting" },
    { id: "A-004", status: "waiting" },
    { id: "A-005", status: "waiting" },
    { id: "A-006", status: "waiting" },
    { id: "A-007", status: "waiting" },
    { id: "A-008", status: "waiting" },
    { id: "A-009", status: "waiting" },
    { id: "A-010", status: "waiting" },
    { id: "A-011", status: "waiting" },
    { id: "A-012", status: "waiting" },
    { id: "A-013", status: "waiting" },
    { id: "A-014", status: "waiting" },
    { id: "A-015", status: "waiting" },
  ]);

  const handleNext = (queue, setQueue) => {
    const activeItem = queue.find((item) => item.status === "active");
    if (!activeItem) return;

    setQueue((prev) =>
      prev.map((item) =>
        item.id === activeItem.id ? { ...item, status: "done" } : item
      )
    );

    setTimeout(() => {
      setQueue((prev) => {
        const updated = prev.filter((item) => item.id !== activeItem.id);
        if (updated[0]) updated[0].status = "active";
        return updated;
      });
    }, 500);
  };

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     handleNext(mayorsOfficeQueue, setMayorsOfficeQueue);
  //     handleNext(cioQueue, setCioQueue);
  //     handleNext(cityAdminQueue, setCityAdminQueue);
  //   }, 3000);

  //   return () => clearInterval(interval);
  // }, [mayorsOfficeQueue, cioQueue, cityAdminQueue]);
  return (
    <Stack
      // bgcolor="#95C3FF"
      bgcolor="#ddd"
      height="100vh"
      width="100%"
      justifyContent="center"
      padding={3}
      boxSizing={"border-box"}
      spacing={3}
    >
      <AnimatedCardContainer
        queue={mayorsOfficeQueue}
        office="Mayor's office"
      />
      <AnimatedCardContainer queue={cioQueue} office="CIO" />
      <AnimatedCardContainer queue={cityAdminQueue} office="City Admin" />
    </Stack>
  );
}

export default QueueDisplay;
