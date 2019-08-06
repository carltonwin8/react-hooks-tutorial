import React from "react";
import { UserContext } from "./UserContext";
import login from "./login";

export function Index() {
  const { user, userSet } = React.useContext(UserContext);
  return (
    <div>
      <h2>Home</h2>
      <pre>{JSON.stringify(user, null, 2)}</pre>
      {user ? (
        <button
          onClick={async () => {
            // logout on server
            userSet(null);
          }}
        >
          logout
        </button>
      ) : (
        <button
          onClick={async () => {
            const user = await login();
            userSet(user);
          }}
        >
          login
        </button>
      )}
    </div>
  );
}
