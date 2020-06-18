import React from 'react'
import { Navbar } from 'react-bootstrap'
import styled from 'styled-components'

import icon from './temp_logo.png';

const Styles = styled.div`
.bg-royal{
  background-color: hsla(227, 74%, 35%, 1);
}

.champagne{
  color: hsla(35, 18%, 96%, 1);
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
}
}
`;

export function NavigationBar(){
  return (
    <Styles>
      <Navbar bg="royal">
        <Navbar.Brand href="#home">
          <img
            alt=""
            src={icon}
            width="60"
            height="60"
            className="d-inline-block align-top"
            />{' '}
          </Navbar.Brand>
          <Navbar.Brand className="champagne">
            Ocean Typing
          </Navbar.Brand>
        </Navbar>
      </Styles>
    );
  }
