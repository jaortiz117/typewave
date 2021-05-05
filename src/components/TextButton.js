import React, { useState } from 'react';
import { Tooltip, OverlayTrigger, Button } from 'react-bootstrap'

// .seaweed{
//   color: #00798c;
// }
//
// .sunray{
//   color: #edae49ff;
// }
//
// .correct-letter{
//   color: #6AEBFF;
// }
//
// .brick{
//   color: #D1495B;
// }
//
// .lapis{
//   color: #30638eff;
// }

export function TextButton(props){
  const [color, setColor] = useState("#30638eff");

  const textColor = {
    color: `${color}`,
    background: '#003d5bff',
    border: '#003d5bff'
  };

  return (
    <React.Fragment>
      {console.log(props)}
      <OverlayTrigger
        placement = "bottom"
        delay = {{ show: 100, hide: 400 }}
        overlay = {
          <Tooltip id='toolTip'>
            {props.tooltip}
          </Tooltip>
        }
        >
        <Button
          onClick = {props.onClick}
          style = {textColor}
          onMouseEnter = {() => setColor("#edae49ff")}
          onMouseLeave = {() => setColor("#30638eff")}
          onFocus = {() => setColor("#edae49ff")}
          onBlur = {() => setColor("#30638eff")}
          >
          {props.renderable}
        </Button>
      </OverlayTrigger>
    </React.Fragment>
  );
}
