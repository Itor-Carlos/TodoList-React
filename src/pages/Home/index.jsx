import React, { useEffect, useState } from "react";
import CardList from "../../components/CardList";
import Header from "../../components/Header";
import api from '../../api/api'

export default function Home(){

   const [cards, setCards] = useState([]);

   const fetchCards = async () => {
      await api.get('/todos')
               .then((response) => setCards(response.data))
               .catch((err) => {
                  console.log(err)
               })
   }
   
   useEffect(() => {
      fetchCards();
   }, [])

   return (
      <>
         <Header/>
         <CardList cardLists={cards}/>
      </>
   )
}