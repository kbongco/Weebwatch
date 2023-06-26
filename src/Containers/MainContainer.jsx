import React, { useState, useEffect } from "react";
import axios from 'axios';
import Home from './../Screens/Home/Home'

export default function MainContainer() {
  const [anime, setAnime] = useState([]);
  const [randomAnime, setRandomAnime] = useState([]);

  useEffect(() => {
    axios.get('https://api.jikan.moe/v4/anime').then((response) => {
      console.log(response);
      setAnime(response.data);
    }).catch((err) => {
      console.log(`You couldn't catch any anime, because we have a ${err} error`);
    });
  }, []);

  useEffect(() => {
    axios.get('https://api.jikan.moe/v4/random/anime').then((response => {
      console.log(response);
      setRandomAnime(response.data);
    })).catch((err) => {
      console.log(`You sure you want some random anime? You have an error of ${err}`)
    })
  }, []);
  
  return (
    <div>
      <Home/>
    </div>
  )
}