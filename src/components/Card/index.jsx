import React from "react";
import { CardContainer } from "../../assets/styles";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Card({id,name, description, todoStatus, deletePost, changeTodoStatus}){
   return (
      <CardContainer>
         <article>
            <h4>{name}</h4>
            <p>{description}</p>

            <h3>{todoStatus}</h3>

            <div>
            { todoStatus === 'PENDENTE' 
                  ?  <button onClick={() => changeTodoStatus(id)}>
                         <FontAwesomeIcon icon={faCheck} />
                     </button>
                  
                  : <></>
               }
               <button onClick={() => deletePost(id)}>
                  <FontAwesomeIcon icon={faTrash} />
               </button>
            </div>
         </article>
      </CardContainer>
   )
}