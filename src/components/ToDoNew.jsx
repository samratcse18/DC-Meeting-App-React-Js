import React, { useEffect, useState } from 'react';
import { Form, Button, ListGroup, InputGroup } from 'react-bootstrap';
import { EventInputBorder2 } from '../StyledComponents/Login.Style';

const ToDoNew = (props) => {

    if (props.data) {
      var formattedTodos = props.data.map(data => ({
          description: data.description,
          is_completed: data.is_completed
      }));
    }

  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');
  const [editingIndex, setEditingIndex] = useState(null);
  const [editingText, setEditingText] = useState('');
  const [initialized, setInitialized] = useState(false);


  useEffect(() => {
    if (!initialized && props.data && Array.isArray(props.data) && props.data.length > 0 && props.data[0].description) {
      const formattedTodo = props.data.map(data => ({
        description: data.description,
        is_completed: data.is_completed
      }));
      setTasks(formattedTodo);
      setInitialized(true)
    }
  }, [props.data, initialized]);

  const handleAddTask = () => {
    if (newTask.trim()) {
      setTasks([...tasks, { description: newTask, is_completed: false }]);
      setNewTask('');
    }
  };

  const handleDeleteTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  const handleToggleComplete = (index) => {
    setTasks(tasks.map((task, i) => i === index ? { ...task, is_completed: !task.is_completed } : task));
  };

  const handleEditTask = (index) => {
    setEditingIndex(index);
    setEditingText(tasks[index].description);
  };

  const handleSaveEdit = (index) => {
    setTasks(tasks.map((task, i) => i === index ? { ...task, description: editingText } : task));
    setEditingIndex(null);
    setEditingText('');
  };

  props.getToDo(tasks);

  return (
        <div>
          <Form.Group controlId="formTags">
                <InputGroup>
                <Form.Control
                    type="text"
                    placeholder="Add Meeting To-Do"
                    value={newTask}
                    onChange={(e) => setNewTask(e.target.value)}
                    style={EventInputBorder2}
                />
                <Button variant="success" style={{ color: 'white' }} onClick={handleAddTask}>
                    ✓
                </Button>
                </InputGroup>
          </Form.Group>
          <ListGroup className="mt-3">
            {tasks.map((task, index) => (
              <ListGroup.Item key={index} variant={task.is_completed ? "success" : ""}>
                <InputGroup>
                  <Form.Check
                    type="checkbox"
                    checked={task.is_completed}
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
                    <span style={{ textDecoration: task.is_completed ? 'line-through' : 'none',marginRight:'10px' }}>
                      {task.description}
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
                      onClick={() => handleEditTask(index)}
                    >
                      Edit
                    </Button>
                  )}
                  <Button
                    variant="danger"
                    size="sm"
                    className="ml-2"
                    onClick={() => handleDeleteTask(index)}
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

export default ToDoNew;
