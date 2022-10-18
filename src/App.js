import React, { useState } from "react";
import styled from "styled-components";
import Header from "./components/Header";
import Search from "./components/Search";
import UserInfo from "./components/UserInfo";

function App() {
  const [blackTheme, setBlackTheme] = useState(true);
  const [search, setSearch] = useState("zanguraa");
  const [result, setResult] = useState(true); 

  return (
    <Main blackTheme={blackTheme}>
      <Header blackTheme={blackTheme} setBlackTheme={setBlackTheme} />
      <Search blackTheme={blackTheme} setSearch={setSearch} />
      <UserInfo blackTheme={blackTheme} search={search} result={result} setResult={setResult}  />
    </Main>
  );
}

export default App;

const Main = styled.div`
display: flex;
flex-direction: column;
gap: 1rem;
  height: 100vh;
  transition: all 0.5s;
  background: ${props => props.blackTheme ? '#F6F8FF' : '#141D2F'};
  padding: 31px 24px 0 24px;
`;
