import React from "react";
import { FormContainer } from "../../assets/styles";
import FormGroup from "../FormGroup";

export default function Form(){
   return (
      <FormContainer>
         <FormGroup titleFormGroup={"Name"}>
            <input type="text" />
         </FormGroup>

         <FormGroup titleFormGroup={"Descrição"}>
            <textarea type="text" />
         </FormGroup>

         <FormGroup titleFormGroup={"Status"}>
            <select>
               <option value="">Choose here</option>
               <option>PENDENTE</option>
               <option>CONCLUIDO</option>
            </select>
         </FormGroup>

         <div>
            <button>Register</button>
         </div>

      </FormContainer>
   )
}