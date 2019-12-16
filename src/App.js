import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import Header from "./components/Header";
import PreviousImg from "./components/PreviousImg";
import styled from "styled-components";

const MainImg = styled.img`
  width: 100%;
`

function App() {
  const [img, setimg] = useState([]);

  useEffect(() => {
    axios
      .get('https://api.nasa.gov/planetary/apod?api_key=a4pkiWLShGq24Hzq4PUekUoavqx0kCXgaOXoT51N')
    .then(response => {
      setimg(response.data);
    })
    .catch(response => {
      console.log(response);
    })
  }, [])
  return (
    <div className="App">
      <Header />
      <MainImg src={img.hdurl} alt="NASA Photo of the Day"/>
      <div className="info">
        <h1>NASA Astronomy Picture of the Day</h1>
        <h3>{img.title}</h3>
        <p>
          {img.explanation}
        </p>
      </div>
      <PreviousImg />
    </div>
  );
}

export default App;
