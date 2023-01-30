import React, { useEffect } from 'react'
import { Button, Card, Col, Row, Form, InputGroup } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux';
import { getAllCategory } from '../../../actions/category.actions';

const CategoryList = () => {

    const category = useSelector(state => state.category);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllCategory());
    }, []);

    const renderCategories = (categories) => {

        let myCategories = [];
        for (let category of categories) {
            myCategories.push(
                <li key={category.name}>
                    {category.name}
                    {category.children.length > 0 ? (<ul>{renderCategories(category.children)}</ul>) : null }
                </li>
            );
        }

        return myCategories;
    }

    return (
        <>
            <Card>
                <Card.Body>
                    <Row className="justify-content-end" >
                        <Col xs={4} sm={4} md={4}>
                            <InputGroup className="my-3 gap-2">
                                <Form.Control
                                    placeholder="Search Here"
                                    aria-label="Search Here"
                                    aria-describedby="basic-addon2"
                                />
                                <Button
                                    style={{ backgroundColor: '#8624DB', outline: '#8624DB' }}
                                >
                                    Search
                                </Button>
                            </InputGroup>
                        </Col>
                    </Row>
                </Card.Body>
                <Card.Body>
                    <Row>
                        <Col>
                            <ul>
                                {renderCategories(category.categories)}
                            </ul>
                        </Col>
                    </Row>
                </Card.Body>
            </Card>
        </>
    )
}

export default CategoryList