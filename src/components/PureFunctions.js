import React, { useState } from "react";

const PureFunctions = () => {
  const [value, setValue] = useState({
    a: 0,
    b: 0,
  });

  console.log(value.a, value.b, "value");
  const add = (a, b) => {
    return parseInt(value.a) + parseInt(value.b);
  };
  return (
    <div>
      <form>
        <input
          type="number"
          value={value.a}
          onChange={(e) => {
            console.log(value.a);
            setValue({ ...value, a: e.target.value });
            console.log(value.a);
          }}
        />
        <input
          type="number"
          value={value.b}
          onChange={(e) => {
            setValue({ ...value, b: e.target.value });
          }}
        />
      </form>
      <span>{add()}</span>
      <span>{JSON.stringify(value)}</span>
    </div>
  );
};

export default PureFunctions;
