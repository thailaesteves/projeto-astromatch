import axios from "axios";
import React, { useEffect, useState } from "react";
import { Centralizando, CardArea, CardPerfil, FotoMenor } from "./styled";

function Match(props) {
  const [getMatch, setGetMatch] = useState([])

  useEffect(() => {
    axios.get("https://us-central1-missao-newton.cloudfunctions.net/astroMatch/:aluno/matches")
    .then((res) => {
      setGetMatch(res.data.matches)
      console.log(res.data.matches)
    })
    .catch((err) => {
      alert(err.response.message)
    })
  }, [])
  return (
    <CardArea>
      <h2>Seus matches</h2>
     {getMatch.map((profile) => {
      return <CardPerfil>
        <FotoMenor src={profile.photo} alt="Foto do usuário" />
        <p>{profile.name}</p>
      </CardPerfil>
     })}
     <button onClick={() => props.mudarTela("home")}>HOME</button>
    </CardArea>
  );
}

export default Match;