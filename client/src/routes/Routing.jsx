import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../components/Home"
import Login from "../components/Login";

const Routing = () => {
  return (
  <div>
<Routes>
    <Route path="/"  element={<Home/>}/>
    <Route path="/login"  element={<Login/>}/>
    <Route path="/profile"  element={<Home/>}/>

</Routes>
  </div>);
};

export default Routing;
