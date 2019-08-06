import React from "react";
import { UserContext } from "./UserContext";

export const About = () => {
  const { user, userSet } = React.useContext(UserContext);
  return (
    <div onClick={() => userSet("home")}>
      <h2>About</h2>
      <pre>{JSON.stringify(user, null, 2)}</pre>
    </div>
  );
};
