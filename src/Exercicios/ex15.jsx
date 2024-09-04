import React from "react";
import ReactDOM from "react-dom";

function Ex15() {
    class Mensagem extends React.Component {
        constructor(props) {
            super(props);

            this.mensagem = "Bem-vindo ao TP2";
        }

        render() {
            return (
                <div>
                    <h1>{this.mensagem}</h1>
                </div>
            );
        }
    }

    return (
        <div
            style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center"
            }}
        >
            <Mensagem />
        </div>
    );
}

ReactDOM.render(<Ex15 />, document.getElementById('root'));

export default Ex15;
