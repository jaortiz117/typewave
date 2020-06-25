import React, { useState } from 'react';
import { ListGroup, Modal } from 'react-bootstrap';
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
}
`;

export function Result(props){
  const [show, setShow] = useState(true);

  const handleClose = () => {
    setShow(false);
    if(props.onClose instanceof Function){
      props.onClose();
    }
  }
  const handleShow = () => setShow(true);


  return (
    <React.Fragment>
      <Styles>
      <Modal
        dialogClassName="side-modal"
        show={show}
        onHide={handleClose}
        >
        <Modal.Header closeButton>
          <Modal.Title>Results: </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <ListGroup>
            {props.items.map(({label, name, data}) =>(
              <ListGroup.Item action variant="primary" key={name}>
                {label}: {data}
              </ListGroup.Item>
            ))}
          </ListGroup>
        </Modal.Body>
      </Modal>
      </Styles>
    </React.Fragment>
  );
}
