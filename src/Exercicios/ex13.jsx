import React from "react";

function Ex13() {

    const somar = (n1, n2) => {
        return n1 + n2;
    }

    const maiorNumero = (n1, n2) => {
        if (n1 > n2) {
            return n1;
        }
        else {
            return n2;
        }    
    }

    function atualiza() {
        const n1 = Number(document.getElementById('n1').value);
        const n2 = Number(document.getElementById('n2').value);

        document.getElementById('soma').innerText = `Soma: ${somar(n1, n2)}`;
        document.getElementById('maior').innerText = `Maior número: ${maiorNumero(n1, n2)}`;
    }

    const container = {
        display: "flex",
        flexDirection: "row",
        gap: "2em"
    }

    return (
        <div
            style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                marginTop: "4em",
                gap: "1em",
            }}
        >
            <div style={container}>
                <h2>Número 1</h2>
                <input id="n1" type="number" defaultValue="10" placeholder="Digite o número 1" />
            </div>
            <h1>+</h1>
            <div style={container}>
                <h2>Número 2</h2>
                <input id="n2" type="number" defaultValue="20" placeholder="Digite o número 2" />
            </div>
            <button onClick={atualiza}>Confirmar</button>

            <h1 id="soma"></h1>
            <h1 id="maior"></h1>
        </div>
    );
}

export default Ex13;
