import { BoxContainer } from '../../components/BoxContainer';
import { Tittle } from '../../components/Tittle';
import { useWindowSize } from '../../hooks/useWindowSize';
import { FormLogin } from '../../components/FormLogin';
import { useLogin } from './useLogin';
import { Img } from '../../components/Img';


const Login = (props) => {

  const { login } = useLogin();

  const { height } = useWindowSize();
  return (
    <>
      <div className="container-fluid">
        <div className="row d-flex justify-content-center align-items-center vh-100 g-0">
          <div className='col-5'>
            <Img />
          </div>
          <div className="col-5">
            <BoxContainer borderRadius="0px 20px 20px 0px" paddingTop="90px">
              <Tittle type="h2" textAlign="center">Bienvenido</Tittle>
              <FormLogin
                onSubmit={login}
              />
            </BoxContainer>
          </div>
        </div>
      </div>
    </>

  )
}

export { Login }