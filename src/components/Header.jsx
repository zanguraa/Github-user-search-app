import React from "react";
import styled from "styled-components";
import Moon from "./assets/icon-moon.svg";

export default function Header() {
  return (
    <HeaderContainer>
      <h1>devfinder</h1>
      <DarkContainer>
        <h2>DARK</h2>
        <img src={Moon} alt="moon" />
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
  h1 {
    font-weight: 700;
    font-size: 26px;
    line-height: 39px;
    margin: 0;
    color: #222731;
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
    color: #4b6a9b;
  }
  img {
    cursor: pointer;
  }
`;
