import React, { useEffect } from "react";
import { auth } from "../firebase";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";
/**Hook ini digunakan untuk mengamati status otentikasi pengguna. */
import Mode from "./ModeButton";

const Header: React.FC = () => {
  const [user, loading] = useAuthState(auth);
  /**untuk mengamati status otentikasi pengguna. Nilai user akan berisi objek pengguna yang terotentikasi (jika ada) atau null, sedangkan loading akan berisi status loading saat proses pengambilan status otentikasi sedang berlangsung. */
  const googleAuth = new GoogleAuthProvider();
  /**Membuat objek googleAuth dari kelas GoogleAuthProvider yang akan digunakan untuk autentikasi menggunakan akun Google. */
  const login = async () => {
    const result = await signInWithPopup(auth, googleAuth);
  };
  /**Mendefinisikan fungsi login sebagai fungsi async yang akan melakukan proses otentikasi menggunakan akun Google. Fungsi ini akan memanggil signInWithPopup dengan parameter auth dan googleAuth, dan hasilnya akan disimpan dalam variabel result. */

  useEffect(() => {
    console.log(user);
  }, [user]);
  /**Menggunakan useEffect untuk mengamati perubahan pada nilai user. Ketika nilai user berubah, fungsi yang diberikan akan dijalankan. Dalam hal ini, fungsi tersebut akan mencetak nilai user ke konsol. */

  return (
    <header className="bg-gray-800 py-4">
      <div className="container mx-auto px-4 flex justify-between items-center flex-col md:flex-row">
        <div className="flex items-center">
          <h1 className="text-white text-2xl order-first md:order-none mb-4 md:mb-0 md:mr-4">
            Natural Destinations Blog
          </h1>
        </div>
        <div className="flex items-center">
          {/*  Di dalamnya, memasukkan komponen Mode yang menampilkan tombol mode. */}
          <div className="mr-2 md:mr-6">
            <Mode />
          </div>
          {!user ? (
            <>
              {/* Jika user adalah null (belum terotentikasi): Membuat tombol "Sign In" */}
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
              {/* Membuat tombol "Register" dengan class CSS yang sama seperti tombol "Sign In" */}
            </>
          ) : (
            <>
              <p className="text-white mr-2">Welcome {user.displayName}</p>
              {/* Jika user tidak null (sudah terotentikasi):menampilkan pesan "Welcome" diikuti dengan nama pengguna dari objek user.displayName. */}
              <button
                onClick={() => auth.signOut()}
                className="bg-blue-500 hover:bg-blue-500 text-white font-bold py-2 px-4 rounded"
              >
                Sign Out
              </button>
              {/* Ketika tombol "Sign Out" diklik, akan menjalankan fungsi auth.signOut() untuk keluar dari sesi otentikasi. */}
            </>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
