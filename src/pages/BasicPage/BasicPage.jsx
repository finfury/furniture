import React from 'react';
import Header from '../../components/Header/Header.jsx'
import {Outlet} from 'react-router-dom'
import Footer from '../../components/Footer/Footer.jsx'
import './BasicPage.css'


function BasicPage({children}) {
    return <React.Fragment>
        <main className="main">
            {children}
        </main>
        <Footer />
    </React.Fragment>;
}

export default BasicPage;