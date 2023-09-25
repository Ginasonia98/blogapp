import React, { useEffect } from "react";
import { auth } from "../firebase";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";
import Mode from "./ModeButton";

const Header: React.FC = () => {
  const [user, loading] = useAuthState(auth);
  const googleAuth = new GoogleAuthProvider();
  const login = async () => {
    const result = await signInWithPopup(auth, googleAuth);
  };

  useEffect(() => {
    console.log(user);
  }, [user]);

  const imageStyle = {
    width: "3rem", 
    height: "3rem", 
    objectFit: "contain",
    filter: "brightness(120%)",
    borderRadius: "50%", 
    marginRight: "5px", 
  };

  return (
    <header className="bg-gray-600 py-4">
      <div className="container mx-auto px-4 flex justify-between items-center flex-col md:flex-row">
        <div className="flex items-center">
          <img
            src="https://www.beautyofindonesia.com/assets/images/logoHeader.png"
            alt="Logo"
            style={imageStyle}
          />
          <h1 className="text-white text-xl mb-4 md:mb-0 md:mr-4">
            Beauty Of Indonesia
          </h1>
        </div>
        <div className="flex items-center">
          <div className="mr-2 md:mr-6">
            <Mode />
          </div>
          {!user ? (
            <>
              <button
                onClick={login}
                className="bg-white border border-blue-500  text-blue-500 font-bold py-2 px-4 rounded mr-2 md:mr-4"
              >
                Sign In
              </button>
              <button
                onClick={() => console.log("Register")}
                className="bg-white border border-blue-500  text-blue-500  font-bold py-2 px-4 rounded "
              >
                Register
              </button>
            </>
          ) : (
            <>
              <p className="text-white mr-2">Welcome {user.displayName}</p>
              <button
                onClick={() => auth.signOut()}
                className="bg-white border border-blue-500  text-blue-500  font-bold py-2 px-4 rounded"
              >
                Sign Out
              </button>
            </>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;



