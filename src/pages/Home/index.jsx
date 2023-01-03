import React from "react";
import CardList from "../../components/CardList";
import Header from "../../components/Header";

export default function Home(){
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
      <>
         <Header/>
         <CardList cardLists={cards}/>
      </>
   )
}