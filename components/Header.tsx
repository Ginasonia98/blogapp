import React, { useEffect } from 'react';
import { auth } from "../firebase";
import { signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import { useAuthState } from "react-firebase-hooks/auth";

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
        <h1 className="text-white text-2xl order-first md:order-none mb-4 md:mb-0">Natural Destinations  Blog</h1>
        <div className="flex items-center">
          {user ? (
            <p className="text-white mr-2">Welcome {user.displayName}</p>
          ) : null}
          {user ? (
            <button
              onClick={() => auth.signOut()}
              className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded"
            >
              Sign Out
            </button>
          ) : (
            <button
              onClick={login}
              className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded mr-2"
            >
              Sign In
            </button>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;

