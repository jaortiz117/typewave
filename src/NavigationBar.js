import React from 'react'
import { Navbar } from 'react-bootstrap'
import styled from 'styled-components'

const Styles = styled.div`

}
`;

export function NavigationBar(){
  return (
    <Styles>
      <Navbar bg="dark" variant="dark">
    <Navbar.Brand href="#home">
      <img
        alt=""
        src="/logo.svg"
        width="30"
        height="30"
        className="d-inline-block align-top"
      />{' '}
      React Bootstrap
    </Navbar.Brand>
  </Navbar>
    </Styles>
  );
}
