import { createContext, useEffect, useState } from "react"
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile} from "firebase/auth";

import app from "../Firebase/Firebase.config";
import axios from "axios";

export const AuthContext = createContext(null)

const auth = getAuth(app);

const AuthProviders = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const unsubcribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser)
            
            if(currentUser){
              axios.post('http://localhost:5000/api/v1/user/jwtcreate', {email: currentUser.email})
              .then(data => {
                console.log(data.data.data);
                localStorage.setItem('access-token', data.data.data)
              })
            }
            else{
              localStorage.removeItem('access-token')
            }

            setLoading(false);
          });
          return() => {
            return unsubcribe();
          }
    }, [user])

    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const loginUser = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password)
    }
     // Profile Update
  const profileUpdate = (name, photoURL) => {
    setLoading(true);
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photoURL,
    });
  };    
    const logout = () => {
        setLoading(true);
        return signOut(auth)
    }

    const authInfo = {
        user, 
        loading,
        createUser,
        loginUser,
        profileUpdate,
        logout
    }
  return (
    <AuthContext.Provider value={authInfo}>
        {children}
    </AuthContext.Provider>
  )
}

export default AuthProviders