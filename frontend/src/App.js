import React, { Suspense } from 'react'
// import './App.css';
import { Navigate, Routes, Route } from 'react-router-dom'
import { Oval } from 'react-loader-spinner'

//Pages Routes
const DefaultLayout = React.lazy(() => import('./layout/DefaultLayout'))
const Page404 = React.lazy(() => import('./pages/Page404'))
const HomePage = React.lazy(() => import('./pages/HomePage'))
const AboutPage = React.lazy(() => import('./pages/AboutPage'))
const CheckoutPage = React.lazy(() => import('./pages/CheckoutPage'))
const ContactPage = React.lazy(() => import('./pages/ContactPage'))
const LoginPage = React.lazy(() => import('./pages/LoginPage'))
const ProductDetailPage = React.lazy(() => import('./pages/ProductDetailPage'))
const ServicesPage = React.lazy(() => import('./pages/ServicesPage'))
const ShopPage = React.lazy(() => import('./pages/ShopPage'))
const ProductListPage = React.lazy(() => import('./pages/ProductListPage'))
const SignupPage = React.lazy(() => import('./pages/SignupPage'))



const loading = (
  <div className=" d-flex justify-content-center align-items-center" style={{ height: '100vh' }} >
    <div className="d-inline-block text-center" >
      {/* <img src={myfilogo} alt="logo" height={85} width={85} /> */}
      <Oval height={25} />
    </div>
  </div>
)


function App() {
  return (
    <>
      <Suspense fallback={loading}>
        <Routes>
          <Route path="*" element={<Page404 />} />
          <Route path="/" element={<DefaultLayout />}>
            <Route index element={<HomePage />} />
            <Route path="shop" element={<ShopPage />} />
            <Route path="/:slug" element={<ProductListPage />} />
            <Route path="services" element={<ServicesPage />} />
            <Route path="about" element={<AboutPage />} />
            <Route path="contact" element={<ContactPage />} />
            <Route path="signin" element={<SignupPage />} />
          </Route>
        </Routes >
      </Suspense>
    </>
  );
}

export default App;
