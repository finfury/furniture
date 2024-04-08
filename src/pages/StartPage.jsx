import React from 'react';
import {Outlet} from 'react-router-dom';


function StartPage(props) {
    return <React.Fragment>
        <Outlet />
    </React.Fragment>;
}

export default StartPage;