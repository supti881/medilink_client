import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from "firebase/auth";
// import axios from "axios";
import { useEffect, useState } from "react";
import auth from "../firebase.config";

import { AuthContext } from "./AuthContext";

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState([]);
  const [role, setRole] = useState(null);
  const [loading, setLoading] = useState(true);
  // const [roleLoading, setRoleLoading] = useState(true);
  // const [role, setRole] = useState("");
  // const [userStatus, setUserStatus] = useState("");
  console.log(user);
  console.log("user role in auth provider", role);

  const SignUpWithEmailPassword = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const SignIn = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const UpdateUser = (userInfo) => {
    setLoading(true);
    return updateProfile(auth.currentUser, userInfo);
  };
  // useEffect(() => {
  //   axios
  //     .get(`http://localhost:5000/user/role/${user?.email}`)
  //     .then((res) => {
  //       console.log(res.data.role);
  //       setRole(res.data.role);
  //       setUserStatus(res.data.status);
  //       console.log(role);
  //       setRoleLoading(false);
  //     })
  //     .then((error) => {
  //       console.log(error);
  //     });
  // }, [user, role]);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []); // ✅ EMPTY

  // ✅ Fetch role
  useEffect(() => {
    if (user?.email) {
      fetch(`http://localhost:5000/api/users/${user.email}`)
        .then((res) => res.json())
        .then((data) => {
          setRole(data.role);
        })
        .catch((err) => console.error(err));
    }
  }, [user]);

  const SignOut = () => {
    return signOut(auth);
  };

  const userInfo = {
    SignUpWithEmailPassword,
    SignIn,
    SignOut,
    UpdateUser,
    loading,
    user,
    role,
    // roleLoading,
    // userStatus
  };
  return (
    <AuthContext.Provider value={userInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
