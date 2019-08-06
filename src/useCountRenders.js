import React from "react";

const Square = (name, n) => {
  const renders = React.useRef(0);
  console.log(name, "renders", renders.current++);
  return renders.current;
};

export default Square;
