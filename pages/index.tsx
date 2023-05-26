import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Layout from "../components/Layout";
import { getPostFetch } from "../postSlice";

const Home: React.FC = () => {
  const dispatch = useDispatch();
  const posts = useSelector((state: any) => state.post.posts);

  useEffect(() => {
    dispatch(getPostFetch());
  }, []);

  console.log({ posts });

  return (
    <Layout>
      <h2 className="text-3xl text-center mb-4 underline">
        Favourite Natural Destinations
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {posts &&
          posts.map((post: any, index: number) => (
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
    </Layout>
  );
};

export default Home;
