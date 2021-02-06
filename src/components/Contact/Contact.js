import React from 'react';

import classes from './Contact.module.css';

const Contact = (props) => {
    return(
        <div className={classes.container}>
            <div className={classes.header}>KONTAKT</div>
            <div className={classes.contactField}>
            <form>

                <label>Ime</label>
                <input type="text" id="fname"  placeholder="Unesi ime.."></input>

                <label>Prezime</label>
                <input type="text" id="lname"  placeholder="Unesi prezime.."></input>

                <label>E-mail</label>
                <input type="text" id="lname"  placeholder="Unesi email.."></input>

                <label>Subject</label>
                <textarea name="subject" placeholder="Poruka.."></textarea>

                <input type="submit" value="Submit"></input>

            </form>
            </div>
        </div>
    );
}

export default Contact;