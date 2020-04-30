import React from "react";

const header = () => {
    
    return (
        <div className="nav-container">
            <h1>NASA <span role="img" aria-label='go!'>🚀</span></h1>
            <nav>
                <a href="#">Home</a>
                <a href="#">Search</a>
            </nav>
        </div>   
    );
};

export default header;