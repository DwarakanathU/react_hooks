import React, { useState, useEffect } from "react";

const UseEffectComponentWillUnMount = () => {
  const [count, setCount] = useState(0);
  const [startStatus, setStartStatus] = useState(false);

  useEffect(() => {
    if (startStatus === true) {
      let intervalId = setInterval(() => {
        setCount(count + 1);
      }, 3000);
    }
    if (startStatus === false) {
      setCount(0);
    }
  }, [startStatus, count]);

  useEffect(() => {
    let intervalId;
    if (startStatus === false) {
      return () => clearInterval(intervalId);
    }
  }, [startStatus]);

  return (
    <div>
      <button
        onClick={() => {
          setStartStatus(true);
        }}
      >
        start
      </button>
      <br />
      <span>{count}</span>
      <br />

      <button
        onClick={() => {
          setStartStatus(false);
        }}
      >
        stop
      </button>
    </div>
  );
};

export default UseEffectComponentWillUnMount;
