import "./App.css";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    (() => {
      if (localStorage.getItem("isLoggedIn")) {
        setIsLoggedIn(true);
      }
      return;
    })();
  }, []);

  return (
    <div className="App">
      {isLoggedIn ? (
        <div>Welcome</div>
      ) : (
        <div>
          <p>Welcome to app</p>
          <Link to={"/login"}>Login here</Link>
          <br />
          <Link to={"/signup"}>Signup here</Link>
        </div>
      )}
    </div>
  );
}

export default App;
