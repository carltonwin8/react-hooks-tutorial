import React from "react";
import useCountRenders from "./useCountRenders";

const CallbackHello = React.memo(({ increment }) => {
  useCountRenders("callback");
  return <button onClick={() => increment(2)}>hello</button>;
});

export default CallbackHello;
