import { createContext, useEffect, useState } from "react";

const AuthContext = createContext<{
  user: string | undefined;
  isAdmin: boolean | undefined;
}>({
  user: undefined,
  isAdmin: undefined,
});

interface Props {
  children: React.ReactNode;
}

export function AuthProvider({ children }: Props): JSX.Element {
  const [user, setUser] = useState<string | undefined>();

  useEffect(() => {
    /* API calls */
    setUser("Jane Doe");
  }, []);
  const isAdmin = false; /* TODO */

  return (
    <AuthContext.Provider value={{ user, isAdmin }}>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthContext;
