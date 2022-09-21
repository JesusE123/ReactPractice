import { Outlet } from "react-router-dom"
import styled from 'styled-components';
import {AppProvider, useAppContext} from '../../Providers/AppProvider';

const Button = styled.button`
    position: absolute;
    top: 0;
    right: 0;

`

const LoginLayout = ({ children }) => {
    const {themesToggle} = useAppContext();
    console.log(themesToggle);
    return (
        <div className='container-fluid'>
            <div className='row'>
                <div className='col-12'>
                    <Outlet />
                    <Button type="button" onClick={themesToggle}>Change Color</Button>
                </div>
            </div>
        </div>
    )
}

export { LoginLayout }