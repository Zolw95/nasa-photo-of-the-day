import React, { useState, useEffect } from "react";
import PhotoCard from "./PhotoCard";
import axios from "axios";

const Photos = () => {
    const [data, setData] = useState({});
    useEffect(() => {
        axios.get("https://api.nasa.gov/planetary/apod?api_key=KSskAe0iHzffd94lKMInqoszGQiBRuOPdw0fptxN")
        .then(response => {
            console.log("Data in Object", response);
            setData(response.data);
            console.log("Data in Array", data);
        })
        .catch(error => {
            console.log("the data was not returned", error);
        });
    }, []);
    return (
        <PhotoCard title={data.title} date={data.date} hdurl={data.hdurl} explanation={data.explanation}/>
    );
}

export default Photos;