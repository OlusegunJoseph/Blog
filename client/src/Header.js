import React from "react";
import styled from "styled-components";
import "./Header.css";

const Header = () => {
  return (
    <Container className="header">
      <ProfileImage className="profile-image"></ProfileImage>
      <ProfileName>Olusegun Joseph</ProfileName>
      <Subtext>Welcome to my blog!</Subtext>
    </Container>
  );
};

export default Header;

const Container = styled.div`
  /* display: flex;
  flex-direction: column;
  min-height: 350px;
  background-color: blue;
  justify-content: center;
  align-items: center;
  color: white;
  background-image: url(assets/banner.jpeg); */
`;

const ProfileImage = styled.img`
  /* width: 100px;
  height: 100px;
  background-color: white;
  border-radius: 50%;
  background-image: url(/assets/resize.jpg); */
`;
const ProfileName = styled.div`
  font-size: 3em;
  font-weight: bold;
`;
const Subtext = styled.div`
  margin-top: 8px;
`;
