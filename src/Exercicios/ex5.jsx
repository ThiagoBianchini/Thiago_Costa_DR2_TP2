import React from "react";

function Ex5() {

    let idade = 30

    let ehMaiorDeIdade = idade >= 18 ? true : false

    let nomeCompleto = "João Silva"
    
    nomeCompleto = "Maria Silva"

    let casado = false

    casado = true

    return (
        <div style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center"
        }}>
            <h1>Idade: {idade}</h1>
            <h1>É maior de idade: {ehMaiorDeIdade ? "verdadeiro" : "falso"}</h1>
            <h1>Nome completo: {nomeCompleto}</h1>
            <h1>Casado: {casado ? "verdadeiro" : "falso"}</h1>
        </div>
    )
}

export default Ex5;