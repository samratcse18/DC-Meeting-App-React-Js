import React, { useEffect, useState } from 'react';
import { Form, Button, ListGroup, InputGroup } from 'react-bootstrap';
import { EventInputBorder2 } from '../StyledComponents/Login.Style';

const BlockerNew = (props) => {

    if (props.data) {
        var formattedBlockers = props.data.map(data => ({
            description: data.description,
            is_resolved: data.is_resolved
        }));
    }

  const [blockers, setblockers] = useState([]);
  const [newblocker, setNewblocker] = useState('');
  const [editingIndex, setEditingIndex] = useState(null);
  const [editingText, setEditingText] = useState('');
  const [initialized, setInitialized] = useState(false);

  

  useEffect(() => {
    if (!initialized && props.data && Array.isArray(props.data) && props.data.length > 0 && props.data[0].description) {
      const formattedBlocker = props.data.map(data => ({
        description: data.description,
        is_resolved: data.is_resolved
      }));
      setblockers(formattedBlocker);
      setInitialized(true)
    }
  }, [props.data, initialized]);

  const handleAddblocker = () => {
    if (newblocker.trim()) {
      setblockers([...blockers, { description: newblocker, is_resolved: false }]);
      setNewblocker('');
    }
  };

  const handleDeleteblocker = (index) => {
    setblockers(blockers.filter((_, i) => i !== index));
  };

  const handleToggleComplete = (index) => {
    setblockers(blockers.map((blocker, i) => i === index ? { ...blocker, is_resolved: !blocker.is_resolved } : blocker));
  };

  const handleEditblocker = (index) => {
    setEditingIndex(index);
    setEditingText(blockers[index].description);
  };

  const handleSaveEdit = (index) => {
    setblockers(blockers.map((blocker, i) => i === index ? { ...blocker, description: editingText } : blocker));
    setEditingIndex(null);
    setEditingText('');
  };

  props.getBlocker(blockers);

  return (
        <div>
          <Form.Group controlId="formTags">
                <InputGroup>
                <Form.Control
                    type="text"
                    placeholder="Add Meeting To-Do"
                    value={newblocker}
                    onChange={(e) => setNewblocker(e.target.value)}
                    style={EventInputBorder2}
                />
                <Button variant="success" style={{ color: 'white' }} onClick={handleAddblocker}>
                    ✓
                </Button>
                </InputGroup>
          </Form.Group>
          <ListGroup className="mt-3">
            {blockers.map((blocker, index) => (
              <ListGroup.Item key={index} variant={blocker.is_resolved ? "success" : ""}>
                <InputGroup>
                  <Form.Check
                    type="checkbox"
                    checked={blocker.is_resolved}
                    onChange={() => handleToggleComplete(index)}
                    inline
                  />
                  {editingIndex === index ? (
                    <Form.Control
                      type="text"
                      value={editingText}
                      onChange={(e) => setEditingText(e.target.value)}
                    />
                  ) : (
                    <span style={{ textDecoration: blocker.is_resolved ? 'line-through' : 'none',marginRight:'10px' }}>
                      {blocker.description}
                    </span>
                  )}
                  {editingIndex === index ? (
                    <Button
                      variant="success"
                      size="sm"
                      className="ml-2"
                      onClick={() => handleSaveEdit(index)}
                    >
                      ✓
                    </Button>
                  ) : (
                    <Button
                      variant="warning"
                      size="sm"
                      className="ml-2"
                      onClick={() => handleEditblocker(index)}
                    >
                      Edit
                    </Button>
                  )}
                  <Button
                    variant="danger"
                    size="sm"
                    className="ml-2"
                    onClick={() => handleDeleteblocker(index)}
                  >
                    Delete
                  </Button>
                </InputGroup>
              </ListGroup.Item>
            ))}
          </ListGroup>
        </div>
  );
};

export default BlockerNew;
