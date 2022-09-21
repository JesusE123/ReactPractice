import styled from "styled-components";

const FORM = styled.form `
width: 300px;
height: 150px;
margin-left:${(props) => props.marginLeft};
margin-top: 10px;
`
const Form = (props) => {
    return (
        <>
        <FORM 
        marginLeft={props.marginLeft} 
        onSubmit={props.submit}>
        {props.children}
        </FORM>
        </>
    )
}

export {Form};