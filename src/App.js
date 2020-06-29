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

  /*
  * Footer
  */
  .foot {
    position: fixed;
    left: 0;
    bottom: 0;
    width: 100%;
    color: white;
    text-align: center;
  }
  .heart{
    color: #e25555;
  }
}
`;

function App() {
  return (
    <React.Fragment>
      <Styles>
        <NavigationBar />
        <Home />
        <footer className="foot">
          <div>
            <p>Made with <span className="heart">&#9829;</span> in PR by
              <a href="https://twitter.com/ogjavijavs">@ogjavijavs</a>.</p>
            </div>
          </footer>
        </Styles>
      </React.Fragment>
    );
  }

  export default App;
