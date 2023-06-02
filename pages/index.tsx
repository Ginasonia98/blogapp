import React, { useContext, useEffect, useState } from "react";
import Layout from "../components/Layout";
import { setPost } from "@/contexts/reducer";
import { ApplicationContext } from "./_app";
import { posts } from "@/contexts/data";
import Pagination from "../components/Pagination";
import SearchBar from "../components/SearchBar";

const Home: React.FC = () => {
  const { state, dispatch } = useContext(ApplicationContext);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(4);
  const [searchKeyword, setSearchKeyword] = useState("");

  const postList = state.posts;

  useEffect(() => {
    dispatch(setPost(posts));
  }, [dispatch]);

  // Filter posts based on search keyword
  const filteredPosts = postList.filter((post: any) =>
    post.title.toLowerCase().includes(searchKeyword.toLowerCase())
  );

  // Get current posts
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;

  let currentPosts;
  if (searchKeyword) {
    currentPosts = filteredPosts.slice(indexOfFirstPost, indexOfLastPost);
  } else {
    currentPosts = postList.slice(indexOfFirstPost, indexOfLastPost);
  }

  // Change page
  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  const handleSearch = (keyword: string) => {
    setSearchKeyword(keyword);
    setCurrentPage(1); // Reset current page to 1 when performing a new search
  };

  return (
    <Layout>
      <h2 className="text-3xl text-center mb-4 underline">
        Favourite Natural Destinations
      </h2>
      <div className="mt-10">
        <SearchBar onSearch={handleSearch} />
      </div>
      <div className="text-gray-700 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mt-10">
        {currentPosts.map((post: any, index: number) => (
          <div
            key={`post-${index}`}
            className="bg-white rounded-lg shadow-md p-4"
          >
            <img
              src={post.imageUrl}
              alt="image"
              className="w-full h-36 object-cover"
            />
            <h3 className="text-lg text-center font-bold mb-2">{post.title}</h3>
            <p>{post.description}</p>
          </div>
        ))}
      </div>
      <div className="flex justify-center mt-4">
        <Pagination
          postsPerPage={postsPerPage}
          totalPosts={filteredPosts.length || postList.length}
          currentPage={currentPage}
          paginate={paginate}
        />
      </div>
    </Layout>
  );
};

export default Home;

/**
 * Dalam komponen Home, kita mendefinisikan fungsi komponen Home dengan menggunakan functional component. Kita menggunakan hook useState untuk mendefinisikan beberapa state yang akan digunakan di dalam komponen ini. currentPage dan setCurrentPage digunakan untuk melacak halaman saat ini dalam pagination. postsPerPage adalah jumlah posting yang akan ditampilkan per halaman. searchKeyword dan setSearchKeyword digunakan untuk melacak kata kunci pencarian.
Selanjutnya, kita mengakses context menggunakan useContext dengan ApplicationContext. Kita mendapatkan state dan dispatch dari context tersebut.
useEffect digunakan untuk menjalankan efek samping saat komponen Home dimuat. Di sini, kita memanggil dispatch(setPost(posts)) untuk mengatur data posts ke dalam state melalui reducer. Kita menggunakan dispatch dan setPost yang diimpor dari reducer.
filteredPosts adalah hasil filter dari postList berdasarkan kata kunci pencarian. Kita menggunakan fungsi filter untuk memeriksa apakah title dari setiap post mengandung kata kunci pencarian yang diubah menjadi huruf kecil.
Selanjutnya, kita menghitung indeks posting terakhir dan indeks posting pertama untuk halaman saat ini. Ini digunakan untuk membagi filteredPosts atau postList menjadi bagian yang sesuai dengan halaman saat ini.
Kemudian, kita menginisialisasi currentPosts. Jika ada searchKeyword, maka kita menggunakan filteredPosts yang telah dipotong sesuai dengan indeks, jika tidak, kita menggunakan postList yang juga telah dipotong sesuai dengan indeks.
handleSearch adalah fungsi yang dipanggil ketika pencarian dilakukan menggunakan komponen SearchBar. Fungsi ini mengatur searchKeyword sesuai dengan kata kunci yang diberikan, dan juga mengatur currentPage kembali ke 1. Ini dilakukan untuk mengembalikan pengguna ke halaman pertama setelah melakukan pencarian baru.
Di dalam return, kita mengembalikan elemen-elemen JSX yang akan dirender. Ini termasuk judul, komponen SearchBar, dan daftar posting (currentPosts). Daftar posting ditampilkan dengan menggunakan metode map untuk memetakan setiap posting ke elemen JSX yang sesuai.
Di akhir, kita juga mengembalikan komponen Pagination yang menerima properti seperti postsPerPage, totalPosts, currentPage, dan paginate untuk menangani navigasi halaman.
 */
