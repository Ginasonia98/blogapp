import React, { useContext, useEffect, useState } from "react";
import Layout from "../components/Layout";
import { setPost } from "@/contexts/reducer";
import { ApplicationContext } from "./_app";
import { posts } from "@/contexts/data";

const Home: React.FC = () => {
  const { state, dispatch } = useContext(ApplicationContext);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(4);

  const postList = state.posts;

  useEffect(() => {
    dispatch(setPost(posts));
  }, [dispatch]);

  console.log({ postList });

  // Get current posts
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = postList.slice(indexOfFirstPost, indexOfLastPost);

  // Change page
  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  return (
    <Layout>
      <h2 className="text-3xl text-center mb-4 underline">
        Favourite Natural Destinations
      </h2>
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
          totalPosts={postList.length}
          currentPage={currentPage}
          paginate={paginate}
        />
      </div>
    </Layout>
  );
};

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

export default Home;
