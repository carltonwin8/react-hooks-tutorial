import React from "react";
import useCountRenders from "./useCountRenders";

const CallbackHello = React.memo(({ n, increment }) => {
  useCountRenders("callback square");
  return <button onClick={() => increment(n)}>{n}</button>;
});

export default CallbackHello;
