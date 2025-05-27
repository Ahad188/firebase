import React, { use, useState } from "react";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import auth from "../../../firebase/firebase.config";
import { signOut } from "firebase/auth/cordova";

const Login = () => {
  const [use, setUser] = useState(null);

  const provider = new GoogleAuthProvider();
  console.log(use);

  const handelLogin = () => {
    // console.log('hello login system');
    signInWithPopup(auth, provider)
      .then((res) => {
        console.log(res.user.displayName);
        setUser(res.user);
      })
      .catch((err) => {
        console.log(err);
      });
    console.log(provider);
  };

  const logOut=()=>{
     signOut(auth)
     setUser(null)
  }

  return (
    <div>
      <h2>this is login page</h2>
      {/* {
                    use &&  <h3>{use.displayName}</h3> 
                    <img src={use.photoURL} alt="" />

                    } */}
      {use && (
        <>
          <h3>{use.displayName}</h3>
          <img onClick={()=>logOut()} src={use.photoURL} alt="" />
        </>
      )}

      <button className="btn" onClick={handelLogin}>
        {" "}
        Login
      </button>
    </div>
  );
};

export default Login;
