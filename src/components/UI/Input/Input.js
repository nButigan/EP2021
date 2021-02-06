import React from 'react';

import classes from './Input.module.css'

const Input = (props) => {
    let inputElement = null;

    switch (props.InputType) {
        case ( 'input' ):
            inputElement = <Input className={classes.InputElement}{...props}/>;
            break;
        case( 'textarea' ):
            inputElement = <textarea className={classes.InputElement}{...props}/>;
            break;
        default:
            inputElement = <Input className={classes.InputElement}{...props}/>;

    }
    return(
        <div className={classes.Input}>
            <label className={classes.Label}>{props.label}</label>
            {inputElement}
        </div>
    );
};

export default Input;