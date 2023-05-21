import React from "react";
import digital from './digital.jpg'

function Header (){
    return(
        <>
            <div className="d-flex justify-content arount header">
                <div>
                    <img src="{digital}" alt=""></img>
                </div>
                <div>
                <h1>DigitalFlake</h1>
                </div>
            </div>
        </>

    );
}
export default Header;