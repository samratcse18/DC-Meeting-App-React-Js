import React, { useEffect, useState } from "react";
import { Col, Container, Form, Row, Button } from "react-bootstrap";
import { EventInputBorder2 } from "../StyledComponents/Login.Style";

const Todo = (props) => {

  const [ToDo, setToDo] = useState(['']);

  useEffect(() => {
    if (props.data && Array.isArray(props.data) && props.data.length > 0 && props.data[0].description) {
      const tasks = props.data.map(item => item.description);
      setToDo(tasks);
    }
  }, [props.data]);
  
  

  const handleInputChangeToDo = (e,index) => {
    const { value } = e.target;
    const list = [...ToDo];
    list[index] = value;
    setToDo(list);
  };

  const handleRemoveToDo = (index) => {
    const list = [...ToDo];
    list.splice(index, 1);
    setToDo(list);
    
  };

  const handleAddClickToDo = () => {
    setToDo([...ToDo, '']);
  };

  props.getToDo(ToDo)

  return (
    <Container>
      {ToDo.map((input, index) => (
        <Row className="mb-1" key={index}>
          <Col lg={9} xs={9}>
            <Form.Group>
              <Form.Control
                type="text"
                placeholder="Add Meeting ToDo"
                value={input}
                onChange={(e) => handleInputChangeToDo(e, index)}
                // required
                style={EventInputBorder2}
                className='border-bottom'
              />
            </Form.Group>
          </Col>
          <Col lg={2} xs={2} className="d-flex gap-1">
            {ToDo.length !== 1 && (
              <Button variant="danger" onClick={() => handleRemoveToDo(index)}>✕</Button>
            )}
            {ToDo.length - 1 === index && (
              <Button variant="success" onClick={handleAddClickToDo}>+</Button>
            )}
          </Col>
        </Row>
      ))}
    </Container>
  );
};

export default Todo;
