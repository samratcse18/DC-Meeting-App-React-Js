import React, { useState } from "react";
import { Col, Container, Form, Row, Button } from "react-bootstrap";
import { EventInputBorder2 } from "../StyledComponents/Login.Style";

const Notes = (props) => {
  const [notes, setnotes] = useState(['']);

  const handleInputChangenotes = (e,index) => {
    const { value } = e.target;
    const list = [...notes];
    list[index] = value;
    setnotes(list);
  };

  const handleRemovenotes = (index) => {
    const list = [...notes];
    list.splice(index, 1);
    setnotes(list);
  };

  const handleAddClicknotes = () => {
    setnotes([...notes, '']);
  };
  props.getNotes(notes)
  return (
    <Container>
      {notes.map((input, index) => (
        <Row className="mb-1" key={index}>
          <Col lg={9} xs={9}>
            <Form.Group>
              <Form.Control
                type="text"
                placeholder="Add Meeting notes"
                value={input}
                onChange={(e) => handleInputChangenotes(e, index)}
                // required
                style={EventInputBorder2}
                className='border-bottom'
              />
            </Form.Group>
          </Col>
          <Col lg={2} xs={2} className="d-flex gap-1">
            {notes.length !== 1 && (
              <Button variant="danger" onClick={() => handleRemovenotes(index)}>✕</Button>
            )}
            {notes.length - 1 === index && (
              <Button variant="success" onClick={handleAddClicknotes}>+</Button>
            )}
          </Col>
        </Row>
      ))}
    </Container>
  );
};

export default Notes;
