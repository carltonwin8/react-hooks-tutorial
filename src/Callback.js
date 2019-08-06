import React from "react";
import Hello from "./CallbackHello";
import Square from "./CallbackSquare";

const Callback = () => {
  const [count, countSet] = React.useState(0);
  const favNums = [7, 21, 37];
  const increment = React.useCallback(n => countSet(c => c + n), [countSet]);
  return (
    <div>
      <Hello increment={increment} />
      <div>Count: {count}</div>
      <ul>
        {favNums.map(n => (
          <li key={n}>
            <Square increment={increment} n={n} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Callback;
