import React from "react";
import { FormGroupContainer } from "../../assets/styles";

export default function FormGroup({children, titleFormGroup}){
   return (
      <FormGroupContainer>
         <span>{titleFormGroup}</span>
         {children}
      </FormGroupContainer>
   )
}