import React from "react";

function Ex2() {
    return (
        <div style={{
            width: "70%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center"
        }}>
            <h1>Como surgiu o React?</h1>
            <p style={{textAlign: "center", textJustify: "inter-word"}}>O React foi criado pelo Facebook em 2011 com 
                o intuito de trazer otimização para as páginas de feed posteriormente sendo utilizado por aplicativos 
                como o Instagram e Netflix. Conforme as necessidades de se criar uma interface responsiva e 
                da reutilização de código para uma manutenção mais fácil, o React foi sendo cada vez mais 
                aprimorado e foi disponibilizado de forma open source.</p>
        </div>
    )
}

export default Ex2;