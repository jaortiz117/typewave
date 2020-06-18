import React from 'react'
import { Navbar } from 'react-bootstrap'
import styled from 'styled-components'

const Styles = styled.div`
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

.input_area {
  height: 80px;
  width: 40%;
  font-size: 1.5rem;
  font-weight: 600;
  margin: 15px;
  padding: 20px;
  border: 0px;
  box-shadow: black 5px 8px 5px;
}

.text{
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  margin: 10px;
  padding: 25px;
}
}
`;

export class TextBox extends React.Component{
  reset = (e) => {
    this.setState({
      input: "",
      textEntered: false,
      finished: false,
      finalTime: null,
      wpm: 0,
      statusClass: ""
    });
    // return focus to input
  }

  handleInput = (e) => {
    const input = e.target.value;
    const textEntered = input !== '';
    let finished = false;

    if (this.state.quote === input) {
      finished = true;
    }

    this.isCorrectSoFar();
    this.setState({ input, textEntered, finished });
    this.updateStatusClass()
  }

  isCorrectSoFar = () => {
    const isCorrectSoFar = this.state.quote.includes(this.state.input);
    console.log(isCorrectSoFar)
    this.setState({isCorrectSoFar})
  }
  render(){
    return (
      <Styles>
        <div className="text champagne">
          Text. For the text we will create a function that fetches 45 - 60 random words from a list of the 200 most commonly used words in the english language. This text box has to be sized similar to input box and the font needs some oppacity so we apply full color whe a word is written
        </div>
        <input class=" bg-royal champagne input_area"
          placeholder="start typing here..."
          onChange={ this.props.handleInput }
          autoFocus={true}
          disabled={this.props.disabled}
          value={this.props.input}>
        </input>
      </Styles>
    );
  }
}


// we can use this as guide https://www.geeksforgeeks.org/design-a-typing-speed-test-game-using-javascript/
// other possible sources:
// https://github.com/DanOswalt/react-typing-test-app/blob/master/src/App.js
//
// inspiration:
// https://typing.works/
// https://monkey-type.com/
//TODO
//
// basically we need the following:
// - the text is a rand set of the 200 most commonly used words
// - the functions are probably better off within the TextBox file
// - we need to check the text box onchange for the text box
//   - we color the wrong characters red (simple string compare and change color at idx)
//   - when user is done with word (spacebar) we skip to next word (reset box)
// - we reset the text box after every word
//   - clear the text box
//   - if word is wrong color red, if correct color properly
// - when the user starts typing we start the timer.
// - when timer reaches 0 we return the result modal
