import styled from 'styled-components';
const ButtonStyle = styled.button `
    margin-top: 5px;
    width: ${(props) => props.fullWidth ? '100%': 'auto'};
    border: 1px solid #ccc;
    border-radius: 5px;
    `;
    
const ButtonPrimary = styled(ButtonStyle)`
    background-color: black;
    color: white;
    width: 200px
`;
const Button = ({children, click, type, fullWidth=true}) => {
    const callback = () => {
        if(click) {
            click();
        }
    }
    return (
        
        <>
        <ButtonPrimary onClick={callback} type={type} fullWidth={fullWidth}> 
            {children}
        </ButtonPrimary>
        </>
    )
}

export {Button}