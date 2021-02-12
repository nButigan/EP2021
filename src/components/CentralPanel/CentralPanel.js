import React from 'react';

import classes from './CentralPanel.module.css';
import billboard from './billboard_homepage.jpg';

const CentralPanel = (props) => {
    return (
        <div className={classes.central_div}>
            <img className={classes.central_img} src={billboard} alt="billboard"></img>
            <div className={classes.central_text}>DA PREDSTAVLJANJE BUDE SUVIŠNO</div>
            <a href="/registration"><button className={classes.central_button}>REGISTRIRAJ SE</button></a>
            <p className={classes.loginParagraph}><u>Već imate račun ?</u></p>
        </div>
    );
};

export default CentralPanel;