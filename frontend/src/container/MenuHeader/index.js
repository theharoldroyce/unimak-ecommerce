import React, { useEffect } from 'react';
import './style.css';
import { useSelector, useDispatch } from 'react-redux';
import { getAllCategory } from '../../actions';

const MenuHeader = (props) => {

    const category = useSelector(state => state.category);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllCategory());
    }, []);


    const renderCategories = (categories) => {
        let myCategories = [];
        for (let category of categories) {
            myCategories.push(
                <li key={category.name} className='text-uppercase fw-bol fs-5'>
                    {
                        category.parentId ? <a href={category.slug}>
                            {category.name}
                        </a> :
                            <span>{category.name}</span>
                    }
                    {category.children.length > 0 ? (<ul>{renderCategories(category.children)}</ul>) : null}
                </li>
            );
        }
        return myCategories;
    }

    return (
        <>
            <div className="menuHeader">
                <ul className='text-uppercase fw-bol fs-5'>
                    {category.categories.length > 0 ? renderCategories(category.categories) : null}
                </ul>
            </div>
        </>
    )
}

export default MenuHeader