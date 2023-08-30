import { useState } from "react";
import FirebaseAuthService from "../FirebaseAuthService";

export default function SignInUser({ user }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignIn = async (e) => {
    e.preventDefault();
    try {
      await FirebaseAuthService.loginUser(email, password);
      setEmail("");
      setPassword("");
    } catch (error) {
      console.log(error.message);
      alert(error.message);
    }
  };

  return (
    <div className="login-form-container">
      <h3>Welcome Back! Signin User</h3>
      <form onSubmit={handleSignIn} className="login-form">
        <label className="input-label login-label">
          Email:
          <input
            type="text"
            placeholder="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="input-text"
            required
          />
        </label>

        <label className="input-label password-label">
          Password:
          <input
            type="password"
            placeholder="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="input-text"
            required
          />
        </label>

        <button className="input-button" type="submit" onClick={handleSignIn}>
          Signin
        </button>
      </form>
    </div>
  );
}
