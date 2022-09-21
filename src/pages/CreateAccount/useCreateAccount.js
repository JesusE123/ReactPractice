import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useUserContext } from '../../Providers/UserProvider';
import { Http } from "../../utilities/Http";

const useCreateAccount = () => {
    const [inputs, setInputs] = useState({});

    const navigate = useNavigate();
    const { setUser } = useUserContext();

    const changeControl = (event) => {
        const value = event.target.value;
        const name = event.target.name;


        setInputs((state) => {
            return { ...state, [name]: value }
        })


    }

    const validatePassword = () => {
        if (inputs.password !== inputs.confirm_password) {
            alert('las contraseñas no son iguales')
        }
    }

    const validateEmail = () => {
        const emailRegex = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
        if (emailRegex.test(inputs.email) === false) {
            alert('formato de mail incorrecto')
        }
    }







    const sendForm = (event) => {
        event.preventDefault()
        validatePassword();
        validateEmail();
        //localStorage.setItem("form", JSON.stringify(inputs))
        setUser(inputs)
        navigate('/')
        register(inputs.user, inputs.password, inputs.email)
        
    }

    const register = (user, password, email) => {
        Http.post("/register", {user:user, password:password, email:email }).then(res => {
            navigate("/")

        })
    }

    return {
        sendForm,
        inputs,
        changeControl,
        register


    }
}

export { useCreateAccount }