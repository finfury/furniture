import React from 'react';
import {Outlet} from 'react-router-dom';
import Header from '../components/Header/Header.jsx'


function StartPage(props) {
    return <>
        <Header/>
        <Outlet />
    </>;
}

export default StartPage;