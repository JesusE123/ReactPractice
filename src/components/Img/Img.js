import React from 'react'
import styled from 'styled-components'
const IMG = styled.img `
width:480px;
height: 450px;
border-radius: 20px 0px 0px 20px;
`;
const Img = () => {
    return (
        <div>
            <IMG
            src='https://blog.logrocket.com/wp-content/uploads/2022/01/How-to-create-glassmorphism-effect-React.png'
            />
        </div>
    )
}

export { Img };