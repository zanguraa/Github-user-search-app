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
      <Wrapper>
        <Header blackTheme={blackTheme} setBlackTheme={setBlackTheme} />
        <Search result={result} blackTheme={blackTheme} setSearch={setSearch} />
        <UserInfo
          blackTheme={blackTheme}
          search={search}
          result={result}
          setResult={setResult}
        />
      </Wrapper>
    </Main>
  );
}

export default App;

const Main = styled.div`
 
  display: flex;
  align-items: center;
  flex-direction: column;
  height: 100vh;
  transition: all 0.5s;
  background: ${(props) => (props.blackTheme ? "#F6F8FF" : "#141D2F")};
  padding: 31px 24px 0 24px;
  @media (min-width: 768px) {
    margin: auto;
    height: 100vh;
    
  }
  @media (min-width: 1440px) {
    margin: auto;
    
  }
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;

  gap: 1rem;
  max-width: 327px;
  @media (min-width: 768px) {
    max-width: 573px;
    margin-top: 140px;
    margin-bottom: 100px;
  }
  @media (min-width: 1440px) {
    max-width: 730px;
    margin-top: 144px;
    
  }
`;
