import React, { useEffect, useState } from "react";
import axios from "axios";

type post = {
  id: string;
  title: string;
};

const FetchData = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios.get(`https://www.reddit.com/r/reactjs.json`).then((res) => {
      const newPosts = res.data.data.children.map((obj: any) => obj.data);
      console.log(res);
      setPosts(newPosts);
    });
  }, []);

  return (
    <>
      <h1>r/Fecthing Data</h1>
      <ul>
        {posts.map((post: post) => {
          return <li key={post.id}>{post.title}</li>;
        })}
      </ul>
    </>
  );
};

export default FetchData;
