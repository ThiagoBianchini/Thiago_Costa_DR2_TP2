import React from "react";

function Ex11() {

    const dobrar = (num) => {
        return num*2;
    }

    const multiplicar = (n1, n2) => {
        return n1*n2;
    }

    function atualiza() {
        const num = Number(document.getElementById('num').value)
        const n1 = Number(document.getElementById('n1').value);
        const n2 = Number(document.getElementById('n2').value);

        document.getElementById('dobrado').innerText = `Número dobrado: ${dobrar(num)}`;
        document.getElementById('mult').innerText = `Multiplicação: ${multiplicar(n1, n2)}`;
    }

    
    const container = {
        display: "flex",
        flexDirection: "row",
        gap: "2em"
    }

    return (
        <div style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            marginTop: "4em",
            gap: "1em"
        }}>
            <div style={container}>
                <h1>Dobra</h1>
                <input id="num" type="number" defaultValue="10" placeholder="Digite um número para dobrar"/>
            </div>
            <div style={{
                width: "100%",
            }}>------------------------------------------------------------</div>
            <div style={container}>
                <h1>Número 1</h1>
                <input id="n1" type="number" defaultValue="10" placeholder="Digite o número 1"/>
            </div>
            <h1>X</h1>
            <div style={container}>
                <h1>Número 2</h1>
                <input id="n2" type="number" defaultValue="20" placeholder="Digite o número 2"/>
            </div>
            <button onClick={atualiza}>Confirmar</button>

            <h1 id="dobrado"></h1>
            <h1 id="mult"></h1>

        </div>
    )
}

export default Ex11;