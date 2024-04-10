import React, {useEffect} from 'react';
import {Outlet, useNavigate} from 'react-router-dom';
import Header from '../components/Header/Header.jsx'


function StartPage(props) {
    const navigate = useNavigate()

    useEffect(() => {
        navigate('main')
    }, [])

    return <div className={"wrapper"}>
        <Header/>
        <Outlet />
    </div>;
}

export default StartPage;