import React from "react";
import { NavLink } from 'react-router-dom'

const Photos = props => {
    const { picture } = props;
    

    return (
        <div className="picStyle">
        <NavLink to="/picture"><img  src={picture} alt="some text" /></NavLink>
       </div>
    );
};

export default Photos;
