import React from 'react';

import Auxillary from '../../hoc/Auxillary';
import classes from './AboutUs.module.css';

const AboutUs = (props) => {
    return (
        <Auxillary>
        <div className={classes.container}>
            <div className={classes.header}>O NAMA</div>
                <div className={classes.textAboutUs}>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec id libero ac libero congue elementum. Sed sed auctor velit. 
                        Sed lacinia justo varius massa viverra blandit. Proin in imperdiet arcu. Donec in pulvinar diam. 
                        Sed commodo nulla nec gravida tristique. Vivamus auctor lacus lectus. Sed quis elit venenatis, 
                        condimentum ligula quis, viverra diam. Maecenas dapibus, metus pharetra convallis mattis, 
                        diam tortor consequat tellus, non congue lectus nunc id nulla. Nam rutrum volutpat risus. 
                        Duis ac sapien eget elit aliquam ullamcorper. Aliquam vel est tincidunt, lacinia metus et, tincidunt neque. 
                        Quisque non accumsan mi. Nunc vel turpis a leo viverra ullamcorper. Pellentesque molestie quam eget 
                        magna ullamcorper aliquet.
                    </p>
                    
                    <p>
                        Vestibulum orci eros, vulputate a justo sed, egestas blandit arcu. 
                        Praesent semper placerat lacus a feugiat. Sed maximus ultricies molestie. 
                        Nulla tincidunt molestie vestibulum. Interdum et malesuada fames ac ante ipsum primis in faucibus. 
                        Mauris sagittis diam augue, a fermentum purus finibus eget. Suspendisse euismod feugiat magna, 
                        ac elementum erat. Duis varius sagittis pharetra.
                    </p>
                    
                    <p>
                        Vestibulum eget ex ipsum. Sed congue accumsan varius. Nunc accumsan, lacus sed faucibus lobortis,
                        purus neque tempus enim, id tincidunt mauris tellus et ligula. Donec nibh nibh, 
                        blandit ac facilisis sed, mollis non mauris. Vivamus eu quam id turpis.
                    </p>
                </div>
        </div>
        <hr/>
        </Auxillary>
    );
};

export default AboutUs;