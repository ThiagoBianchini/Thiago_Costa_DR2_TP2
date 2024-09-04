import React from "react";

function Ex14() {

    class Lista extends React.Component {
        constructor(props) {
            super(props);

            this.lista = [];

            for (let i = 0; i < 10; i++) {
                this.lista.push(i*2);
            }

            this.mapLista = this.lista.map(numero => <li>{numero}</li>);
        }
        
        render() {
            return (
                <div>
                    <h1>Lista de números pares</h1>
                    <ul>{this.mapLista}</ul>
                </div>
            );
        }
    }

    return (
        <div style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center"
        }}>
            <Lista/>
        </div>
    );
}

export default Ex14;
