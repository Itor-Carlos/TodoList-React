import React, { useEffect, useState, useCallback } from "react";
import CardList from "../../components/CardList";
import Header from "../../components/Header";
import api from '../../api/api'

export default function Home(){

   const [cards, setCards] = useState([]);

   const fetchCards = useCallback(async () => {
      try{
         const resposta = await api.get('/todos')
         if(resposta.status === 200){
            setCards(resposta.data)
         }
         else{
            alert(resposta.data)
         }
      }
      catch(error){
         alert(error)
      }
   },[])
   
   useEffect(() => {
      fetchCards();
   }, [fetchCards])

   const deletePost = async(id) => {
      try{
         const response = await api.delete(`/todos/${id}`)
         if(response.status === 204){
            const uptadetedCards = cards.filter(element => element.id !== id);
            setCards(uptadetedCards)
         }
         else{
            console.log(response.data)
         }
      }
      catch(error){
         console.log(error)
      }
   }

   const changeTodoStatus = async(id) => {
      const todoFilted = cards.find(element => element.id === id)
      const resposta = await api.put(`todos/${id}`,{
         ...todoFilted,
         todoStatus: 'CONCLUIDO'
      })
      todoFilted.todoStatus = 'CONCLUIDO'
      if(resposta.status === 200){
         const todos = cards.filter(element => element.id !== id);
         setCards([todoFilted, ...todos])
       }
   }
   return (
      <>
         <Header/>
         <CardList deletePost={deletePost} changeTodoStatus={changeTodoStatus} cardLists={cards}/>
      </>
   )
}