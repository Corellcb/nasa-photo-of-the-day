import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";

const PreviousHeading = styled.h2`
    color: white;
    padding: 2% 0;
`

const PreviousDiv = styled.div`
    display: flex;
    justify-content: space-between;
    width: 99%;
    margin: auto;
    background: whitesmoke;
`

const Img = styled.img`
    width: 55%;
`

const InfoBox = styled.div`
    text-align: center;
    width: 45%;
    padding: 2% 5%;
`

export default function PreviousImg(){
    const [link, setLink] = useState([]);
    const d = new Date();
    const previousDate = `${d.getFullYear()}-${d.getMonth() + 1}-${d.getDate() - 1}`;



    useEffect(() => {
        axios
            .get(`https://api.nasa.gov/planetary/apod?api_key=a4pkiWLShGq24Hzq4PUekUoavqx0kCXgaOXoT51N&date=${previousDate}`)
        .then(response => {
            setLink(response.data);
            console.log(response.data);
        })
    }, [])
    return (
        <div>
            <PreviousHeading>Previous Picture of the Day</PreviousHeading>
            <PreviousDiv>
                <Img src={link.hdurl} />
                <InfoBox>
                    <h3>{link.title}</h3>
                    <h4>{link.date}</h4>
                    <p>{link.explanation}</p>
                </InfoBox>
            </PreviousDiv>
        </div>
    )
}
