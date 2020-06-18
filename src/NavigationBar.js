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
}
}
`;

export function NavigationBar(){
  return (
    <Styles>
      <Navbar bg="royal">
        <Navbar.Brand href="#home" className="champagne">
          <img
            alt=""
            src={icon}
            width="30"
            height="30"
            className="d-inline-block align-top"
            />{' '}
            Ocean Typing
          </Navbar.Brand>
        </Navbar>
      </Styles>
    );
  }
