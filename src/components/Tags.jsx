import React, { useEffect, useState } from 'react';
import { Form, Button, Badge, InputGroup } from 'react-bootstrap';
import { EventInputBorder2 } from '../StyledComponents/Login.Style';

const Tags = (props) => {
  const [tags, setTags] = useState([]);
  const [inputValue, setInputValue] = useState('');

  useEffect(() => {
    if (props.data && Array.isArray(props.data) && props.data.length > 0 && props.data[0].name) {
      const Tags = props.data.map(item => item.name);
      setTags(Tags);
    }
  }, [props.data]);


  const handleAddTag = () => {
    if (inputValue.trim() !== '' && !tags.includes(inputValue.trim())) {
      const newTags = [...tags, inputValue.trim()];
      setTags(newTags);
      setInputValue(['']);
    }
  };

  const handleRemoveTag = (tagToRemove) => {
    const updatedTags = tags.filter(tag => tag !== tagToRemove);
    setTags(updatedTags);
  };

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      handleAddTag();
    }
  };

  props.getTag(tags);

  return (
    <div>
      <Form.Group controlId="formTags">
        <InputGroup>
          <Form.Control
            type="text"
            placeholder="Add Meeting Tag"
            value={inputValue}
            onChange={handleInputChange}
            onKeyPress={handleKeyPress}
            style={EventInputBorder2}
          />
          <Button variant="success" style={{ color: 'white' }} onClick={handleAddTag}>
            ✓
          </Button>
        </InputGroup>
      </Form.Group>
      <div style={{ marginTop: '10px' }}>
        {tags.map((tag, index) => (
          <Badge
            key={index}
            className="bg-light"
            style={{ border: '1px solid #49454F33', margin: '5px', cursor: 'pointer', padding: '9px 8px', borderRadius: '4px' }}
          >
            <span style={{ color: '#3C4043', fontFamily: 'Graphik', fontWeight: '400', fontSize: '12px', lineHeight: '16px' }}>{tag}</span>
            <span style={{ color: 'red', marginLeft: '5px' }} onClick={() => handleRemoveTag(tag)}>✕</span>
          </Badge>
        ))}
      </div>
    </div>
  );
};

export default Tags;
