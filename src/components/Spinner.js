import React from 'react';
import spinner from '../gif/spinner.gif';

function Spinner() {
    return (
        <div>
            <img 
                src={spinner}
                style={{ width: '200px', margin: '10px auto', display: 'block' }}
                alt="Loading..."
            />    
        </div>
    )
}

export default Spinner
