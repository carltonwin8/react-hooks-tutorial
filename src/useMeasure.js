import React from "react";

function useMeasure(data) {
  const [rect, rectSet] = React.useState();
  const ref = React.useRef();
  React.useLayoutEffect(() => {
    if (ref.current) rectSet(ref.current.getBoundingClientRect());
  }, [data]);

  return [rect, ref];
}

export default useMeasure;
