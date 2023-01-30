import React from 'react'
import { Button } from 'react-bootstrap';

const HButton = () => {
    return (
        <>
            <Button
                type="submit"
                className="px-4 btn  d-flex align-items-center justify-content-center text-white w-100 rounded-1"
                style={{ height: '3rem', backgroundColor: '#278EC9' }}
            />
        </>
    )
}

export default HButton

