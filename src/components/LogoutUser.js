import FirebaseAuthService from "../FirebaseAuthService";

export default function LogoutUser() {
  const HandleLogout = async () => {
    try {
      await FirebaseAuthService.logoutUser();
    } catch (error) {
      console.log(error.message);
      alert(error.message);
    }
  };

  return (
    <div>
      <button onClick={HandleLogout}>Logout</button>
    </div>
  );
}
