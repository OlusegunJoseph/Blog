import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Posts from "./Posts";
import axios from "axios";

const PostFeed = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await axios.get("/posts");
      console.log(res);
      setPosts(res.data);
    };
    fetchPosts();
  }, []);
  // const [post, setPost] = useState();
  // useEffect(() => {
  //   //fetching news data from gnews api
  //   // fetch("/api/get-posts")
  //   fetch("/posts")
  //     .then((res) => {
  //       console.log("Response is", res);
  //       return res.json();
  //     })
  //     .then((data) => {
  //       console.log("Data is", data);
  //       setPost(data.data);
  //       console.log("Data in state is:", data);
  //     })
  //     .catch((err) => {
  //       console.log("ERROR", err);
  //     });
  // }, []);

  // if (!post) {
  //   return <div>Loading</div>;
  // }
  return (
    // <PostContainer>
    //   <Posts  />
    // </PostContainer>
    <>
      {posts.map((item) => {
        console.log("The item data is", item);
        return (
          <PostContainer key={item.id}>
            {/* key={item.title} */}
            <Posts
              title={item.title}
              photo={item.photo}
              desc={item.description}
              date={item.publishedAt}
              item={item}
              newDate={item.createdAt}
              _id={item._id}
            />
          </PostContainer>
        );
      })}
    </>
  );
};

export default PostFeed;

const PostContainer = styled.div``;
