import React from 'react';

import classes from './Layout.module.css';
import Auxillary from '../../hoc/Auxillary';

const Layout = (props) => (
    <Auxillary>
        <main className={classes.Content}>
            {props.children}
        </main>
    </Auxillary>
);

export default Layout;