import React from 'react';

import Auxillary from '../../hoc/Auxillary';
import classes from './Services.module.css';

const Services = (props) => {
    return (
        <Auxillary>
        <div className={classes.container}>
            <div className={classes.header}>USLUGE</div>
            <div className={classes.textServices}>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                    Nulla pharetra hendrerit ante, sit amet luctus lectus maximus vitae. 
                    Quisque in risus sollicitudin, accumsan sem eget, tempor leo. Aenean quis rhoncus erat,
                    ac rhoncus elit. Donec vehicula, lectus id facilisis molestie, orci mauris egestas leo, 
                    vitae aliquam lorem erat ac mi. Etiam lobortis lectus non nulla porta bibendum. Sed eros urna, 
                    condimentum sed tellus vitae, interdum imperdiet risus. Morbi lacinia aliquet libero at semper. 
                    Fusce condimentum eget purus quis ullamcorper. Aenean lobortis sollicitudin mauris, 
                    vitae placerat massa auctor at. Aenean in ornare turpis. 
                    Etiam consectetur lectus ut elit scelerisque blandit. Cras consequat nibh eu nunc rutrum cursus. 
                    Suspendisse potenti. Suspendisse quam nisi, blandit a faucibus nec, tristique in mauris.
                </p>
                <p>
                    Nunc lorem libero, bibendum tristique arcu vel, dictum aliquet tellus. 
                    Proin quis neque nec nisl porttitor imperdiet a in lectus. Suspendisse sit amet sem velit. 
                    Vestibulum sit amet tellus id justo pretium varius. Vivamus vitae finibus magna. 
                    Fusce ornare ligula suscipit est feugiat, cursus tincidunt odio consectetur. 
                    Pellentesque hendrerit varius convallis. 
                </p>
                <p>
                    Fusce vel pharetra libero. 
                    Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. 
                    Pellentesque varius, risus sed scelerisque mattis, urna libero accumsan ligula, 
                    in sagittis odio diam.
                </p>
            </div>
        </div>
        <hr/>
        </Auxillary>
    );
};

export default Services;