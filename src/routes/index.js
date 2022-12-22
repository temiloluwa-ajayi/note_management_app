import React from 'react'
import {BrowserRouter, Routes, Route} from "react-router-dom";
import SignUpPage from '../pages/SignUp';

function AllRoute() {
  return (
   <BrowserRouter>
      <Routes>
        <Route  path="/signup" element={SignUpPage} />
      </Routes>
   </BrowserRouter>
  )
}

export default AllRoute;