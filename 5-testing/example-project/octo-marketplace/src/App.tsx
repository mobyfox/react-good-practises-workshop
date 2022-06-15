import { useContext } from "react";
import { Marketplace } from "./components";
import AuthContext from "./contexts/auth-context";

export default function App() {
  const { user, isAdmin } = useContext(AuthContext);

  return (
    <div>
      <h1>Welcome to the Octo-Marketplace, {user}</h1>
      <Marketplace admin={isAdmin} />
    </div>
  );
}
