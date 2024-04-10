import React from 'react';
import './BasicPage.css'
import Footer from '../../components/Footer/Footer.jsx'


function BasicPage({children}) {
    return <React.Fragment>
        <main className="main">
            {children}
        </main>
        <Footer />
    </React.Fragment>;
}

export default BasicPage;