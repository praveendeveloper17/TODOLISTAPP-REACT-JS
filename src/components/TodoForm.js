import React, {useState} from 'react'

import { Form, Button, Container, Row, Col } from 'react-bootstrap';

export const TodoForm = ({addTodo}) => {
    const [value, setValue] = useState('');

    const handleSubmit = (e) => {
      // prevent default action
        e.preventDefault();
        if (value) {
          // add todo
          addTodo(value);
          // clear form after submission
          setValue('');
        }
      };
  return (
    <Container className="my-5">
      <Row className="justify-content-center">
        <Col xs={12} sm={10} md={8} lg={12}>
          <Form onSubmit={handleSubmit} className="p-2 shadow-sm rounded bg-light">
            <Form.Group controlId="todoInput" className="mb-3">
              <Form.Control
                type="text"
                placeholder="What is the task today?"
                value={value}
                onChange={(e) => setValue(e.target.value)}
                className="todo-input"
              />
            </Form.Group>
            <Button type="submit" className="w-100" variant="primary">
              Add Task
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  )
}
