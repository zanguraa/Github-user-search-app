import React from "react";
import styled from "styled-components";
import Moon from "./assets/icon-moon.svg";
import Sun from "./assets/icon-sun.svg";

export default function Header({ blackTheme, setBlackTheme }) {
  const changeColor = () => {
    setBlackTheme((prev) => !prev);
  };

  return (
    <HeaderContainer blackTheme={blackTheme}>
      <h1>devfinder</h1>
      <DarkContainer blackTheme={blackTheme}>
        <h2>{blackTheme ? "DARK" : "LIGHT"}</h2>
        <img src={blackTheme ? Moon : Sun} onClick={changeColor} alt="moon" />
      </DarkContainer>
    </HeaderContainer>
  );
}

const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 38px;
  margin-bottom: 1rem;
  h1 {
    font-weight: 700;
    font-size: 26px;
    line-height: 39px;
    margin: 0;
    color: ${(props) => (props.blackTheme ? "#222731" : "#FFF")};
  }
`;

const DarkContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  /* width: 78px; */
  height: 20px;

  h2 {
    margin: 0;
    color: ${(props) => (props.blackTheme ? "#4b6a9b" : "#FFF")};
   
  }
  img {
    cursor: pointer;
  }
`;
