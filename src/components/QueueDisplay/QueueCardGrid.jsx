import { Box } from "@mui/material";

function QueueCardGrid({ children }) {
  return (
    <Box
      display="grid"
      gridTemplateColumns="auto auto auto auto "
      alignItems={"center"}
      sx={{
        width: "fit-content",
        height: "fit-content",
        border: "1px solid",
        p: 2,
        borderRadius: "26px",
        gap: 2,
      }}
    >
      {children}
    </Box>
  );
}

export default QueueCardGrid;
