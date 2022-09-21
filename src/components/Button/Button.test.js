import {Button} from './Button'
import {render, screen, fireEvent} from '@testing-library/react'
describe("buttonComponent",()=>{
    test("Deberia al hacer click, ejecutar el callback", ()=>{
       const callback = jest.fn();
        render(<Button click={callback}>Log</Button>)
        const element = screen.queryByText("Log");
        fireEvent.click(element)
        expect(callback.mock.calls.length).toBe(1)

    })
    test("Deberia mostrarme el children", ()=>{
         render(<Button>Log</Button>)
         const element = screen.queryByText("Log");
         expect(element).not.toBeNull()
     })
} )
