import React from "react";
import { Link } from 'react-router-dom';

const Malcolm = () => {

    return (
        <div>
            <h3>About Malcolm</h3>
            <p>Hello I am Malcolm!</p>
            <Link to='/'>Go back</Link>
        </div>
    )
};

export default Malcolm;