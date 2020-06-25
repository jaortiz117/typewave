import React, { useState } from 'react';
import { ListGroup, Modal } from 'react-bootstrap';
import './Result.css'

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
      <Modal
        show={show}
        onHide={handleClose}
        dialogClassName="bg-indigo result-modal"
        >
        <Modal.Header closeButton>
          <Modal.Title>Results: </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <ListGroup variant="flush" className="bg-indigo">
            {props.items.map(({label, name, data}) =>(
              <ListGroup.Item className="list-indigo" key={name}>
                {label}: {data}
              </ListGroup.Item>
            ))}
          </ListGroup>
        </Modal.Body>
      </Modal>
    </React.Fragment>
  );
}
