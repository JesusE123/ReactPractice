import styled from "styled-components"

const INPUT = styled.input `
border: auto;
border-radius: 5px;
margin: 4px
`

const Input = ({children, type, placeholder, value, change, name, validate,...props}) => {
    return (
        
         <INPUT type={type} placeholder={placeholder} value={value} onChange={change} name={name} validate={validate} {...props} />
        
    )
}

export {Input}