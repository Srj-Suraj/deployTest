// libraries
import React from "react";
import reactDom from "react-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// css
import "./index.css";

// components
import NavBar from "./NavBar";
import SideBar from "./SideBar";
import ErrorPage from "./ErrorPage";
// pages 
import Dashboard from "./Dashboard/Dashboard";
import ClientsList from "./Clients/ClientsList";
import ClientVerification from "./Clients/ClientVerification";
import SponserList from "./Clients/SponserList";
import Categories from "./Categories/Categories";
import CategoryApproval from "./Categories/CategoryApproval";
import AddCategory from "./Categories/AddCategory";
import Products from "./Products/Products";
import ProductApproval from "./Products/ProductApproval";
import ProductView from "./Products/ProductView";
import AddProduct from "./Products/AddProduct";


reactDom.render(
  
  <>

    <Router basename="/">
          <SideBar/> <NavBar/> 
      <Routes>
        <Route path="/*" element={<ErrorPage />} />
        <Route path="/" element={<Dashboard/>} />
        <Route path="/Dashboard" element={<Dashboard/>} />
        <Route path="/Clients" element={<ClientsList/>} />
        <Route path="/ClientVerification" element={<ClientVerification/>} />
        <Route path="/SponserList" element={<SponserList/>} />
        <Route path="/Categories" element={<Categories/>} />
        <Route path="/CategoryApproval" element={<CategoryApproval/>} />
        <Route path="/AddCategory" element={<AddCategory/>} />
        <Route path="/Products" element={<Products/>} />
        <Route path="/ProductApproval" element={<ProductApproval/>} />
        <Route path="/ProductView" element={<ProductView/>} />
        <Route path="/AddProduct" element={<AddProduct/>} />
       

        
      </Routes>
    </Router>
  </>
  
 
  , document.getElementById("root")
);
