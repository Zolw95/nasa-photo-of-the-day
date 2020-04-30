import React, { useState, useEffect } from "react";
import { UncontrolledCarousel } from 'reactstrap';
import PhotoCard from "./PhotoCard";
import axios from "axios";

const Photos = () => {
    const [data, setData] = useState([]);
    const today = new Date();
    const endDay = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
    var pastDay = new Date();
    pastDay.setTime(pastDay.getTime() - (7*24*3600000));
    const startDay = pastDay.getFullYear() + '-' + (pastDay.getMonth() + 1) + '-' + pastDay.getDate();


    useEffect(() => {
        axios.get(`https://api.nasa.gov/planetary/apod?start_date=${startDay}&end_date=${endDay}&api_key=KSskAe0iHzffd94lKMInqoszGQiBRuOPdw0fptxN`)
        .then(response => {
            console.log("Data in Object", response);
            let items = response.data.map(picture => {
                if (picture.media_type != "image") {
                    //console.log("not image", picture)
                    return false;
                }
                return {
                    src: picture.hdurl,
                    altText: picture.title,
                    caption: picture.explanation,
                    header: picture.title,
                    key: picture.date
                }
            })
            let filteredItems = items.filter(item => item != false) 
  
            setData(filteredItems);
            //console.log("Data in Array", filteredItems);
        })
        .catch(error => {
            console.log("the data was not returned", error);
        });
    }, []);
    return (
        <UncontrolledCarousel items={data} />
    );
}

export default Photos;