import { useState } from "react";
import { Http } from "../../utilities/Http";
import {useUserContext} from '../../Providers/UserProvider';
import { useNavigate } from 'react-router-dom';


const useLogin = () => {
   
    const {setUser, user} = useUserContext();
    const navigate = useNavigate();


    const setLogger = () => {
        //const getStored = JSON.parse(localStorage.getItem("form"))
        //localStorage.setItem("form", JSON.stringify(getStored))
        setUser((state) => ({...state, logged: true}))
    }
    
    const login = (username, password) => {
        console.log(username, password)
        Http.post('/login', {user:username, password:password}).then(res => {
            localStorage.setItem('login', res.data.token)
            setLogger()
            navigate('/dashboard')
        })
    }
    return {login}
}

export {useLogin};
