import { useState } from "react";
import FirebaseAuthService from "../FirebaseAuthService";

export default function RegisterUser({ user }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = () => {
    FirebaseAuthService.registerUser(email, password);
    setEmail("");
    setPassword("");
  };

  return (
    <div>
      <h1>Register User</h1>
      <input
        type="text"
        placeholder="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleRegister}>Register</button>
    </div>
  );
}
