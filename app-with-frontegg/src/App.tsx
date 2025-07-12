import "./App.css";
import { useEffect } from "react";
import { useAuth, useLoginWithRedirect } from "@frontegg/react";
import Navbar from "./Navbar";
import classNames from "classnames";
import config from "./config";

function App() {
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
}

export default App;
