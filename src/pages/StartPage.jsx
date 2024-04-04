import React, {useEffect} from 'react';
import {Outlet, useNavigate} from 'react-router-dom';


function StartPage(props) {
    const navigate = useNavigate();

    useEffect(() => {
        navigate('main')
    }, [])

    return <React.Fragment>
        <Outlet />
    </React.Fragment>;
}

export default StartPage;