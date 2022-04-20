import React, { useEffect, useState } from "react";
import styled from "styled-components";
import "./DetailPost.css";
import { useLocation } from "react-router";
import { useHistory, useParams } from "react-router-dom";

const Post = () => {
  const { postId } = useParams();
  console.log("userId", postId);

  const [post, setPost] = useState(null);
  // const PF = "http://localhost:8000/images";

  useEffect(() => {
    fetch(`/posts/${postId}`)
      .then((res) => res.json())
      .then((data) => {
        console.log("Data in single post", data);
        setPost(data);
        console.log("Date is setPost", data);
      })
      .catch((err) => {
        console.log("ERROR, err");
      });
  }, [postId]);
  if (!post) {
    return <div>Loading</div>;
  }

  return (
    <Container className="singlePost">
      <SinglePostWrapper className="singlePostWrapper">
        <img className="singlePostImg" src={post.photo} alt="" />

        <h1 className="singlePostTitle">
          {post.title}
          <SinglePostEdit className="singlePostEdit">
            <i className="singlePostIcon  far fa-edit"></i>
            <i className="singlePostIcon far fa-trash-alt"></i>
          </SinglePostEdit>
        </h1>
        <div className="singlePostInfo">
          <span className="singlePostAuthor">
            Author: <b>{post.source.name}</b>
          </span>
          <span className="singlePostDate">
            {" "}
            {new Date(post.createdAt).toDateString()}
          </span>
        </div>
        <p className="singlePostDesc">{post.content}</p>
      </SinglePostWrapper>
    </Container>
  );
};

export default Post;

const Container = styled.div``;
const SinglePostWrapper = styled.div``;
const SinglePostEdit = styled.div``;
