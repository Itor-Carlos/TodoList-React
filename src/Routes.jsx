import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import NewTodo from "./pages/NewTodo";

export default function TodosRoutes(){
   return (
      <Routes>
         <Route path="/" element={<Home />}/>
         <Route path="/todo/form" element={<NewTodo />}/>
      </Routes>
   )
}