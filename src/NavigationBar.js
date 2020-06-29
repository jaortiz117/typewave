import React from 'react'
import { Navbar } from 'react-bootstrap'
import styled from 'styled-components'
import { ReactComponent as GithubSvg } from 'simple-icons/icons/github.svg'
// import github from 'simple-icons/icons/github.svg';

import icon from './temp_logo.png';

const Styles = styled.div`
.bg-indigo{
  background-color: #003d5bff;
}

.nav-title{
  color: white;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
}

.svg{
  fill: white;
  height: 40px;
  width: 40px;
}
}
`;

export function NavigationBar(){
  return (
    <Styles>
      <Navbar bg="indigo">
        <Navbar.Brand href="#home">
          <img
            alt=""
            src={icon}
            width="60"
            height="60"
            className="d-inline-block align-top"
            />{' '}
          </Navbar.Brand>
          <Navbar.Brand className="nav-title">
            Ocean Typing
          </Navbar.Brand>
          <Navbar.Brand
            href="https://github.com/jaortiz117/typing-test-pwa"
            className="ml-auto">
            <GithubSvg className='svg' />
            </Navbar.Brand>
          </Navbar>
        </Styles>
      );
    }
