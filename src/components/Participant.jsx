import React, { useEffect, useRef, useState } from "react";
import { Col, Container, Form, Row, Button } from "react-bootstrap";
import { EventInputBorder2 } from "../StyledComponents/Login.Style";
import { useLocation } from "react-router-dom";

const Participant = (props) => {

  const location = useLocation();
  
  const [participant, setparticipant] = useState([]);
  
  const hasRunRef = useRef(false); // useRef to create a mutable flag

  useEffect(() => {
    if (props.data && Array.isArray(props.data) && props.data.length > 0 && props.data[0].email) {
      const Participant = props.data.map(item => item.email);
      setparticipant(Participant);
      hasRunRef.current = true; // Update the flag once this part runs
    } else if (!hasRunRef.current) {
      const Participant = [''];
      setparticipant(Participant);
      hasRunRef.current = true; // Ensure this part runs only once after component mount
    }
  }, [props.data]);


  const handleInputChangeparticipant = (e,index) => {
    const { value } = e.target;
    const list = [...participant];
    list[index] = value;
    setparticipant(list);
  };

  const handleRemoveparticipant = (index) => {
    const list = [...participant];
    list.splice(index, 1);
    setparticipant(list);
  };

  const handleAddClickparticipant = () => {
    setparticipant([...participant, '']);
  };
  props.getparticipant(participant)





  return (
    <div>
      {participant.map((input, index) => (
        <Row className="mb-1" key={index}>
          <Col lg={9} xs={9}>
            <Form.Group>
              <Form.Control
                type="email"
                placeholder="Add Meeting participant"
                value={input}
                onChange={(e) => handleInputChangeparticipant(e, index)}
                required
                style={EventInputBorder2}
                className='border-bottom'
              />
            </Form.Group>
          </Col>
          <Col lg={2} xs={2} className="d-flex gap-1">
            {participant.length !== 1 && (
              <Button variant="danger" onClick={() => handleRemoveparticipant(index)}>✕</Button>
            )}
            {participant.length - 1 === index && (
              <Button variant="success" onClick={handleAddClickparticipant}>+</Button>
            )}
          </Col>
        </Row>
      ))}
    </div>
  );
};

export default Participant;
