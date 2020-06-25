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
  // const [wpm, setWpm] = useState(0);
  // const [errors, setErrors] = useState(0);
  const [showResults, setShowResults] = useState(false);
  const [results, setResults] = useState(null);

  const resultToggle = () => {
    if(showResults){
      setShowResults(false);
    }
    else{
      setShowResults(true);
    }
  }

  const renderResults = () => {
    if(!showResults){
      return null;
    }

    return (
      <Result items={results} onClose={resultToggle}/>
    );
  }

  const handleResult = (errors, wpm) => {
    const items = [
      {name: "wpm", label: "WPM", data: wpm},
      {name: "errors", label: "Mistakes", data: errors}
    ];

    setResults(items);
    console.log(items);
    console.log(results);
    resultToggle();
  }

  return (
    <Styles>
      {renderResults()}
      <div className="title">
        Relax while typing.
      </div>
      <div className="centerblock">
        <TextBox onFinish={handleResult}/>
      </div>
    </Styles>
  );
}
