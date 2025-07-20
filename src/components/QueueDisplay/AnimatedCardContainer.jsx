import { Flipped, Flipper } from "react-flip-toolkit";
import QueueCard from "./QueueCard";
import { Box, Stack } from "@mui/material";

function chunkArray(array, chunkSize) {
  const result = [];
  let index = 0;

  // First chunk: 2 items
  if (array.length >= 2) {
    result.push(array.slice(0, 2));
    index = 2;
  } else {
    // If array has less than 2 items, push the remaining
    result.push(array.slice(0));
    return result;
  }

  // Remaining chunks
  for (; index < array.length; index += chunkSize) {
    result.push(array.slice(index, index + chunkSize));
  }

  return result;
}

function AnimatedCardContainer({ queue, office }) {
  const rowSize = 3;
  const rows = chunkArray(queue, rowSize);
  return (
    <div className="queue-display-container">
      <h1 className="office-label">{office}</h1>
      <Flipper flipKey={queue.join(",")}>
        <div className="queue-card-container">
          {rows.map((row, rowIndex) => (
            <div
              key={rowIndex}
              className={`queue-card-row ${
                rowIndex % 2 !== 0 ? "reverse" : ""
              } ${rowIndex === 0 ? "first-row" : ""}`}
            >
              {row.map((item) => (
                <Flipped key={item.id} flipId={item.id}>
                  <div>
                    <QueueCard label={item.id} status={item.status} />
                  </div>
                </Flipped>
              ))}
            </div>
          ))}
        </div>
      </Flipper>
    </div>
  );
}

export default AnimatedCardContainer;
