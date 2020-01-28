import React from "react";
import styled from "styled-components";
import Header from "./Header/Header";
import List from "./List/List";
import Note from "./Note/Note";

const App = ({ notes, activeId }) => {
  return (
    <div className="App">
      <Header />
      <Container>
        <List />
        <Note />
      </Container>
    </div>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: row;
  height: calc(100vh - 50px);
`;
export default App;
