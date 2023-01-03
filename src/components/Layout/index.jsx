import React from "react";
import { LayoutContainer } from "../../assets/styles";
import TodosRoutes from "../../Routes";
import Card from "../Card";
import CardList from "../CardList";
import Header from "../Header";

export default function Layout(){

   return (
      <LayoutContainer>
         <TodosRoutes />
      </LayoutContainer>
   )
}