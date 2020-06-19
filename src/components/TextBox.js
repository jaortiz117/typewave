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

.carnelian{
  color: hsla(0, 84%, 74%, 1);
}

.m-red{
  color: hsla(10, 47%, 85%, 1);
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
  constructor(props) {
    super(props);
    this.state = {
      quote: ''
    };
    this.handleInput = this.handleInput.bind(this);
    this.getQuote = this.getQuote.bind(this);
    this.updateColors = this.updateColors.bind(this);
  }

  getQuote(){
    this.setState({quote: "Text. For the text we will create a function that fetches 45 - 60 random words from a list of the 200 most commonly used words in the english language. This text box has to be sized similar to input box and the font needs some oppacity so we apply full color whe a word is written"})
  }

  componentDidMount(){
    //here we make the call to a function that fetches the random words we will save an array of single words
    this.getQuote();
  }
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
    console.log(input + " | "+ "last input: " + input.slice(-1))//we are seeing the last character and all characters
    let finished = false;

    // if (this.state.quote === input) {
    //   finished = true;
    // }

    // this.isCorrectSoFar();
    // this.setState({ input, textEntered, finished });
  }

  updateColors = () => {
    return (
      <div>
        {this.state.quote} <span className="carnelian">o</span>
    </div>
  );
  // Pseudo code:
  //
  // we have the quote list
  // we have the correctSoFar list
  // we will iterate over correctSoFar list
  //   on correctly typed letters we change to champagne (default will be m-red)
  //   incorrect letters will be changed to carnelion

  // to change these letters we will do: replace(letter, '<span class="carnelion">o</span>');

  //   //function to be used to color quote text depending on status
  //   let statusClass = "is-white";
  //
  //   if (this.state.textEntered && this.state.isCorrectSoFar) {
  //     statusClass = "is-primary";
  //   } else if (this.state.textEntered && !this.state.isCorrectSoFar) {
  //     statusClass = "is-danger";
  //   }
  //
  //   this.setState({ statusClass });//we have to change this to work letter by letter
}

correctSoFar = () => {
  //pseudo code:
  // have quote be a list of words
  // each of the inserted words gets inserted into a list
  // we compare all the entries of each list directly until inserted.length - 1

  // we just have to really check the last entry in inserted tho, all the previous entries have already been checked
  // so what we should do is, instead of checking all entries until inserted.length - 1
  // we only have to compare the strings in inserted.length - 1 and quote[inserted.length - 1]
  // We need to make sure that we append into inserted on spacebar hit

  // the isCorrectSoFar object shall contain a list of tuples. left is idx within quote, right is set of indexes with errors (the letters with errors)
  // this value will be used by update colors method
  const isCorrectSoFar = this.state.quote.includes(this.state.input);
  console.log(isCorrectSoFar)
  this.setState({isCorrectSoFar})
}
render(){
  return (
    <Styles>
      <div className="text champagne">
        {this.updateColors()}
        {/*this.state.quote*/}
      </div>
      <input className=" bg-royal champagne input_area"
        placeholder="start typing here..."
        onChange={ this.handleInput }
        autoFocus={true}
        disabled={this.props.disabled}
        >
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
