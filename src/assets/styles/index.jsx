import styled from "styled-components";

export const LayoutContainer = styled.div`
   width: 1100px;
   height: 700px;    
   margin: auto;
`

export const HeaderContainer = styled.header`
    display: flex;
    flex-direction: column;
    text-align: center;
    justify-content: space-between;

   h1{
      font-size: 30px;
      margin-bottom: 12px;
   }

   input{
      width: 40%;
      margin: auto;
      background: #fff;
      border: 2px solid #fff;
      box-shadow: 0px 4px 10px rgba(0,0,0,0.04);
      height: 26px;
      border-radius: 4px;
      border: none;
      outline: none;
      padding: 0 16px;
      font-size: 16px;
      transition: border-color 0.2s ease-in;
   }
`

export const CardContainer = styled.div`
   height: 300px;
   transition: 1.2s;
   display: flex;
   justify-content: center;
   text-align: center;
   margin-left: 10px;
   background-color: #4F4F4F;

   margin-bottom: 1px;

   article h3{
      position: relative;
      bottom: -150px;
   }

   article p{
      opacity: 0.5;
   }

   &:hover{
      background-color: #6A5ACD;
      color: #fff;
      translate: (20px,10px);
   }
`
export const CardListContainer = styled.div`
   margin-top: 30px;
   display: grid;
   row-gap: 130px;
   grid-template-columns: repeat(3, 1fr);
   grid-auto-rows: 200px;
`