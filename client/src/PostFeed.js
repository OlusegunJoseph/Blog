import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Posts from "./Posts";

const PostFeed = () => {
  const [post, setPost] = useState();
  useEffect(() => {
    //fetching news data from gnews api
    fetch("/api/get-posts")
      .then((res) => {
        console.log("Response is", res);
        return res.json();
      })
      .then((data) => {
        console.log("Data is", data);
        setPost(data.data);
        console.log("Data in state is:", data);
      })
      .catch((err) => {
        console.log("ERROR", err);
      });
  }, []);

  if (!post) {
    return <div>Loading</div>;
  }
  return (
    <>
      {post.map((item) => {
        console.log("The item data is", item);

        return (
          <PostContainer key={item.title}>
            <Posts
              title={item.title}
              image={item.image}
              desc={item.description}
              item={item}
            />
          </PostContainer>
        );
      })}
    </>
  );
};

export default PostFeed;

const PostContainer = styled.div``;
