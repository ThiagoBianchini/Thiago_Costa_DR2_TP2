import React from "react";

let nome = "";

async function obterDados() {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users");
        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Erro ao acessar a API: ", error);
    }
}

obterDados().then((data) => {
    console.log("ACESSANDO API");
    nome = data[0].name;
});

function Ex8() {
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

export default Ex8;
