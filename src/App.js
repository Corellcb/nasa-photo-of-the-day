import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [img, setimg] = useState([]);

  useEffect(() => {
    axios
    .get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY')
    .then(response => {
      setimg(response.data);
      console.log(response.data);
    })
    .catch(response => {
      console.log(response);
    })
  }, [])
  return (
    <div className="App">
      <img src={img.hdurl} />
      <div className="info">
        <h1>NASA APOD</h1>
        <h3>{img.title}</h3>
        <p>
          {img.explanation}
        </p>
      </div>
    </div>
  );
}

export default App;
