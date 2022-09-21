
import { padding } from '@mui/system';
import styled from 'styled-components';

const BOXCONTAINER = styled.div`
 widht: 150px;
 height: 450px;
 background-color: #dbdeed;
 padding-top: ${(props) => props.paddingTop};
 border-radius: ${(props) => props.borderRadius};
`

const BoxContainer = ({paddingTop, borderRadius, children}) => {
    return (
      <BOXCONTAINER className="box-container" 
      borderRadius={borderRadius} 
      paddingTop={paddingTop}
      >
        {children}
      </BOXCONTAINER>
    )
}
export {BoxContainer};