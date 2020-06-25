import React, { useState } from 'react'
import { Navbar } from 'react-bootstrap'
import styled from 'styled-components'

import { TextBox } from './components/TextBox'
import { Result } from './components/Result'

const Styles = styled.div`
text-align: center;

.bg-indigo{
  background-color: #003d5bff;
}

.title{
  align-items: center;
  justify-content: center;
  font-size: calc(12px + 2vmin);
}

.brick{
  color: #D1495B;
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
  const [wpm, setWpm] = useState(0);
  const [errors, setErrors] = useState(0);

  const items = [
    {name: "wpm", label: "WPM", data: "123"},
    {name: "errors", label: "Mistakes", data: "3"}
  ];

  const handleResult = (errors, wpm) => {
    setWpm(wpm);
    setErrors(errors);
  }

  return (
    <Styles>
      <Result items={items}/>
      <div className="title">
        Relax while typing.
      </div>
      <div className="centerblock">
        <TextBox onFinish={handleResult}/>
      </div>
    </Styles>
  );
}
