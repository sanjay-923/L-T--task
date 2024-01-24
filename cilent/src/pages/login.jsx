import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, redirect } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    (() => {
      if (localStorage.getItem("isLoggedIn")) {
        setIsLoggedIn(true);
      }
      return;
    })();
  }, []);

  const handleLogin = () => {
    if (email && password) {
      (async () => {
        try {
          const res = await axios.post(
            process.env.REACT_APP_API_URL + "/login",
            {
              email,
              password,
            }
          );

          if (res.status === 200) {
            alert("login success");
            redirect("/");
          }
          return;
        } catch (err) {
          console.log(err);
          alert("something went wrong");
        }
      })();
    } else {
      alert("Please enter both email and password.");
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
  };

  return (
    <div className="App">
      {isLoggedIn ? (
        <div>
          <h2>Welcome, {email}!</h2>
          <button onClick={handleLogout}>Logout</button>
        </div>
      ) : (
        <>
          <div>
            <h2>Login</h2>
            <label>
              Email:
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </label>
            <br />
            <label>
              Password:
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </label>
            <br />
            <button onClick={handleLogin}>Login</button>
          </div>
          <Link to={"/signup"}>Signup here</Link>
        </>
      )}
    </div>
  );
};

export default Login;
