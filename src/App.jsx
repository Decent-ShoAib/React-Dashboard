import React from 'react'
import ResponsiveDrawer from './Dashboard/Mainpage'
import { Route, Routes } from 'react-router-dom'
import ProductPage from './Dashboard/ProductPage'
import UserPage from './Dashboard/UserPage'
import GithubFinder from './Dashboard/GithubFinder'
import ProductDetail from './Dashboard/ProductDetail'
import UserDetail from './Dashboard/UserDetail'


function App() {
  return (
    <>

      <Routes>
        <Route path="/*" element={<ResponsiveDrawer />} >
          <Route path="product" element={<ProductPage />} />
          <Route path='product/:productId' element={<ProductDetail />} />
          <Route path="users" element={<UserPage />} />
          <Route path='users/:id' element={<UserDetail />} />
          <Route path="github" element={<GithubFinder />} />
        </Route >
      </Routes>


    </>
  )
}

export default App