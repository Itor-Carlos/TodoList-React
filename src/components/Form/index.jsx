import React, {useState, useCallback, useEffect, useRef} from "react";
import { FormContainer } from "../../assets/styles";
import FormGroup from "../FormGroup";
import api from '../../api/api'

export default function Form(){

   const [isValidated, setIsValidated] = useState({
      name: false,
      todoStatus: false
   })
   
   const [name, setName] = useState('');
   const [description, setDescription] = useState('');
   const [todoStatus, setTodoStatus] = useState('');

   const checkName = (event) => {
      const actualName = event.target.value;
      if(actualName === ''){
         setName('');
         setIsValidated(prevState => ({
            ...prevState,
            name: false
         }))
      }
      else{
         setName(actualName);
         console.log(actualName)
         setIsValidated(prevState => ({
            ...prevState,
            name: true
         }))
      }
   }

   const checkDescription = (event) => {
      const actualDescription = event.target.value;
      console.log(actualDescription)
      setDescription(actualDescription);
   }

   const checkStatus = (event) => {
      const actualStatus = event.target.value;
      console.log(actualStatus)
      if(actualStatus === ''){
         setTodoStatus('');
         setIsValidated(prevState => ({
            ...prevState,
            todoStatus: false
         }))
      }
      else{
         setTodoStatus(actualStatus);
         setIsValidated(prevState => ({
            ...prevState,
            todoStatus: true
         }))
      }
   }

   const validateButton = useCallback(() => {
      let valido = true;
      Object.values(isValidated).map(value => {
         if(!value) valido = false
      })
      return valido
   }, [isValidated])

   const createPost = async() => {
      try{
         const resposta = await api.post('/todos', {
            name: name,
            descricao: description,
            todoStatus: todoStatus
         })

         console.log(resposta.data)
      }
      catch(error){
         console.log(error)
      }
   }

   return (
      <FormContainer>
         <FormGroup titleFormGroup={"Name"}>
            <input type="text" onChange={checkName} />
         </FormGroup>

         <FormGroup titleFormGroup={"Descrição"} >
            <textarea type="text" onChange={checkDescription}/>
         </FormGroup>

         <FormGroup titleFormGroup={"Status"}>
            <select  onChange={checkStatus} >
               <option value="">Choose here</option>
               <option>PENDENTE</option>
               <option>CONCLUIDO</option>
            </select>
         </FormGroup>

         <div>
            <button disabled={!validateButton()} onClick={createPost}>Register</button>
         </div>

         {description}

      </FormContainer>
   )
}