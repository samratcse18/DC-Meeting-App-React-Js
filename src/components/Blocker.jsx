import React, { useEffect, useRef, useState } from "react";
import { Col, Container, Form, Row, Button } from "react-bootstrap";
import { EventInputBorder2 } from "../StyledComponents/Login.Style";

const Blocker = (props) => {
  
  const [blocker, setblocker] = useState([]);
  const hasRunRef = useRef(false); 

  useEffect(() => {
    if (props.data && Array.isArray(props.data) && props.data.length > 0 && props.data[0].description) {
      const Blocker = props.data.map(item => item.description);
      setblocker(Blocker);
      hasRunRef.current = true; 
    } else if (!hasRunRef.current) {
      const Blocker = [''];
      setblocker(Blocker);
      hasRunRef.current = true; 
    }
  }, [props.data]);

  

  const handleInputChangeblocker = (e,index) => {
    const { value } = e.target;
    const list = [...blocker];
    list[index] = value;
    setblocker(list);
  };
  const handleRemoveblocker = (index) => {
    const list = [...blocker];
    list.splice(index, 1);
    setblocker(list);
  };

  const handleAddClickblocker = () => {
    setblocker([...blocker, '']);
  };
  props.getBlocker(blocker)
  return (
    <Container>
      {blocker.map((input, index) => (
        <Row className="mb-1" key={index}>
          <Col lg={9} xs={9}>
            <Form.Group>
              <Form.Control
                type="text"
                placeholder="Add Meeting Blocker"
                value={input}
                onChange={(e) => handleInputChangeblocker(e, index)}
                // required
                style={EventInputBorder2}
                className='border-bottom'
              />
            </Form.Group>
          </Col>
          <Col lg={2} xs={2} className="d-flex gap-1">
            {blocker.length !== 1 && (
              <Button variant="danger" onClick={() => handleRemoveblocker(index)}>✕</Button>
            )}
            {blocker.length - 1 === index && (
              <Button variant="success" onClick={handleAddClickblocker}>+</Button>
            )}
          </Col>
        </Row>
      ))}
    </Container>
  );
};

export default Blocker;
