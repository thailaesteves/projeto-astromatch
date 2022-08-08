import React, { useState, useEffect } from "react";
import axios from "axios";
import { Centralizando, CardArea, CardPerfil, FotoPerfil, LikeButton, NoLikeButton, TextArea } from "./styled";

export default function HomePage (props) {
  const [perfil, setPerfil] = useState((undefined))

  const getProfile = () => {
    axios.get(`https://us-central1-missao-newton.cloudfunctions.net/astroMatch/:aluno/person`, {
      headers: {
        Authorization: "thaila-esteves-ailton"
      }
    })
    .then((response) => {
      setPerfil(response.data.profile)
      console.log(response.data.profile)
    })
    .catch((error) => {
      alert(error)
    })
  }

  const handleChoice = (choice) => {
    const body = {
      id: perfil.id,
      choice: choice
    }
    setPerfil(undefined)
    axios.post("https://us-central1-missao-newton.cloudfunctions.net/astroMatch/:aluno/choose-person", body)
    .then((res) => {
      console.log(res)
      getProfile()
    })
    .catch((err) => {
      alert(err.message)
    })
  }

  useEffect(() => {
    getProfile()
  }, [])

  const curtiu = () => {
    handleChoice(true)
  }

  const noLike = () => {
    handleChoice(false)
  }
   
  return (
    <div>
     {perfil ? (
        <Centralizando>
        <CardArea>
        <button onClick={() => props.mudarTela("match")}>VER MATCHES</button>
        <CardPerfil>
          <FotoPerfil src={perfil.photo} alt="foto do usuário"/>
          <TextArea>
            <h3>{perfil.name}, {perfil.age}</h3>
            <p>{perfil.bio}</p>
          </TextArea>
          </CardPerfil>
        <div>
          <NoLikeButton onClick={noLike}>X</NoLikeButton>
          <LikeButton onClick={curtiu}>♡</LikeButton>
        </div>
        </CardArea>
        </Centralizando>
     ) : (
      <Centralizando>Carregando...</Centralizando>
     )}
    </div>
  );
  
}



