import React from "react";

let nome = "";

fetch("https://jsonplaceholder.typicode.com/users")
    .then((response) => response.json())
    .then((data) => {
        console.log("ACESSANDO API");
        nome = data[0].name;

    })
    .catch((error) => console.error("Erro ao acessar a API: ", error));

function Ex7() {

    return (
        <div
            style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
            }}
        >
            <h1>Primeiro usuário</h1>
            <p>Nome: {nome}</p>
        </div>
    );
}

export default Ex7;
