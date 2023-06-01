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
  const currentPosts = filteredPosts.slice(indexOfFirstPost, indexOfLastPost);

  // Change page
  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  const handleSearch = (keyword: string) => {
    setSearchKeyword(keyword);
  };

  return (
    <Layout>
      <h2 className="text-3xl text-center mb-4 underline">
        Favourite Natural Destinations
      </h2>
      <SearchBar onSearch={handleSearch} />
      <div className="text-gray-700 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {currentPosts &&
          currentPosts.map((post: any, index: number) => (
            <div
              key={`post-${index}`}
              className="bg-white rounded-lg shadow-md p-4"
            >
              <img
                src={post.imageUrl}
                alt="image"
                className="w-full h-36 object-cover"
              />
              <h3 className="text-lg text-center font-bold mb-2">
                {post.title}
              </h3>
              <p>{post.description}</p>
            </div>
          ))}
      </div>
      <div className="flex justify-center mt-4">
        <Pagination
          postsPerPage={postsPerPage}
          totalPosts={filteredPosts.length}
          currentPage={currentPage}
          paginate={paginate}
        />
      </div>
    </Layout>
  );
};

export default Home;

