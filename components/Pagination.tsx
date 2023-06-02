import React from "react";

type PaginationProps = {
  postsPerPage: number;
  totalPosts: number;
  currentPage: number;
  paginate: (pageNumber: number) => void;
};

const Pagination: React.FC<PaginationProps> = ({
  postsPerPage,
  totalPosts,
  currentPage,
  paginate,
}) => {
  const pageNumbers = Math.ceil(totalPosts / postsPerPage);

  return (
    <nav>
      <div className="flex justify-center">
        <button
          onClick={() => {
            if (currentPage > 1) {
              paginate(currentPage - 1);
            }
          }}
          className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-l focus:outline-none ${
            currentPage <= 1 ? "opacity-50 cursor-not-allowed" : ""
          }`}
        >
          Prev
        </button>
        <div className="mx-4">
          <button
            onClick={() => {
              if (currentPage < pageNumbers) {
                paginate(currentPage + 1);
              }
            }}
            className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-r focus:outline-none ${
              currentPage >= pageNumbers ? "opacity-50 cursor-not-allowed" : ""
            }`}
          >
            Next
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Pagination;

/**
 *Tipe Props:
type PaginationProps = { ... }: Mendefinisikan tipe Props untuk komponen Pagination. Props ini memiliki empat properti yaitu postsPerPage, totalPosts, currentPage, dan paginate.
postsPerPage: Menyatakan jumlah posting yang ditampilkan per halaman.
totalPosts: Menyatakan total jumlah posting.
currentPage: Menyatakan halaman saat ini.
paginate: Fungsi untuk mengubah halaman saat pengguna mengklik navigasi.
Definisi Komponen Pagination:
const Pagination: React.FC<PaginationProps> = ({ ... }) => { ... }: Mendefinisikan komponen Pagination sebagai fungsi komponen fungsional yang menerima Props dengan tipe PaginationProps. Props ini akan diterima sebagai argumen dalam fungsi komponen ini.
Perhitungan Jumlah Halaman:
const pageNumbers = Math.ceil(totalPosts / postsPerPage);: Menghitung jumlah halaman yang diperlukan berdasarkan total jumlah posting dan jumlah posting yang ditampilkan per halaman.
Return Komponen:
<nav> ... </nav>: Menggunakan elemen nav sebagai wadah utama untuk navigasi paginasi.
<div className="flex justify-center"> ... </div>: Menggunakan elemen div dengan class "flex justify-center" untuk mengatur tampilan navigasi secara horizontal dan memusatkan konten navigasi.
<button ... />: Menggunakan elemen button untuk tombol navigasi "Prev" (sebelumnya). Beberapa properti dan event handler yang digunakan di antaranya:
onClick={() => { ... }}: Menetapkan fungsi yang akan dipanggil saat tombol diklik. Fungsi ini memeriksa apakah halaman saat ini lebih besar dari 1, jika ya, maka fungsi paginate akan dipanggil dengan argumen currentPage - 1 untuk mengubah halaman saat ini menjadi halaman sebelumnya.
className={bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-l focus:outline-none ${
currentPage <= 1 ? "opacity-50 cursor-not-allowed" : ""
}}: Menetapkan beberapa class CSS untuk mengatur tampilan tombol. Jika halaman saat ini kurang dari atau sama dengan 1, maka tombol akan memiliki opasitas rendah dan kursor nonaktif.
<div className="mx-4"> ... </div>: Menggunakan elemen div dengan class "mx-4" untuk memberikan jarak horizontal antara tombol "Prev" dan "Next".
<button ... />: Menggunakan elemen button untuk tombol navigasi "Next" (berikutnya). Beberapa properti dan event handler yang digunakan di antaranya:
onClick={() => { ... }}: Menetapkan fungsi yang akan dipanggil saat tombol diklik. Fungsi ini memeriksa apakah halaman saat ini kurang dari jumlah halaman yang tersedia, jika ya, maka fungsi paginate akan dipanggil dengan argumen currentPage + 1 untuk mengubah halaman saat ini menjadi halaman berikutnya.
className={bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-r focus:outline-none ${
currentPage >= pageNumbers ? "opacity-50 cursor-not-allowed" : ""
}}: Menetapkan beberapa class CSS untuk mengatur tampilan tombol. Jika halaman saat ini lebih besar dari atau sama dengan jumlah halaman yang tersedia, maka tombol akan memiliki opasitas rendah dan kursor nonaktif.
 */
