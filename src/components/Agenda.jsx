import React, { useState } from "react";
import { Col, Container, Form, Row, Button } from "react-bootstrap";
import { EventInputBorder2 } from "../StyledComponents/Login.Style";

const Agenda = (props) => {
  const [Agenda, setAgenda] = useState(['']);

  const handleInputChangeAgenda = (e,index) => {
    const { value } = e.target;
    const list = [...Agenda];
    list[index] = value;
    setAgenda(list);
  };

  const handleRemoveAgenda = (index) => {
    const list = [...Agenda];
    list.splice(index, 1);
    setAgenda(list);
  };

  const handleAddClickAgenda = () => {
    setAgenda([...Agenda, '']);
  };
  props.getAgenda(Agenda)
  return (
    <Container>
      {Agenda.map((input, index) => (
        <Row className="mb-1" key={index}>
          <Col lg={9} xs={9}>
            <Form.Group>
              <Form.Control
                type="text"
                placeholder="Add Meeting Agenda"
                value={input}
                onChange={(e) => handleInputChangeAgenda(e, index)}
                required
                style={EventInputBorder2}
                className='border-bottom'
              />
            </Form.Group>
          </Col>
          <Col lg={2} xs={2} className="d-flex gap-1">
            {Agenda.length !== 1 && (
              <Button variant="danger" onClick={() => handleRemoveAgenda(index)}>✕</Button>
            )}
            {Agenda.length - 1 === index && (
              <Button variant="success" onClick={handleAddClickAgenda}>+</Button>
            )}
          </Col>
        </Row>
      ))}
    </Container>
  );
};

export default Agenda;
