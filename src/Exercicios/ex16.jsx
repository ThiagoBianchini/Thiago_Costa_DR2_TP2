import React from "react";
import ReactDOM from "react-dom";

function Ex16() {

    const atualiza = () => {
        const nome = document.getElementById('inputNome').value;
        ReactDOM.render(<Usuario nome={nome} />, document.getElementById('containerUsuario'));
    } 

    function Usuario({ nome }) {
        return (
            <div>
                <h1>É um prazer te conhecer {nome}</h1>
            </div>
        );
    }

    return (
        <div style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            marginTop: "4em",
            gap: "2em"
        }}>
            <input id="inputNome" type="text" placeholder="Insira o seu nome"/>
            <button onClick={atualiza}>Confirmar</button>
            <div id="containerUsuario"/>
        </div>
    );
}

export default Ex16;
