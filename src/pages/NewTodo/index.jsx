import React from "react";
import { NewTodoContainer } from "../../assets/styles";
import Form from "../../components/Form";

export default function NewTodo(){
   return (
      <NewTodoContainer>
         <h1>New Todo</h1>
         <Form />
      </NewTodoContainer>
   )
}