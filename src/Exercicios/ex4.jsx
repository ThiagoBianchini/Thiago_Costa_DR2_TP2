import React from "react";

function Ex4() {

    let nome = "João"

    nome = "Maria"

    const sobrenome = "Silva"

    //sobrenome = "Costa"

    return (
        <div style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center"
        }}>
            <h1>Variável nome: {nome}</h1>
            <h1>Constante Sobrenome: {sobrenome} </h1>

            <p style={{width: "60%"}}>Isso ocorre pois let é utilizado para criar variáveis no escopo de bloco, podendo serem alteradas e com uso limitado ao bloco que se encontram. Já o const,
                é utilizado para criar constantes, que acabam por serem imutáveis e tentativas de alteração acabam por causar erros no código.
            </p>
        </div>
    )
}

export default Ex4;