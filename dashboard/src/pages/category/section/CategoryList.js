import React, { useEffect, useState } from 'react'
import { Button, Card, Col, Row, Form, Modal } from 'react-bootstrap'
import { CFormInput, CFormSelect } from '@coreui/react';
import { useDispatch, useSelector } from 'react-redux';
import { addCategory, getAllCategory, updateCategories, deleteCategories as deleteCategoriesAction } from '../../../actions/category.actions';
import CheckboxTree from 'react-checkbox-tree';
import 'react-checkbox-tree/lib/react-checkbox-tree.css';
import { IoCheckboxOutline, IoCheckboxSharp, IoCheckbox, IoChevronDownCircle, IoChevronForwardCircleSharp } from "react-icons/io5";
// import UpdateCategoryModal from '../modal/UpdateCategoryModal';
import CategoryModal from '../modal/CategoryModal'

const CategoryList = () => {

    const category = useSelector(state => state.category);
    const dispatch = useDispatch();
    //modal
    const [openUpdateCategory, setOpenUpdateCategory] = useState(false)
    const [openDeleteCategory, setOpenDeleteCategory] = useState(false)

    //checkbox-tree
    const [checked, setChecked] = useState([]);
    const [expanded, setExpanded] = useState([]);
    const [checkedArray, setCheckedArray] = useState([]);
    const [expandedArray, setExpandedArray] = useState([]);

    //action to get all category
    useEffect(() => {
        dispatch(getAllCategory());
    }, []);


    const handleCategoryInput = (key, value, index, type) => {
        if (type == "checked") {
            const updatedCheckedArray = checkedArray.map((item, _index) => index == _index ? { ...item, [key]: value } : item);
            setCheckedArray(updatedCheckedArray);
        } else if (type == "expanded") {
            const updatedExpandedArray = expandedArray.map((item, _index) => index == _index ? { ...item, [key]: value } : item);
            setExpandedArray(updatedExpandedArray);
        }
    }

    const handleUpdateCategory = () => {
        updateCheckedAndExpandedCategories();
        setOpenUpdateCategory(true)
    }

    const updateCheckedAndExpandedCategories = () => {
        const categories = createCategoryList(category.categories);

        const checkedArray = [];
        const expandedArray = [];

        checked.length > 0 && checked.forEach((categoryId, index) => {
            const category = categories.find((category, _index) => categoryId == category.value)
            category && checkedArray.push(category)
        })
        expanded.length > 0 && expanded.forEach((categoryId, index) => {
            const category = categories.find((category, _index) => categoryId == category.value)
            category && expandedArray.push(category)
        })
        setCheckedArray(checkedArray);
        setExpandedArray(expandedArray);
    }

    const renderCategories = (categories) => {

        let myCategories = [];
        for (let category of categories) {
            myCategories.push(
                {
                    label: category.name,
                    value: category._id,
                    children: category.children.length > 0 && renderCategories(category.children)
                }
                // <li key={category.name}>
                //     {category.name}
                //     {category.children.length > 0 ? (<ul>{renderCategories(category.children)}</ul>) : null }
                // </li>
            );
        }
        return myCategories;
    }

    const createCategoryList = (categories, options = []) => {

        for (let category of categories) {
            options.push({ value: category._id, name: category.name, parentId: category.parentId });
            if (category.children.length > 0) {
                createCategoryList(category.children, options)
            }
        }

        return options;
    }


    //add category modal
    const [openCategoryModal, setOpenCategoryModal] = useState(false)
    const handleModal = () => {
        setOpenCategoryModal(true)
    }

    //update category form
    const updateCategoriesForm = () => {
        const form = new FormData();

        expandedArray.forEach((item, index) => {
            form.append('_id', item.value);
            form.append('name', item.name);
            form.append('parentId', item.parentId ? item.parentId : "");
            form.append('type', item.type);
        });
        checkedArray.forEach((item, index) => {
            form.append('_id', item.value);
            form.append('name', item.name);
            form.append('parentId', item.parentId ? item.parentId : "");
            form.append('type', item.type);
        });
        dispatch(updateCategories(form))       
        setOpenUpdateCategory(false)
    }

    //Delete
    const deleteCategory = () => {
        updateCheckedAndExpandedCategories();
        setOpenDeleteCategory(true);
    };

    const deleteCategories = () => {
        const checkedIdsArray = checkedArray.map((item, index) => ({ _id: item.value }));
        const expandedIdsArray = expandedArray.map((item, index) => ({ _id: item.value }));
        const idsArray = expandedIdsArray.concat(checkedIdsArray);

        if (checkedIdsArray.length > 0) {
            dispatch(deleteCategoriesAction(checkedIdsArray))
                .then(result => {
                    if (result) {
                        dispatch(getAllCategory())
                    }
                })
        }
        setOpenDeleteCategory(false);
        window.location.reload();
    }


    const renderDeleteCategory = () => {
        return (
            <Modal
                show={openDeleteCategory}
                onHide={() => setOpenDeleteCategory(false)}
                size="md"
                centered={true}
            >
                <Modal.Header className="justify-content-center" closeButton>
                    <Modal.Title className='fs-5'>
                        Delete Category ?
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <h4>Expanded</h4>
                    {expandedArray.map((item, index) => <span key={index}>{item.name}</span>)}
                    <h4>Checked</h4>
                    {checkedArray.map((item, index) => <span key={index}>{item.name}</span>)}
                </Modal.Body>
                <Modal.Footer>
                    <Button
                        type="button"
                        className="btn btn-outline-warning d-flex align-items-center text-white bg-warning"
                        style={{ height: '3rem' }}
                        onClick={() => setOpenDeleteCategory(false)}
                    >
                        Cancel
                    </Button>
                    <Button
                        type="button"
                        className="btn btn-outline-danger d-flex align-items-center text-white bg-danger"
                        style={{ height: '3rem' }}
                        onClick={deleteCategories}
                    >
                        Delete
                    </Button>

                </Modal.Footer>
            </Modal>
        )
    };

    //updatemodal
    const renderUpdateCategoriesModal = () => {
        return (
            <Modal
                show={openUpdateCategory}
                onHide={() => setOpenUpdateCategory(false)}
                size="md"
                centered={true}
            >
                <Modal.Header className="justify-content-center" closeButton>
                    <Modal.Title className='fs-5'>
                        Update Category
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Row>
                            <Col>
                                <h5>Expanded Category</h5>
                            </Col>
                        </Row>
                        {
                            expandedArray.length > 0 &&
                            expandedArray.map((item, index) =>
                                <Row key={index}>
                                    <Col>
                                        <CFormInput
                                            type="text"
                                            id="floatingInputExpanded"
                                            floatingClassName="mb-3"
                                            floatingLabel="Category name *"
                                            placeholder="Category name "
                                            value={item.name}
                                            onChange={(e) => handleCategoryInput('name', e.target.value, index, 'expanded')}
                                        />
                                    </Col>

                                    <Col>
                                        <CFormSelect
                                            aria-label="Default select example"
                                            className='form-control mb-3'
                                            value={item.parentId}
                                            onChange={(e) => handleCategoryInput('parentId', e.target.value, index, 'expanded')}
                                        >
                                            <option>Select Category </option>
                                            {
                                                createCategoryList(category.categories).map(option =>
                                                    <option key={option.value} value={option.value}>{option.name}</option>)
                                            }
                                        </CFormSelect>
                                    </Col>
                                </Row>
                            )
                        }
                        <Row>
                            <Col>
                                <h5>Checked Category</h5>
                            </Col>
                        </Row>
                        {
                            checkedArray.length > 0 &&
                            checkedArray.map((item, index) =>
                                <Row key={index}>
                                    <Col>
                                        <CFormInput
                                            type="text"
                                            id="floatingInputChecked"
                                            floatingClassName="mb-3"
                                            floatingLabel="Category name *"
                                            placeholder="Category name "
                                            value={item.name}
                                            onChange={(e) => handleCategoryInput('name', e.target.value, index, 'checked')}
                                        />
                                    </Col>

                                    <Col>
                                        <CFormSelect
                                            aria-label="Default select example"
                                            className='form-control mb-3'
                                            value={item.parentId}
                                            onChange={(e) => handleCategoryInput('parentId', e.target.value, index, 'checked')}
                                        >
                                            <option>Select Category </option>
                                            {
                                                createCategoryList(category.categories).map(option =>
                                                    <option key={option.value} value={option.value}>{option.name}</option>)
                                            }
                                        </CFormSelect>
                                    </Col>
                                </Row>
                            )
                        }
                        <Button variant="primary" onClick={updateCategoriesForm}
                            className="px-4 btn d-flex align-items-center justify-content-center text-white w-100 rounded-1"
                            style={{ height: '3rem', backgroundColor: '#8624DB' }}
                        >
                            Update Category
                        </Button>
                    </Form>
                </Modal.Body>
            </Modal>
        )
    }
    return (
        <>
            <Card>
                <Card.Body>
                    <Row className="justify-content-end" xs={{ cols: 1 }} sm={{ cols: 1 }} md={{ cols: 2 }}>
                        <Col>
                            <div className="d-inline-flex w-100 justify-content-end align-items-center mb-1 gap-3">
                                <Button
                                    type="button"
                                    className="btn btn-outline-success d-flex align-items-center text-white bg-success"
                                    style={{ height: '3rem' }}
                                    onClick={handleModal}
                                >
                                    Add Category
                                </Button>
                                <Button
                                    type="button"
                                    className="btn btn-outline-warning d-flex align-items-center text-white bg-warning"
                                    style={{ height: '3rem' }}
                                    onClick={handleUpdateCategory}
                                >
                                    Edit Category
                                </Button>
                                <Button
                                    type="button"
                                    className="btn btn-outline-danger d-flex align-items-center text-white bg-danger"
                                    style={{ height: '3rem' }}
                                    onClick={deleteCategory}
                                >
                                    Delete Category
                                </Button>
                            </div>
                        </Col>
                    </Row>
                </Card.Body>
                <Card.Body>
                    <Row>
                        <Col md={12}>
                            {/* <ul>
                                {renderCategories(category.categories)}
                            </ul> */}

                            <CheckboxTree
                                nodes={renderCategories(category.categories)}
                                checked={checked}
                                expanded={expanded}
                                onCheck={checked => setChecked(checked)}
                                onExpand={expanded => setExpanded(expanded)}
                                icons={{
                                    check: <IoCheckboxSharp />,
                                    uncheck: <IoCheckboxOutline />,
                                    halfCheck: <IoCheckbox />,
                                    expandClose: <IoChevronForwardCircleSharp />,
                                    expandOpen: <IoChevronDownCircle />,
                                }}
                            />

                        </Col>
                    </Row>
                </Card.Body>
            </Card>
            {
                renderUpdateCategoriesModal()
            }
            {
                renderDeleteCategory()
            }
            <CategoryModal visibility={{ show: openCategoryModal, setShow: setOpenCategoryModal }} />
            {/* <UpdateCategoryModal
                show={openUpdateCategory}
                onHide={() => setOpenUpdateCategory(false)}
                size="md"
                centered={true}
                expandedArray={expandedArray}
                checkedArray={checkedArray}
                handleCategoryInput={handleCategoryInput}
                createCategoryList={createCategoryList(category.categories)}
                updateCategoriesForm={updateCategoriesForm}
            /> */}
        </>
    )
}

export default CategoryList