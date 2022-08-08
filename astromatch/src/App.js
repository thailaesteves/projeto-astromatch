import React, { useState, useEffect } from "react";
import { createGlobalStyle } from "styled-components";
import ClearMatch from "./components/ClearMatch";
import HomePage from "./pages/HomePage/HomePage";
import Match from "./pages/Match/Match";
import styled from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    width: 100vw;
    min-height: 100vh;
    background-color: #FD4E1C;
  }
  button {
    background-color: #FA9428;
    width: 150px;
    border-radius: 12px;
    border-style: double;
    border-color: #FA9428;
    margin: 8px;
    :hover{
      background-color: white;
    }
  }
`

const Const = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: 8px;
`

export default function App () {
  const [telaAtual, setTelaAtual] = useState("home")

  const trocarTela = () => {
    switch (telaAtual) {
      case "home":
        return <HomePage mudarTela={mudarTela}/>
      case "match":
        return <Match mudarTela={mudarTela}/>
      default:
        return <HomePage mudarTela={mudarTela}/>
    }
  }

  const mudarTela = (tela) => {
    setTelaAtual(tela)
  }

    return <div>
      <GlobalStyle />
      <Const>
      <h1>ASTROMATCH</h1>
      <ClearMatch />
      </Const>
      {trocarTela()}
    </div>

}