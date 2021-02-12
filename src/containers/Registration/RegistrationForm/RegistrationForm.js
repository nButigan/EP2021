import React from 'react';

import classes from './RegistrationForm.module.css';

const RegistrationForm = (props) => {
    return(
        <div className={classes.container}>
            <div className={classes.header}>REGISTRACIJA</div>
            <div className={classes.contactField}>
            <form>

                <label>Ime</label>
                <input type="text" id="fname"  placeholder="Unesi ime.."></input>

                <label>Prezime</label>
                <input type="text" id="lname"  placeholder="Unesi prezime.."></input>

                <label>Kontakt broj:</label>
                <input type="text" id="kbroj"  placeholder="Unesi broj.."></input>


                <label>E-mail</label>
                <input type="text" id="lname"  placeholder="Unesi email.."></input>

                <input type="submit" value="Registriraj se"></input>

            </form>
            </div>
        </div>
    );
}

export default RegistrationForm;