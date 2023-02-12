import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import styled from "styled-components";
import Address from "./meesho/Address"
import Checkout from "./meesho/Checkout";

import Home from "./meesho/Home";
import Login from "./meesho/Login";
import Payment from "./meesho/Payment";
import SignUp from "./meesho/SignUp";

import AddProduct from "./meesho/AddProduct";
import Orders from "./meesho/Orders";


function App() {
  return (
    <Router>
      <Container>
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/login" element={<Login />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/address" element={<Address />} />
          <Route path="/payment"  element={<Payment />}  />
          <Route path="/addproduct" element={<AddProduct />} />
          <Route path="/orders" element={<Orders />} />
        </Routes>
      </Container>
    </Router>
  );
}

const Container = styled.div`
  width: 100vw;
  height: 100vh;
overflow-y: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
`;

export default App;
