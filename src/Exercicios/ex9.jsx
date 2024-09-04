import React from "react";

function Ex9() {

    let nomes = ["João", "Maria", "Pedro", "Ana"];
    let total = 0;

    for (let i = 0; i < nomes.length; i++) {
        console.log(nomes[i]);
        total += nomes[i].length;
    }

    return (
        <div style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center"
        }}>
            <h1>Total de caracteres: {total}</h1>
        </div>
    )
}

export default Ex9;