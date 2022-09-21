import React from 'react'
import Avatar from '@mui/material/Avatar'
import Button from '@mui/material/Button';

import { useUserContext } from '../../Providers/UserProvider'

const Topbar = () => {
    const { user } = useUserContext();
    const getFirstLetter = () => {
        if (user?.name) {
            return user.name.charAt(0)
        }
        return '';
    }
  return (
    <>
    <div className='d-flex'>
        <Avatar>{getFirstLetter()}</Avatar>
        <Button variant="contained" color="error" size='small'>Cerrar Sesion</Button>
    </div>
   
    </>
  )
}

export {Topbar} ;