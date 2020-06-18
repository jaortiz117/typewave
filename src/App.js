import React from 'react';
import logo from './logo.svg';
import styled from 'styled-components'
import { NavigationBar } from './NavigationBar'
import './App.css';

const Styles = styled.div`{
  background-color: hsla(227, 74%, 35%, 1);
  min-height: 100vh;
  color: hsla(35, 18%, 96%, 1);
}
`;

function App() {
  return (
    <React.Fragment>
      <Styles>
        <NavigationBar />
        // Home
        <p>elo wol</p>
      </Styles>
    </React.Fragment>
  );
}

export default App;
