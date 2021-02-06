import React from 'react';

import classes from './Billboards.module.css';
import Auxillary from '../../hoc/Auxillary';
import Card from './Card/Card';
import MostarPanel from './MostarPanel.jpg';
import CapljinaPanel from './CapljinaPanel.jpg';
import GrudePanel from './GrudePanel.jpg';
import SirokiBrijegPanel from './SirokiBrijegPanel.jpg';


const Billboards = (props) => {
    return (
        <Auxillary>
        <div className={classes.container}>
            <div className={classes.header}>PANELI</div>
                <div className={classes.card_container}>
                    <Card imgSrc={MostarPanel} alt="Mostar" location={'Mostar'} dimensions={'10x10'}/>
                    <div className={classes.spaceBetween}/>
                    <Card imgSrc={CapljinaPanel} alt="Capljina" location={'Čapljina'} dimensions={'10x10'}/>
                    <div className={classes.spaceBetween}/>
                    <Card imgSrc={GrudePanel} alt="Grude" location={'Grude'} dimensions={'10x10'}/>
                    <div className={classes.spaceBetween}/>
                    <Card imgSrc={SirokiBrijegPanel} alt="SirokiBrijeg" location={'Široki Brijeg'} dimensions={'10x10'}/>
                </div>
        </div>
        <hr/>
        </Auxillary>
    );
};

export default Billboards;