import React from "react";
import "./DetailPost.css";

const DetailPost = () => {
  return (
    <Container>
      <SinglePostWrapper>
        <img
          className="singlePostImg"
          src="https://image-cdn.essentiallysports.com/wp-content/uploads/20200531120..."
          alt=""
        />

        <h1 className="singlePostTitle">
          This is Detail Page.
          <SinglePostEdit className="singlePostEdit"></SinglePostEdit>
        </h1>
      </SinglePostWrapper>
    </Container>
  );
};

export default DetailPost;
