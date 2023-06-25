import React, { useState, useEffect } from "react";
import axios from 'axios';

export default function MainContainer() {
  const [anime, setAnime] = useState([]);

  useEffect(() => {
    axios.get('https://api.jikan.moe/v4/anime').then((response) => {
      console.log(response);
      setAnime(response.data);
    }).catch((err) => {
      console.log(`You couldn't catch any anime, because we have a ${err} error`);
    });
  }, []);
  
  return (
    <div>
      <h1>Test</h1>
    </div>
  )
}