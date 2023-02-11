import { MDBRow, MDBCol, MDBInputGroup } from 'mdb-react-ui-kit'
import React, { useEffect } from 'react'
import Form from 'react-bootstrap/Form';
import { useDispatch, useSelector } from 'react-redux';
import { getAllCategory } from '../../../actions/category.actions';

const ShopTitle = () => {

    const category = useSelector(state => state.category);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllCategory());
    }, []);

    const createCategoryList = (categories, options = []) => {

        for (let category of categories) {
            options.push({ value: category._id, name: category.name });
            if (category.children.length > 0) {
                createCategoryList(category.children, options)
            }
        }

        return options;
    }

    // const renderCategories = (categories) => {

    //     let myCategories = [];
    //     for (let Category of categories) {
    //         myCategories.push(
    //             <li key={category.name}>
    //                 {category.name}
    //                 {category.children.length > 0 ? (<ul>{renderCategories(category.children)}</ul>) : null}
    //             </li>
    //         )
    //     }

    //     return myCategories;
    // }
    return (
        <>
            <MDBRow>
                <MDBCol className='d-flex gap-5 mx-5'>
                    <Form.Select
                        size="sm"
                        style={{ height: '35px' }}
                    >
                        <option>Select Category</option>
                        {
                            createCategoryList(category.categories).map(option =>
                                <option key={option.value} value={option.value}>{option.name}</option>)
                        }
                    </Form.Select>

                    <Form.Select
                        size="sm"
                        style={{ height: '35px' }}
                    >
                        <option>Sort By</option>
                        <option value="Accending">Accending</option>
                        <option value="Descending">Descending</option>
                    </Form.Select>
                </MDBCol>

                <MDBCol className='d-flex justify-content-end mx-5'>
                    <MDBInputGroup className='mb-3 w-50' noBorder >
                        <input className='form-control' type='text' placeholder='Search' />
                    </MDBInputGroup>
                </MDBCol>
            </MDBRow>
        </>
    )
}

export default ShopTitle