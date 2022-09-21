import React from 'react'
import { Navbar } from '../Navbar'
import { Outlet } from "react-router-dom"
import { Tittle } from '../Tittle'
import { Topbar } from '../../components/TopBar';
import { Dashboard } from '../../pages/Dashboard/Dashboard';
import {Tablet} from '../Tablet/Tablet';

const DashboardLayout = () => {
    return (
        <div className='container-fluid'>
            <div className='row'>
                <div className='col-12 d-flex justify-content-between mt-3'>
                    <Tittle type="h2">Dashboard React</Tittle>
                    <Topbar />
                </div>

            </div>
            <hr />
            <div className='row'>
                <div className='col-12'>
                    <Navbar />
                </div>
            </div>
            <div className='row'>
                <div className='col-12 mt-3'>
                    <Dashboard />
                </div>

            </div>

            <div className='row'>
                <div className='col-12 mt-3'>
                    <Tablet />
                </div>
            </div>
        </div>
    )
}

export { DashboardLayout }