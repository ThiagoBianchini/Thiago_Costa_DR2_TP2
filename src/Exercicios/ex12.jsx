import React from "react";

function Ex12() {

    class Lista extends React.Component {
        constructor(props) {
            super(props);

            this.lista = [1, 2, 3, 4, 5];
            this.mapLista = this.lista.map(numero => <li>{numero}</li>);
        }
        
        render() {
            return (
                <div>
                    <h1>Lista de números</h1>
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

export default Ex12;
