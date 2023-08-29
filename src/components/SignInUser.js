import { useState } from "react";
import FirebaseAuthService from "../FirebaseAuthService";

export default function SignInUser({ user }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignIn = async () => {
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
    <div>
      <h1>SignIn User</h1>
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
      <button onClick={handleSignIn}>Register</button>
    </div>
  );
}
