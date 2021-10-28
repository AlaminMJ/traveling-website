import React from "react";
import { createContext } from "react";
import useFirebase from "../Hooks/useFirebase";
export const FirebaseContext = createContext();
const AuthContext = ({ children }) => {
  const allContext = useFirebase();
  return (
    <FirebaseContext.Provider value={allContext}>
      {children}
    </FirebaseContext.Provider>
  );
};

export default AuthContext;
