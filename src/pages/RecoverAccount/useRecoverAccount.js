import { useState } from "react";

const useRevocerAccount = () => {

    const [inputs, setInputs] = useState({});
    const changeControl = (event) =>{
        const value = event.target.value;
        const name = event.target.name;
        
        
        setInputs((state)=>{
            return {...state, [name]:value}
        })
        
        
    } 
    const validatePassword = () =>{
        if (inputs.password !== inputs.confirm_password) {
            alert('las contraseñas no son iguales')
        }
    }

    const sendForm = (event) =>{
        event.preventDefault()
        console.log(inputs)
        validatePassword();
    }

    return {
        sendForm,
        inputs,
        changeControl
    }

} 

export {useRevocerAccount}