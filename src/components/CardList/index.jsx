import React from "react";
import { CardListContainer } from "../../assets/styles";
import Card from "../Card";



export default function CardList({deletePost, changeTodoStatus,cardLists}){
   return (
      <CardListContainer>
         {cardLists.map(element => (
            <Card deletePost={deletePost} changeTodoStatus={changeTodoStatus} key={element.id} id={element.id} name={element.name} description={element.descricao} todoStatus={element.todoStatus} /> 
         ))}
      </CardListContainer>
   )
}