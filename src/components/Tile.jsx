import { Typography } from "@mui/material";
import React from "react";

function Tile({ className }) {
  return (
    <div className={`tile ${className}`}>
      <Typography className="text" variant="h1">
        M-001
      </Typography>
    </div>
  );
}

export default Tile;
