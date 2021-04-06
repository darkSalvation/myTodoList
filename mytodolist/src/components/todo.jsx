import React, { useState } from 'react'
import { ListGroup, ListGroupItem, Form, FormGroup, Label, Input, Col, Button, Container, Check } from 'reactstrap';

const TodoComponent = (props) => {
    const [todos, setTodos] = useState([{ title: 'test 1' }]);
    const [itemName, setItemName] = useState('');

    const addItem = e => {
        e.preventDefault();
        setTodos([
            ...todos,
            {
                id: todos.length,
                title: itemName
            }
        ]);
        setItemName("")
    }



    return (
        <div>
            <Container>
                <Form>
                    <FormGroup>
                        <ListGroup>
                            {todos.map((item) => (
                                <ListGroupItem>{item.title}</ListGroupItem>
                            ))}
                        </ListGroup>
                    </FormGroup>
                    <FormGroup row>
                        <Col md={10}>
                            <Input name='item' type='text' placeholder='Input todo here' value={itemName} onChange={(e) => setItemName(e.target.value)}></Input>
                        </Col>
                        <Col>
                            <Button block onClick={(e) => addItem(e)}> Submit</Button>
                        </Col>
                    </FormGroup>
                </Form>
            </Container>
        </div>
    )
}

export default TodoComponent;