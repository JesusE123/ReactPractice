
import { useRevocerAccount } from './useRecoverAccount';
import { BoxContainer } from '../../components/BoxContainer';
import { Tittle } from '../../components/Tittle';
import { Input } from '../../components/Inputs';
import { Button } from '../../components/Button';
import { Form } from '../../components/Form';
import { Links } from '../../components/Link';
import { useHref } from 'react-router-dom';


const RecoverAccount = () => {

    const { sendForm, inputs, changeControl } = useRevocerAccount();

    const inicio = useHref('/')

    return (
        <>
            <div className='container-fluid'>
                <div className='row'>
                    <div className='col-12'>
                        <div className='d-flex justify-content-center align-items-center vh-100'>
                            <BoxContainer paddingTop="90px">
                                <Tittle type="h2" textAlign="center">Recover Account</Tittle>
                                <Form submit={sendForm} marginLeft='120px' >
                                    <Input type="text" placeholder='User' value={inputs.user || ""} change={changeControl} name="user" />
                                    <Input type="password" placeholder="New Password?" value={inputs.password || ""} change={changeControl} name="password" />
                                    <Input type="password" placeholder="Confirm Password" value={inputs.confirm_password || ""} change={changeControl} name="confirm_password" />
                                    <Button type="submit">Change Password</Button>
                                    <div>
                                        <Links href={inicio} color="#fff">Volver al inicio</Links>
                                    </div>
                                </Form>
                            </BoxContainer>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export { RecoverAccount };