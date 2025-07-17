import React from "react";
import { Box, Grid, Stack } from "@mui/material";
import Tile from "../components/Tile";

function Display() {
  return (
    <Stack
      bgcolor="#95C3FF"
      height="100vh"
      width="100%"
      justifyContent="center"
      alignItems="center"
    >
      <Grid container border="1px solid" p={2} borderRadius="26px" spacing={2}>
        <Tile className="active" />
        <Tile />
        <Tile />
        <Tile />
        <Tile />
        <Tile />
        <Tile />
      </Grid>
    </Stack>
  );
}

export default Display;
