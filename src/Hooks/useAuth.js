import { useContext } from "react";
import { FirebaseContext } from "../Context/AuthContext";

const useAuth = () => {
  return useContext(FirebaseContext);
};
export default useAuth;
