import React, { useEffect, useState } from "react";
// import ChildComponent from "./ChildComponent";

const ParentComponent = () => {
  const [count, setCount] = useState(0);
  const [intervalID, setIntervalID] = useState(-1);
  const startInterval = () => {
    setIntervalID(
      setInterval(() => {
        setCount((prev) => prev + 1);
      }, 3000)
    );
  };
  const stopInterval = () => {
    clearInterval(intervalID);
    setIntervalID(-1);
    setCount(0);
  };
  useEffect(() => {
    clearTimeout(intervalID);
  }, [intervalID]);

  return (
    <div>
      <h1 style={{ padding: "5px", margin: "5px" }}>{count}</h1>
      <button style={{ padding: "5px", margin: "5px" }} onClick={stopInterval}>
        stop
      </button>
      <button
        style={{ padding: "5px", margin: "5px" }}
        disabled={intervalID !== -1}
        onClick={startInterval}
      >
        start
      </button>
    </div>
  );
};

export default ParentComponent;
