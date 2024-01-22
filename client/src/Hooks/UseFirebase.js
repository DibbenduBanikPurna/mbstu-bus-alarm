import {
  GoogleAuthProvider,
  getAuth,
  updateProfile,
  signInWithPopup,
  onAuthStateChanged,
  signOut,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  sendEmailVerification
} from "firebase/auth";
import { useState, useEffect } from "react";
import FirebaseInit from "../Components/Login/Firebase/FirebaseInit";

FirebaseInit();
const useFirebase = () => {
  const [users, setUsers] = useState({});
  const [setErrors] = useState("");
 // const [setIsLoading] = useState(true);
  // const [token, setIdToken] = useState('')

  const auth = getAuth();
  const signInUsingGoogle = () => {
    //setIsLoading(true);
    const provider = new GoogleAuthProvider();

    signInWithPopup(auth, provider)
      .then((result) => {
        const user = result.user;
        console.log(user);
        setUsers(user);
      })
      .then((error) => {
        setErrors(error.message);
        alert(error.message)
      })
      //.finally(() => setIsLoading(false));
  };

  const signUp = (name, email, password,history) => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        //setUsers(user);
        updateProfile(auth.currentUser, {
          displayName: name,
        })
          .then(() => {  history.push('/')})
          .catch((error) => {
            console.log(error);
          });
          sendEmailVerification(auth.currentUser)
  .then(() => {
      alert("A confirmation link is sent to your gmail")
  });
      })
      .catch((error) => {
        console.log(error.message);
        alert(error.message)
      });
  };

  const signIn = (email, password) => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
         const user = userCredential.user;
        console.log(user.email)
        sessionStorage.setItem("email", user.email)
      })
      .catch((error) => {
        console.log(error.message);
        alert("Try again something wrong!")
      });
  };

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUsers(user);
      } else {
        setUsers({});
      }
    });
  }, []);

 

  const logOut = () => {
    //setIsLoading(true);
    signOut(auth)
      .then(() => {
        sessionStorage.removeItem("email")
        sessionStorage.removeItem("role")
      })
      .then((error) => {
        setErrors(error.message);
      })
      //.finally(() => setIsLoading(false));
  };

  return {
    users,
    //errors,
    logOut,
    //isLoading,
    // token,
    signInUsingGoogle,
    signIn,
    signUp,
  };
};

export default useFirebase;


