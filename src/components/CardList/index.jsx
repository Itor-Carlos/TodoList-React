import React from "react";
import { CardListContainer } from "../../assets/styles";
import Card from "../Card";



export default function CardList({cardLists}){
   return (
      <CardListContainer>
         {cardLists.map(element => (
            <Card key={element.id} name={element.name} description={element.descricao} todoStatus={element.todoStatus} /> 
         ))}
      </CardListContainer>
   )
}