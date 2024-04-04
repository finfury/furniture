import React from 'react';
import './MainPage.css'
import Footer from '../../components/Footer/Footer.jsx'
import Header from '../../components/Header/Header.jsx'


function MainPage() {
    return <React.Fragment>
        <Header />
        <main className="main">
            Main page and text is here
        </main>
        <Footer />
    </React.Fragment>
}

export default MainPage;