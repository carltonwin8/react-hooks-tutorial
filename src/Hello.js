import React from "react";

import { useFetch } from "./useFetch";
import useMeasure from "./useMeasure";

function Hello() {
  const renders = React.useRef(0);
  console.log("hello renders", renders.current++);

  const [count, countSet] = React.useState(
    JSON.parse(localStorage.getItem("count"))
  );

  React.useEffect(() => {
    localStorage.setItem("count", JSON.stringify(count));
  }, [count]);

  const [data] = useFetch(`http://numbersapi.com/${count}/trivia`);

  const [rect, divRef] = useMeasure(data);

  return (
    <div style={{ border: "1px solid black" }}>
      <div style={{ display: "flex" }}>
        {!data ? (
          <div>Loading</div>
        ) : (
          <div ref={divRef} style={{ border: "1px solid gray" }}>
            Fetch Result: {data}
          </div>
        )}
      </div>
      <hr />
      <div>Count: {count}</div>
      <button onClick={() => countSet(c => c + 1)}>increment</button>{" "}
      <pre>Rect: {JSON.stringify(rect, null, 2)}</pre>
    </div>
  );
}

export default Hello;
