import { useState } from "react";
import FirebaseAuthService from "./FirebaseAuthService";
import RegisterUser from "./components/RegisterUser";
import LogoutUser from "./components/LogoutUser";
import SignInUser from "./components/SignInUser";
import "./App.css";

function App() {
  const [currentUser, setCurrentUser] = useState(null);
  FirebaseAuthService.subscribeToAuthChanges(setCurrentUser);
  return (
    <div className="App">
      <header className="App-header">
        <h1>Firebase Recipe v1.0.1</h1>
        <h2>
          Current logged in user: {currentUser ? currentUser.email : "None"}
        </h2>
      </header>
      <RegisterUser user={currentUser} />
      <SignInUser user={currentUser} />
      <LogoutUser />
    </div>
  );
}

export default App;
