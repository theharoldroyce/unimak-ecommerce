import React, { Suspense, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { isUserLoggedIn, getAllCategory } from './actions'

//scss
import '@coreui/coreui/dist/css/coreui.min.css'
import './assets/libs/boxicons-2.1.1/css/boxicons.min.css'
import './scss/App.scss'
import { getInitialData } from './actions/initialData.actions'

//routes
const PrivateRoute = React.lazy(() => import('./privateRoute/PrivateRoute'))
const Dashboard = React.lazy(() => import('./pages/Dashboard'))
const MainLayout = React.lazy(() => import('./layout/MainLayout'))
const Login = React.lazy(() => import('./pages/Login'))
const Blank = React.lazy(() => import('./pages/Blank'))
const Admin = React.lazy(() => import('./pages/admin/index'))
const Category = React.lazy(() => import('./pages/category/index'))
const Product = React.lazy(() => import('./pages/product/index'))

//Error Page
const Page404 = React.lazy(() => import('./pages/Page404'))
const Page500 = React.lazy(() => import('./pages/Page500'))

const loading = (
    <div className="pt-3 text-center">
        <div className="sk-spinner sk-spinner-pulse"></div>
    </div>
)


function App() {

    const dispatch = useDispatch();
    const auth = useSelector(state => state.auth)

    useEffect(() => {
        if (!auth.authenticate) {
            dispatch(isUserLoggedIn());
        }
        dispatch(getInitialData());

    }, []);
    return (
        <>
            <Suspense fallback={loading}>
                <Routes>
                    <Route path="*" element={<Page404 />} />
                    <Route path="/login" element={<Login />} />
                    <Route element={<PrivateRoute />}>
                        <Route path="/" element={<MainLayout />}>
                            <Route index element={<Dashboard />} />
                            <Route path="orders" element={<Page500 />} />
                            <Route path="category" element={<Category />} />
                            <Route path="products" element={<Product />} />
                            <Route path="customers" element={<Page500 />} />
                            <Route path="settings" element={<Page500 />} />
                            <Route path="stats" element={<Page500 />} />
                            <Route path="admin" element={<Admin />} />
                        </Route>
                    </Route>
                </Routes>
            </Suspense>
        </>
    )
}

export default App
