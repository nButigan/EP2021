import React from 'react';

import classes from './Card.module.css';

const Card = (props) => {
    return (
        
        <div className={classes.card}>
            <img className={classes.card_img} src={props.imgSrc} alt="Card"/>
            <div className={classes.card_text}>
                <p>Lokacija: {props.location} </p>
                <p>Dimenzije: {props.dimensions}</p>
                <button className={classes.card_button}>REZERVIRAJ</button>
            </div>
        </div>
                
    );
};

export default Card;