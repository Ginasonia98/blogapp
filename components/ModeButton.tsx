import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { FaMoon, FaSun } from "react-icons/fa";

export default function Mode() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  return (
    <button
      className="bg-gray-300 dark:bg-gray-700 rounded-full w-12 h-6 flex items-center justify-center"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
    >
      {theme === "dark" ? (
        <FaSun className="w-5 h-5 text-white" />
      ) : (
        <FaMoon className="w-5 h-5 text-black" />
      )}
    </button>
  );
}


/**
 *Definisi fungsi komponen Mode:
export default function Mode() { ... }: Mendefinisikan fungsi komponen Mode sebagai default ekspor dari file ini. Fungsi ini tidak menerima argumen dan akan mengembalikan tampilan yang sesuai.
Pengaturan State:
const [mounted, setMounted] = useState(false);: Menggunakan hook useState untuk mendefinisikan state mounted dengan nilai awal false. State ini digunakan untuk menunjukkan apakah komponen sudah dipasang di dalam DOM.
Penggunaan useTheme:
const { theme, setTheme } = useTheme();: Menggunakan hook useTheme untuk mengakses informasi tema yang digunakan dan fungsi untuk mengubah tema. Variabel theme menyimpan nilai tema saat ini, sedangkan setTheme adalah fungsi untuk mengubah tema.
Efek useEffect:
useEffect(() => setMounted(true), []);: Menggunakan hook useEffect untuk menjalankan efek samping. Efek ini akan dipanggil hanya sekali setelah komponen dipasang ke dalam DOM. Pada saat itu, state mounted akan diubah menjadi true.
Kondisional Render:
if (!mounted) return null;: Jika komponen belum dipasang (mounted masih false), maka fungsi ini akan mengembalikan nilai null. Hal ini dilakukan untuk menghindari render tampilan sebelum komponen sepenuhnya dipasang.
Return Komponen:
<button ... > ... </button>: Mengembalikan elemen button yang berfungsi sebagai tombol untuk mengganti tema. Beberapa properti dan event handler yang digunakan di antaranya:
className="bg-gray-300 dark:bg-gray-700 rounded-full w-12 h-6 flex items-center justify-center": Menetapkan beberapa class CSS untuk mengatur tampilan tombol dalam mode terang dan mode gelap.
onClick={() => setTheme(theme === "dark" ? "light" : "dark")}: Menetapkan fungsi yang akan dipanggil saat tombol diklik. Fungsi ini akan mengubah tema ke tema yang berbeda, yaitu "light" jika tema saat ini adalah "dark" dan sebaliknya.
Kondisional Render Ikon:
{theme === "dark" ? ( ... ) : ( ... )}: Menampilkan ikon yang sesuai tergantung pada tema yang sedang digunakan. Jika tema adalah "dark", maka ikon FaSun (ikon matahari) ditampilkan dengan class CSS tertentu. Jika tema adalah "light", maka ikon FaMoon (ikon bulan) ditampilkan dengan class CSS tertentu.
 */