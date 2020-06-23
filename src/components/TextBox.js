import React from 'react'
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
      input: '',
      finished: false,
      inserted: [],
      quote: ["loading", "please", "wait"],
      textEntered: false,
      finalTime: null,
      wpm: 0,
      errors: 0,
      currIdx: 0
    };
    this.handleInput = this.handleInput.bind(this);
    this.getQuote = this.getQuote.bind(this);
    this.updateColors = this.updateColors.bind(this);
    this.renderLetters = this.renderLetters.bind(this);

    this.wordRefs = [];
  }

  getQuote(){
    var temp_quote = "For the text we will create a function that fetches 45 60 random words from a list of the 200 most commonly used words in the english language. This text box has to be sized similar to input box and the font needs some oppacity so we apply full color whe a word is written".split(" ");
    this.setState({quote: temp_quote})
  }

  componentDidMount(){
    //here we make the call to a function that fetches the random words we will save an array of single words
    this.getQuote();
  }

  reset = (e) => {
    this.setState({
      input: "",
      inserted: [],
      textEntered: false,
      finished: false,
      finalTime: null,
      wpm: 0,
      errors: 0,
      currIdx: 0
    });
    // return focus to input
  }

  handleInput = (e) => {
    var input = e.target.value;
    const textEntered = input !== '';

    if(input.slice(-1) === " "){
      if(this.state.inserted.length >= this.state.quote.length){
        this.setState({finished: true});
      }
      this.setState({currIdx: this.state.currIdx + 1});
      input = ''
      e.target.value = ''
    }
    else{
      this.state.inserted.pop();
    }
    this.state.inserted.push(input);

    this.setState({ input, textEntered });
    // console.log(this.wordRefs[0]);
  }

  updateColors = () => {
    // Pseudo code:
    //
    // we have the quote list
    // we have the inserted list
    // we will iterate over inserted list stopping on whichever word is shortest
    //   on correctly typed letters we change to champagne (default will be m-red)
    //   incorrect letters will be changed to carnelian
    const idx = this.state.currIdx;
    const word = this.state.inserted[idx];
    try{
      const smallest = Math.min(word.length, this.state.quote[idx].length);
      this.wordRefs[idx].classList.remove('champagne');
      this.wordRefs[idx].classList.remove('carnelian');
      this.wordRefs[idx].innerHTML = this.state.quote[idx] + " ";

      for(var i=0; i<smallest; i++){
        // this.colorLetter(i, idx, word.charAt(i))
        var char = this.state.quote[idx].charAt(i);

        const inner = this.wordRefs[idx].innerHTML;
        const textLength = this.wordRefs[idx].innerText.length;

        if(word.charAt(i) === this.state.quote[idx].charAt(i)){
          this.wordRefs[idx].innerHTML = this.setCharAt(inner, inner.length - textLength + i, "<span class=\"champagne\">"+ char+ "</span>");
          //   this.wordRefs[idx].classList.add('champagne')
          //   this.wordRefs[idx].classList.remove('carnelian')
        }
        if(word.charAt(i) !== this.state.quote[idx].charAt(i)){
          var temp = inner.length - textLength + i;
          this.wordRefs[idx].innerHTML = this.setCharAt(inner, inner.length - textLength + i, "<span class=\"carnelian\">"+ char+ "</span>");
          // this.wordRefs[idx].classList.add('carnelian')
          // this.wordRefs[idx].classList.remove('champagne')
        }
      }
    }
    catch(err){
      return
    }
  }

  setCharAt = (str,index,chr) => {
    if(index > str.length-1) return str;
    return str.substr(0,index) + chr + str.substr(index+1);
  }

  renderLetters(){
    this.updateColors();
    return(
      <div>
        {
          this.state.quote.map((word, idx) =>
          <span id="word" ref={(ref) => {this.wordRefs[idx] = ref; return true;}}>{word} </span>
        )
      }
    </div>
  );
}

render(){
  return (
    <Styles>
      <div className="text m-red">
        {this.renderLetters()}
      </div>
      <input className=" bg-royal champagne input_area"
        placeholder="start typing here..."
        onChange={ this.handleInput }
        autoFocus={true}
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
