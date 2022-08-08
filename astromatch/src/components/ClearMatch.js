import React from "react";
import axios from "axios";

export default function ClearMatch () {
    const clearAll = () => {
        axios.put(`https://us-central1-missao-newton.cloudfunctions.net/astroMatch/:aluno/clear`)
        .then((response) => {
            alert('Astromatch foi resetado!')
            console.log(response)
          })
          .catch((err) => {
            alert(err.response.message)
          })
          
    }
    return (
        <div>
          <button onClick={clearAll}>Resetar AstroMatch</button>
        </div>
    )
}