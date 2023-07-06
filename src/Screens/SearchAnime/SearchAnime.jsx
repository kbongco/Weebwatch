import { Box, Text, Input, Flex } from '@chakra-ui/react'
import React, { useState, useEffect } from "react";
import axios from 'axios';

export default function SearchAnime() {

  const [searchedAnime, setSearchedAnime] = useState('');
  const [animeResults, setAnimeResults] = useState([]);
  const handleChange = (e) => {
    setSearchedAnime(e.target.value);
  }

  const searchAnime = (searchedAnime) => {
    console.log(searchedAnime);
    setSearchedAnime(searchedAnime);
  }

  useEffect(() => {
    axios.get(`https://api.jikan.moe/v4/anime?q=${searchedAnime}`).then((response) => {
      console.log(response);
      console.log(searchedAnime);
      setSearchedAnime(response.data);
    }).catch((err) => {
      console.log(`You got an error, ${err}`)
      console.log(err);
    })
  }, []); 

  // useEffect(() => {
  //   const animeResults = searchedAnime?.data?.filter((animes) => {
  //     console.log(searchedAnime);
  //     // console.log(animes);
  //     // console.log(animes.title);
  //     return animes.title.includes(searchedAnime);
  //   });

  //   // console.log(animeResults);
  //   setAnimeResults(animeResults);
  // }, [searchedAnime]);

  return (
    <>
      <Flex ht='10vh' justify='center' flexDirection='column'>
        <Box pt='64px'>
          <Text>Search to add</Text>
          <Input width='auto' onChange={ (e) => searchAnime(e.target.value)} />
        </Box>
        {animeResults?.length === 0 ? <Box>
          <h1>The anime you are looking for does not exist? </h1>
        </Box> : <Box mt='64px'>{animeResults?.title}</Box>}
      </Flex>
    </>
)
}