import React from "react";
// import ParentComponent from "./components/ParentComponent";
// import PureFunctions from "./components/PureFunctions";
// import DisplayData from "./DisplayData";
// import UseEffectHook from "./hooks/UseEffectHook";
// import UseStateHook from "./hooks/UseStateHook";
import UseEffectComponentWillUnMount from "./hooks/UseEffectComponentWillUnMount";
import { useFectchCustomHook } from "./hooks/useFectchCustomHook";
const App = () => {
  const data = useFectchCustomHook(
    "https://jsonplaceholder.typicode.com/todos"
  );

  console.log(data);
  return (
    <div>
      <h1>Main Component</h1>
      {/* <h3>Using useState Hook</h3>
      <UseStateHook />
      <h3>Using useEffect Hook</h3>
      <UseEffectHook /> */}
      {/* // Fetch NEWS_API */}
      {/* <DisplayData /> */}
      {/* <ParentComponent /> */}
      {/* <PureFunctions /> */}
      <UseEffectComponentWillUnMount />
    </div>
  );
};

export default App;
