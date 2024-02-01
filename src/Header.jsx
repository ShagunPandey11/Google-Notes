import React from "react";
import logo from './Images/Googlekeep.png'

const Header=()=>{
    return(
        <>
         <div className="header">
            <img src={logo} alt="logo" width='100' height='80'/>
            <h1>Google Keep</h1>
         </div>
        </>
    );
};

export default Header;