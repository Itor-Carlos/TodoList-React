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

   return (
      <>
         <Header/>
         <CardList cardLists={cards}/>
      </>
   )
}