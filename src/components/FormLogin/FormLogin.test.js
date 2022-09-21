import { fireEvent, render, screen } from '@testing-library/react'
import {FormLogin} from './FormLogin'
import { useHref } from 'react-router-dom';

jest.mock('react-router-dom',()=>{
    return{
        useHref: ()=>{} 
    }
})



describe('FormLogin', ()=>{
    const sendform = jest.fn()
    beforeEach(()=>{
        jest.clearAllMocks();
    })
    test('Se espera que al enviar submit, se envie el formulario correctamente', ()=>{
        render(<FormLogin onSubmit={sendform}/>)
        const elementUser = screen.queryByTestId('user');
        const elementPassword = screen.queryByTestId('password');
        const button = screen.queryByText('Log In');
        fireEvent.change(elementUser, {target:{value:"Marianito"}})
        fireEvent.change(elementPassword, {target:{value:"123"}})
        fireEvent.click(button)
        expect(sendform.mock.calls.length).toBe(1)

    })

    test('si el formulario es invalido, no se llame al submit', ()=>{
        render(<FormLogin onSubmit={sendform}/>)
        const button = screen.queryByText('Log In');
        fireEvent.click(button)
        expect(sendform.mock.calls.length).toBe(0)
    })

    test('si el formulario tiene uno de los campos llenos, no se llame al submit', ()=>{
        render(<FormLogin onSubmit={sendform}/>)
        const button = screen.queryByText('Log In');
        const elementUser = screen.queryByTestId('user');
        fireEvent.change(elementUser, {target:{value:"Marianito"}})
        fireEvent.click(button)
        expect(sendform.mock.calls.length).toBe(0)
    })
    
})