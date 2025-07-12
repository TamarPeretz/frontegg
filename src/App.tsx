import "./App.css";

import { useAuth, useLoginWithRedirect } from "@frontegg/react";
import classNames from "classnames";
import { useEffect } from "react";

import config from "./config";
import Navbar from "./Navbar";

const App = () => {
  const { user, isAuthenticated } = useAuth();
  const loginWithRedirect = useLoginWithRedirect();

  useEffect(() => {
    if (!isAuthenticated) {
      loginWithRedirect();
    }
  }, [isAuthenticated, loginWithRedirect]);

  return (
    <div className="App">
      {isAuthenticated ? (
        <div>
          <Navbar />
          <div>
            <img src={user?.profilePictureUrl ?? undefined} alt={user?.name} />
          </div>
          <div>
            <span>Logged in as: {user?.name}</span>
          </div>
          <div
            className={classNames({
              productionEffects: config.isProd,
              devEffects: !config.isProd,
            })}
          >
            Currently running in {import.meta.env.VITE_MODE} mode
          </div>
        </div>
      ) : (
        <div>
          <button onClick={() => loginWithRedirect()}>Click me to login</button>
        </div>
      )}
    </div>
  );
};

export default App;
