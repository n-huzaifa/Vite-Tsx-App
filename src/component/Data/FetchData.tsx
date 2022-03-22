import React, { useEffect, useState } from "react";
import axios from "axios";
import styles from "./FetchData.module.css";

type post = {
  id: string;
  title: string;
  url: string;
  ups: number;
  author: string;
  selftext: string;
};

const FetchData = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios.get(`https://www.reddit.com/r/reactjs.json`).then((res) => {
      const newPosts = res.data.data.children.map((obj: any) => obj.data);
      setPosts(newPosts);
    });
  }, []);

  return (
    <>
      <h1>r/React Js</h1>
      <div>
        {posts.map((post: post) => {
          return (
            <div className={styles.comp} key={post.id}>
              <p className={styles.author}>Posted by u/{post.author}</p>
              <a target='_blank' className={styles.a} href={post.url}>
                {post.title}
              </a>
              <p className={styles.upvotes}>Total upvotes: {post.ups}</p>
              <p className={styles.body}>{post.selftext}</p>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default FetchData;
