// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
/**Mengimpor fungsi getAuth dari pustaka Firebase untuk mendapatkan instance autentikasi Firebase. */
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBVlHe5ZJrlblH_mJe1hnHgam7aTKcktW4",
  authDomain: "next-auth-8c76e.firebaseapp.com",
  projectId: "next-auth-8c76e",
  storageBucket: "next-auth-8c76e.appspot.com",
  messagingSenderId: "716875775316",
  appId: "1:716875775316:web:396031e3b0e6b5c33b9cc1"
};
/**Mendefinisikan konfigurasi Firebase untuk aplikasi web Anda. Konfigurasi ini berisi informasi tentang API kunci, domain otentikasi, ID proyek, penyimpanan, pengirim pesan, dan ID aplikasi Firebase.
Anda perlu mengganti nilai-nilai ini dengan konfigurasi yang sesuai untuk proyek Firebase Anda sendiri. */

// Initialize Firebase
const app = initializeApp(firebaseConfig);
/**const app = initializeApp(firebaseConfig);: Menginisialisasi aplikasi Firebase dengan menggunakan konfigurasi yang telah didefinisikan sebelumnya. Fungsi initializeApp akan mengembalikan instance aplikasi Firebase yang dapat digunakan untuk mengakses berbagai layanan Firebase.
Anda perlu memanggil fungsi initializeApp dengan konfigurasi Firebase yang sesuai untuk aplikasi Anda. */
export const auth = getAuth();
/**export const auth = getAuth();: Mendapatkan instance autentikasi Firebase dengan menggunakan fungsi getAuth. Instance ini digunakan untuk mengakses berbagai fungsi autentikasi Firebase seperti pendaftaran, masuk, dan keluar.
export digunakan untuk mengeskpor instance autentikasi agar dapat digunakan di berkas JavaScript lain yang mengimpor auth. */