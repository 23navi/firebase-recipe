import { useState } from "react";
import firebase from "../FirebaseConfig";

export default function ForgotPassword() {
  const [email, setEmail] = useState("");

  const handleRegister = async () => {
    try {
      await firebase.auth().sendPasswordResetEmail(email);
      alert("Email sent");
      setEmail("");
    } catch (error) {
      console.log(error.message);
      alert(error.message);
    }
  };

  return (
    <div>
      <h1>Forgot password?</h1>
      <input
        type="text"
        placeholder="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <button onClick={handleRegister}>Send Email</button>
    </div>
  );
}
