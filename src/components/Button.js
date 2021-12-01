import React from "react"
import Style from "./styles.css/main.module.css"


export default function Button(){

    function show(){
        alert("este é um botão feito com javascritp")
    }
    return (
        <div>
            <button onClick={show}  className={Style.button}>clique</button>
        </div>
    )
}