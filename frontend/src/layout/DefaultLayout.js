import React from 'react'
import { Outlet } from 'react-router-dom'
const HeaderSection = React.lazy(() => import('../components/HeaderSection'))
const FootherSection = React.lazy(() => import('../components/FootherSection'))




const DefaultLayout = () => {
    return (
        <div>
            <div className="wrapper d-flex flex-column min-vh-100 bg-light">
                <HeaderSection />
                <div className="body flex-grow-1 overflow-hidden">
                    <Outlet />
                </div>
                <FootherSection />
            </div>
        </div>
    )
}

export default DefaultLayout