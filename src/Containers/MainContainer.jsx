import React, { useState, useEffect } from "react";
import axios from 'axios';
import Home from './../Screens/Home/Home'
import SearchAnime from './../Screens/SearchAnime/SearchAnime'
import UserPage from './../Screens/UserPage/UserPage'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

export default function MainContainer() {
  // const [anime, setAnime] = useState([]);
  const [randomAnime, setRandomAnime] = useState([]);
  const [searchedAnime, setSearchedAnime] = useState([]);
  

  useEffect(() => {
    axios.get('https://api.jikan.moe/v4/random/anime').then((response => {
      setRandomAnime(response.data);
    })).catch((err) => {
      console.log(`You sure you want some random anime? You have an error of ${err}`)
    })
  }, []);


  
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home/>} exact/>
        <Route path='/search_anime' element={ <SearchAnime/>} exact/>
        <Route path='/user_anime' element={<UserPage />} exact/>
      </Routes>
    </div>
  )
}