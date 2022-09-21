import { useState } from "react";
const Asdd = () => {
    const create = useState('hola');
    const [color, Setcolor] = useState('verde')
    function cambiarValor(){
        imprimir = 'valor cambiado'
        console.log(color);
        if (color=='verde'){
            Setcolor('azul');
        }else {
            Setcolor('verde')
        }
        Setcolor(color=='verde'?'azul':'verde');
    }
    let imprimir = 'impreso'
    return (
        <>
        <p>{color}</p>
        <button onClick={cambiarValor}>click</button>
        </>
    )
}

export {Asdd}