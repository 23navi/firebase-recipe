import firebase from "./FirebaseConfig";
const auth = firebase.auth();

const signInWithGoogle = () => {
  const provider = new firebase.auth.GoogleAuthProvider();
  return auth.signInWithPopup(provider);
};

const loginUser = (email, password) => {
  return auth.signInWithEmailAndPassword(email, password);
};

const registerUser = (email, password) => {
  return auth.createUserWithEmailAndPassword(email, password);
};

const logoutUser = () => {
  return auth.signOut();
};

const subscribeToAuthChanges = (handleAuthChange) => {
  return auth.onAuthStateChanged((user) => {
    handleAuthChange(user);
  });
};

// this subscribeToAuthChanges function is to setUser... Like when user logs out of one account and logs in with other account in same react session (without page reload)... we need to set the currentUser... so auth.onAuthStateChanged() will be called when userChange happens on firebase.. and it is called with user...

const FirebaseAuthService = {
  signInWithGoogle,
  loginUser,
  registerUser,
  logoutUser,
  subscribeToAuthChanges,
};

export default FirebaseAuthService;
