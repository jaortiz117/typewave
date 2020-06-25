import React from 'react';
import logo from './logo.svg';
import styled from 'styled-components'
import { NavigationBar } from './NavigationBar'
import { Home } from './Home'
import './App.css';

const Styles = styled.div`{
  background-color: #003d5bff;
  min-height: 100vh;
  color: white;
}
`;

function App() {
  return (
    <React.Fragment>
      <Styles>
        <NavigationBar />
        <Home />
        <p>Footer placeholder</p>
      </Styles>
    </React.Fragment>
  );
}

export default App;
