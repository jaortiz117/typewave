import React from 'react'
import { Navbar } from 'react-bootstrap'
import styled from 'styled-components'

import { TextBox } from './components/TextBox'
import { Result } from './components/Result'

const Styles = styled.div`
text-align: center;

.bg-royal{
  background-color: hsla(227, 74%, 35%, 1);
}

.title{
  align-items: center;
  justify-content: center;
  font-size: calc(12px + 2vmin);
}

.champagne{
  color: hsla(35, 18%, 96%, 1);
}

.carnelian{
  color: hsla(0, 84%, 74%, 1);
}

.centerblock{
  max-width: 1000px;
  min-width: 600px;
  margin: 0 auto;
  align-items: center;
}
}
`;

export function Home(){
  return (
    <Styles>
      <div className="title carnelian">
        Relax while typing.
      </div>
      <div className="centerblock">
        <TextBox />
      </div>
    </Styles>
  );
}
