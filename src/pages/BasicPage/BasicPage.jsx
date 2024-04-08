import React from 'react';
import './BasicPage.css'
import Header from '../../components/Header/Header.jsx'
import {Outlet} from 'react-router-dom'
import Footer from '../../components/Footer/Footer.jsx'


function BasicPage({children}) {
    return <React.Fragment>
        <Header />
        <main className="main">
            {children}
        </main>
        <Footer />
    </React.Fragment>;
}

export default BasicPage;