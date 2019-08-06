import React from "react";

import { useForm } from "./useForm";
import Hello from "./Hello";

function App1() {
  const [{ email, password, firstName }, handleChange] = useForm({
    email: "",
    password: "",
    firstName: ""
  });
  const [showH, showHSet] = React.useState(true);
  // React.useEffect(() => {
  //   console.log("render");
  //   const onMouseMove = e => console.log(e);
  //   window.addEventListener("mousemove", onMouseMove);
  //   return () => window.removeEventListener("mousemove", onMouseMove);
  // }, []);

  const inputRef = React.useRef();
  const hello = React.useRef(() => console.log("hello"));

  React.useLayoutEffect(() => {
    console.log(inputRef.current.getBoundingClientRect());
  }, []);

  return (
    <div>
      <button onClick={() => showHSet(h => !h)}>Toggle</button>
      {showH && <Hello />}
      <hr />
      <input
        name="email"
        value={email}
        onChange={handleChange}
        placeholder="Email"
        ref={inputRef}
      />
      <input
        name="firstName"
        value={firstName}
        onChange={handleChange}
        placeholder="First Name"
      />
      <input
        type="password"
        name="password"
        value={password}
        placeholder="Password"
        onChange={handleChange}
      />
      <button
        onClick={() => {
          inputRef.current.focus();
          hello.current();
        }}
      >
        focus
      </button>
    </div>
  );
}

export default App1;
