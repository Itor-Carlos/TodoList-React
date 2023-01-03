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