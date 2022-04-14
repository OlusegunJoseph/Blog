import React from "react";
import styled from "styled-components";
import "./Post.css";

const Posts = ({ title, image, desc, item }) => {
  return (
    <>
      <Main className="main">
        <MainContainer className="main-container">
          <PostContainer className="post-container">
            <Picture className="post-image">
              <img className="post-image" src={image} />
            </Picture>
            <PostContent>
              <PostDate className="post-date">April 14</PostDate>
              <PostTitle className="post-title">
                <h4>{title}</h4>
              </PostTitle>
              <PostDesc className="post-desc">{desc}</PostDesc>
            </PostContent>
          </PostContainer>
        </MainContainer>
      </Main>
    </>
  );
};

export default Posts;

const Main = styled.div`
  margin-top: 32px;
  display: flex;
  justify-content: center;
`;

const MainContainer = styled.div`
  max-width: 750px;
  min-width: 600px;
  width: 100%;
  padding-left: 16px;
  padding-right: 16px;
`;
const PostContainer = styled.div`
  display: flex;
  border: 1px solid #eaecee;
  border-radius: 8px;
  min-height: 200px;
  overflow: hidden;
`;

const Picture = styled.div`
  flex-basis: 50%;
  background-size: cover;
  background-position: center;

  img {
    height: 250px;
    width: 350px;
  }
`;

const PostContent = styled.div`
  flex-basis: 60%;
  padding: 24px;
`;

const PostDate = styled.div`
  font-size: 12px;
  color: #adb5bd;
  font-weight: 600;
`;

const PostTitle = styled.div`
  margin-top: 16px;
  font-size: 1.5em;
  color: #333;
  font-weight: 600;
`;

const PostDesc = styled.div`
  margin-top: 4px;
  color: #495057;
  font-weight: 400;
  line-height: 1.4;
  max-height: 65px;
  overflow: hidden;
`;
