import { useCreateAccount } from './useCreateAccount';
import { BoxContainer } from '../../components/BoxContainer';
import { Tittle } from '../../components/Tittle';
import { Input } from '../../components/Inputs';
import { Button } from '../../components/Button';
import { Form } from '../../components/Form';
import { Links } from '../../components/Link';
import { useHref } from 'react-router-dom';


const CreateAccount = (props) => {



    const { sendForm, inputs, changeControl, register } = useCreateAccount()
    const volverInicio = useHref('/')

    return (

        <div className='container-fluid'>
            <div className='row'>
                <div className='col-12'>
                    <div className='d-flex justify-content-center align-items-center vh-100'>
                        <BoxContainer paddingTop="90px">
                            <Tittle
                                type="h2"
                                textAlign="center">
                                Crea tu cuenta
                            </Tittle>
                            <Form submit={sendForm} marginLeft="110px">
                                <Input type="text"
                                    placeholder='Email'
                                    value={inputs.email || ""}
                                    change={changeControl}
                                    name="email"
                                />
                                <Input type="text" placeholder="User" value={inputs.user || ""} change={changeControl} name="user" />
                                <Input type="password" placeholder="Password" value={inputs.password || ""} change={changeControl} name="password" />
                                <Input type="password" placeholder="Confirm Password" value={inputs.confirm_password || ""} change={changeControl} name="confirm_password" />
                                <Button type="submit">Create Account</Button>
                                <div>
                                    <Links href={volverInicio} color="#fff">Ya tienes cuenta?, inicia sesion</Links>
                                </div>
                            </Form>

                        </BoxContainer>
                    </div>
                </div>
            </div>
        </div>

    )
}

export { CreateAccount };