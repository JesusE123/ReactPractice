import React from 'react'
import { useNavigate } from 'react-router-dom';
import { Router } from 'react-router-dom';
import { Links } from '../Link/Link';
import Nav from 'react-bootstrap/Nav';


const Navbar = () => {
    const navigate = useNavigate();
    const handleClick = (router) => {
        navigate(router)
    }
    return (
        <>
            <Nav className="justify-content-center bg-light" activeKey="/home">
                <Nav.Item>
                    <Nav.Link href="/home" className='text-dark'>Home</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="link-1" className='text-dark'>Orders</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="link-2" className='text-dark'>Sales</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="Link-3" className='text-dark'>
                        Followers
                    </Nav.Link>
                </Nav.Item>
            </Nav>
        </>
    )
}

export { Navbar }

