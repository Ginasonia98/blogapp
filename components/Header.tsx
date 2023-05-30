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

  return (
    <header className="bg-gray-800 py-4">
      <div className="container mx-auto px-4 flex justify-between items-center flex-col md:flex-row">
        <div className="flex items-center">
          <h1 className="text-white text-2xl order-first md:order-none mb-4 md:mb-0 md:mr-4">
            Natural Destinations Blog
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
                className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded mr-2 md:mr-4"
              >
                Sign In
              </button>
              <button
                onClick={() => console.log("Register")}
                className="bg-blue-500 hover:bg-blue-500 text-white font-bold py-2 px-4 rounded "
              >
                Register
              </button>
            </>
          ) : (
            <>
              <p className="text-white mr-2">Welcome {user.displayName}</p>
              <button
                onClick={() => auth.signOut()}
                className="bg-blue-500 hover:bg-blue-500 text-white font-bold py-2 px-4 rounded"
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
