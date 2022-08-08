import styled from "styled-components";

export const Centralizando = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

export const CardArea = styled.div`
  border-radius: 8px;
  width: 400px;
  height: 800px;
  margin: 30px;
  display: flex;
  flex-direction: column;
  background-color: white;
  align-items: center;
`;

export const CardPerfil = styled.div`
    margin: 16px;
    border: 6px solid #FA9428;
    border-radius: 8px;
    max-height: 650px;
`

export const FotoPerfil = styled.img`
   width: 100%;
   height: 70%;
   display: block;
`

export const LikeButton = styled.button`
    background-color: green;
    width: 50px;
    font-size: large;
    border: 3px;
    :hover{
      background-color: lightgreen;
    }
`
export const NoLikeButton = styled.button`
    background-color: red;
    width: 50px;
    font-size: large;
    border: 3px;
    :hover{
      background-color: lightcoral;
    }
`

export const TextArea = styled.div`
   padding: 8px;
`