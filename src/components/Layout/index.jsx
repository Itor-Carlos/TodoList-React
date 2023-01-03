import React from "react";
import { LayoutContainer } from "../../assets/styles";
import Card from "../Card";
import CardList from "../CardList";
import Header from "../Header";

export default function Layout(){
   const cards = [
      {
         name: "Exercise List - Algebra Linear",
         description: 'List of Linear Algebra subject exercises',
         todoStatus: 'CONCLUIDO'
      },
      {
         name: "Exercise List - Funcional Programming",
         description: 'List of Functional Programming subject exercises',
         todoStatus: 'PENDENTE'
      },
      {
         name: "Exercise List - Calculus II",
         description: 'List of Functional Programming subject exercises',
         todoStatus: 'CONCLUIDO'
      },
      {
         name: "Exercise List - Phists",
         description: 'List of Phsics subject exercises',
         todoStatus: 'CONCLUIDO'
      }
   ]
   
   return (
      <LayoutContainer>
         <Header/>
         <CardList cardLists={cards}>
            
         </CardList>
      </LayoutContainer>
   )
}