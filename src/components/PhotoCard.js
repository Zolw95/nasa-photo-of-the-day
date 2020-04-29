import React from "react";

const PhotoCard =({ date, explanation, hdurl, title }) => {
    return (
        <div className="photo">
            <h1>Title: {title}</h1>
            <p>Date: {date}</p>
            <img src={hdurl} />
            <p>Explanation: {explanation}</p>
        </div>
    );
};

export default PhotoCard;