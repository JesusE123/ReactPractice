import { Form } from '../Form';
import { Input } from '../Inputs';
import { Button } from '../Button'
import { Links } from '../Link';
import { useState } from 'react';
import { useHref } from 'react-router-dom';


const FormLogin = ({ onSubmit }) => {
    const [inputs, setInputs] = useState({})
    const recover = useHref("recover-account")
    const create = useHref('create-account')

    const click = (event) => {

    }
    const sendform = (event) => {
        event.preventDefault();
        if(!inputs.user || !inputs.password){
            return;
        }
        if (onSubmit) {
            onSubmit(inputs.user, inputs.password)
        }
    }


    const changeControl = (event) => {
        const value = event.target.value;
        const name = event.target.name;

        setInputs((state) => {
            return { ...state, [name]: value }
        })


    }


    return (
        <Form submit={sendform} marginLeft="130px">
            <Input
                type="text"
                placeholder='User'
                value={inputs.user || ""}
                change={changeControl}
                name="user"
                data-testid="user"
                
            />
            <Input
                type="password"
                placeholder="Password"
                value={inputs.password || ""}
                change={changeControl}
                name="password"
                data-testid="password"
            />
            <Button
                click={click}>
                Log In
            </Button>
            <div
                className='ms-3'>
                <Links
                    href={recover}
                    color="#fff">
                    ¿Olvidaste tu contraseña?
                </Links>
            </div>

            <div
                className='ms-1'>
                <Links
                    href={create}
                    color="#fff">
                    No tienes cuenta?, registrate
                </Links>
            </div>
        </Form>
    )
}


export { FormLogin }