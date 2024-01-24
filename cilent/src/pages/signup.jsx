import axios from "axios";
import React, { useState } from "react";

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSignup = () => {
    if (
      name &&
      email &&
      phone &&
      password &&
      confirmPassword &&
      password === confirmPassword
    ) {
      // Axios
      (async () => {
        const res = await axios.post(
          process.env.REACT_APP_API_URL + "/signup",
          {
            name,
            email,
            password,
            phone,
          }
        );

        console.log(res);
        if (res) {
          alert("registration success");
        }

        localStorage.setItem("isLoggedIn", true);

        try {
        } catch (err) {
          console.log(err);
          alert("something went wrong");
        }
      })();
    } else {
      alert("Please fill in all fields and make sure the passwords match.");
    }
  };

  return (
    <>
      <div
        style={{
          height: "100vh",
          width: "100vw",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            maxHeight: "600px",
            width: "300px",
            border: "1px solid grey",
            padding: "20px",
          }}
        >
          <h2>Sign Up</h2>
          <label style={{ marginBottom: "10px", width: "100%" }}>
            <div>Name:</div>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              style={{
                padding: "8px",
                marginBottom: "15px",
                width: "100%",
              }}
            />
          </label>
          <label style={{ marginBottom: "10px", width: "100%" }}>
            <div>Email:</div>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              style={{
                padding: "8px",
                marginBottom: "15px",
                width: "100%",
                paddingRight: "10px",
              }}
            />
          </label>
          <label style={{ marginBottom: "10px", width: "100%" }}>
            <div>Phone:</div>
            <input
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              style={{
                padding: "8px",
                marginBottom: "15px",
                width: "100%",
              }}
            />
          </label>
          <label style={{ marginBottom: "10px", width: "100%" }}>
            <div>Password:</div>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              style={{
                padding: "8px",
                marginBottom: "15px",
                width: "100%",
              }}
            />
          </label>
          <label style={{ marginBottom: "10px", width: "100%" }}>
            <div>Confirm Password:</div>
            <input
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              style={{
                padding: "8px",
                marginBottom: "15px",
                width: "100%",
              }}
            />
          </label>
          <button
            style={{ padding: "10px", cursor: "pointer", width: "100%" }}
            onClick={handleSignup}
          >
            Sign Up
          </button>
        </div>
      </div>
    </>
  );
};

export default Signup;
