
import styled from 'styled-components';
const H1 = styled.h1 `
    font-size: 25px;
    text-align: center;
    `;

const H3 = styled.h3 `
    color: white;
    font-size: 15px;
    text-align: center;
    margin-top: 10px;
`;

const H5 = styled.h5 `
color: white;
font-size: 20px;
text-align:center;
background-color: black;`;

const H2 = styled.h2 `
color: black;
font-size: 20px;
font-weight: bold;
text-align: ${(props) => props.textAlign};

`;

const Tittle = ({props, children, type, color, textAlign}) => {
    return ( <>
        {type === 'h1' && <H1>{children}</H1>}
        {type === 'h2' && <H2 textAlign={textAlign}>{children}</H2>}
        {type === 'h3' && <H3>{children}</H3>}
        {type === 'h4' && <h4 className="tittle">{children}</h4>}
        {type === 'h5' && <H5>{children}</H5>}
        </>
    )
}

export {Tittle};