import { createContext, useEffect, useState } from "react"
import { getAuth, onAuthStateChanged} from "firebase/auth";

import app from "../Firebase/Firebase.config";

export const AuthContext = createContext(null)

const auth = getAuth(app);

const AuthProviders = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const unsubcribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser)
            console.log("User:", user);
            setLoading(false);
          });
          return() => {
            return unsubcribe();
          }
    }, [user])

    const authInfo = {
        user, 
        loading
    }
  return (
    <AuthContext.Provider value={authInfo}>
        {children}
    </AuthContext.Provider>
  )
}

export default AuthProviders