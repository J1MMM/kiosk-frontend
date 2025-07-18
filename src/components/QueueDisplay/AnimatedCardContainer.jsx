import { Flipped, Flipper } from "react-flip-toolkit";
import QueueCard from "./QueueCard";

function AnimatedCardContainer({ queue, office }) {
  return (
    <div className="queue-display-container">
      <h1 className="office-label">{office}</h1>
      <Flipper flipKey={queue.join(",")}>
        <div className="queue-card-container">
          {queue?.map((item) => (
            <Flipped flipId={item.id} key={item.id}>
              <div>
                <QueueCard label={item.id} status={item.status} />
              </div>
            </Flipped>
          ))}
        </div>
      </Flipper>
    </div>
  );
}

export default AnimatedCardContainer;
