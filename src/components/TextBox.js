import React from 'react'
import styled from 'styled-components'
import randomWords from "random-words";

const Styles = styled.div`
.bg-indigo{
  background-color: #003d5bff;
}

.title{
  align-items: center;
  justify-content: center;
  font-size: calc(12px + 2vmin);
}

.seaweed{
  color: #00798c;
}

.sunray{
  color: #edae49ff;
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

.brick{
  color: #D1495B;
}

.lapis{
  color: #30638eff;
}

.text{
  align-items: center;
  justify-content: center;
  text-align: left;
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
      startTime: null,
      finalTime: null,
      wpm: 0,
      errors: [],
      currIdx: 0,
      started: false
    };
    this.handleInput = this.handleInput.bind(this);
    this.getQuote = this.getQuote.bind(this);
    this.updateColors = this.updateColors.bind(this);
    this.renderLetters = this.renderLetters.bind(this);
    this.errorCounter = this.errorCounter.bind(this);
    this.finishHandler = this.finishHandler.bind(this);

    this.wordRefs = [];
  }

  getQuote(){
    this.setState({quote: randomWords({ min: 30, max: 45 })})
  }

  componentDidMount(){
    this.getQuote();
  }

  reset = (e) => {
    this.setState({
      input: '',
      finished: false,
      inserted: [],
      textEntered: false,
      startTime: null,
      finalTime: null,
      wpm: 0,
      errors: [],
      currIdx: 0,
      started: false
    });
    // this.getQuote();
    //TODO reset function bound to a key (left ctrl maybe) resets word list without refresh
    // return focus to input
  }

  handleInput = (e) => {
    var input = e.target.value;
    const textEntered = input !== '';

    if(!this.state.started){
      this.setState({
        started: true,
        startTime: Date.now()
      })
    }

    if(input.slice(-1) === " "){
      if(this.state.inserted.length >= this.state.quote.length){
        this.setState({
          finished: true,
          started:false,
          finalTime: Date.now()
        });
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
  }

  updateColors = () => {
    const idx = this.state.currIdx;
    const word = this.state.inserted[idx];
    try{
      const smallest = Math.min(word.length, this.state.quote[idx].length);
      this.wordRefs[idx].classList.remove('lapis');
      this.wordRefs[idx].classList.remove('brick');
      this.wordRefs[idx].innerHTML = this.state.quote[idx] + " ";

      var errorsInWord = 0;

      for(var i=0; i<smallest; i++){
        var char = this.state.quote[idx].charAt(i);

        const inner = this.wordRefs[idx].innerHTML;
        var textLength = this.wordRefs[idx].innerText.length;

        if(idx === this.wordRefs.length - 1){
          textLength = textLength + 1;
        }

        if(word.charAt(i) === this.state.quote[idx].charAt(i)){
          this.wordRefs[idx].innerHTML = this.setCharAt(inner, inner.length - textLength + i, "<span class=\"sunray\">"+ char+ "</span>");
        }
        if(word.charAt(i) !== this.state.quote[idx].charAt(i)){
          this.wordRefs[idx].innerHTML = this.setCharAt(inner, inner.length - textLength + i, "<span class=\"brick\">"+ char+ "</span>");

          errorsInWord += 1;
        }
      }
      this.errorCounter(idx, errorsInWord);
    }
    catch(err){
      return
    }
  }

  errorCounter = (idx, errors) => {
    if(typeof this.state.errors[idx] === 'undefined'){
      this.state.errors.push(errors);
    }
    else{
      this.state.errors[idx] = errors;
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

calcErrors = () => {
  var result = 0;

  this.state.errors.map((n) => {
    result += n;
  });

  return result;
}

calcWpm = () => {
  const avgChPerWord = 5;
  const spaces = this.state.quote.length;
  var chars = 0;
  this.state.quote.forEach(word => {
    chars += word.length;
  });

  const totalTime = (this.state.finalTime - this.state.startTime) / 1000;

  return Math.floor(((chars + spaces) / totalTime) * 60) / avgChPerWord;
}

finishHandler(){
  if(this.state.finished){
    const errors = this.calcErrors();
    const wpm = this.calcWpm();
    this.props.onFinish(errors, wpm);
    this.reset()
  }
}

render(){
  return (
    <Styles>
      <div className="text seaweed">
        {this.renderLetters()}
        {this.finishHandler()}
      </div>
      <input className=" bg-indigo lapis input_area"
        placeholder="start typing here..."
        onChange={ this.handleInput }
        autoFocus={true}
        >
      </input>
    </Styles>
  );
}
}

// inspiration:
// https://typing.works/
// https://monkey-type.com/
