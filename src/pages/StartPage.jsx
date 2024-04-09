import React from 'react';
import {Outlet} from 'react-router-dom';


function StartPage(props) {
    return <>
        <Outlet />
    </>;
}

export default StartPage;