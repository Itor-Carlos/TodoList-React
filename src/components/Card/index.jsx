import React from "react";
import { CardContainer } from "../../assets/styles";

export default function Card({name, description, todoStatus}){
   return (
      <CardContainer>
         <article>
            <h4>{name}</h4>
            <p>{description}</p>

            <h3>{todoStatus}</h3>
         </article>
      </CardContainer>
   )
}