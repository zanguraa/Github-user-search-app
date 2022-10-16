import styled from "styled-components";
import Header from "./components/Header";
import Search from "./components/Search";

function App() {
  return (
    <Main>
      <Header />
      <Search />
    </Main>
  );
}

export default App;

const Main = styled.div`
  height: 100vh;

  background: #f6f8ff;
  padding: 31px 24px 0 24px;
`;
