import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Index } from "./ContextPages";
import { About } from "./ContextAbout";
import { UserContext } from "./UserContext";

const AppRouter = () => {
  const [user, userSet] = React.useState(null);
  const providerUser = React.useMemo(() => ({ user, userSet }), [
    user,
    userSet
  ]);
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
          </ul>
        </nav>
        <UserContext.Provider value={providerUser}>
          <Route path="/" exact component={Index} />
          <Route path="/about" component={About} />
        </UserContext.Provider>
      </div>
    </Router>
  );
};

export default AppRouter;
