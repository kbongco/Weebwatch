import { Box, Text, Input, Flex } from '@chakra-ui/react'
import React, { useState, useEffect } from "react";

export default function SearchAnime(props) {

  const [searchedAnime, setSearchedAnime] = useState('');
  const [animeResults, setAnimeResults] = useState([]);
  const handleChange = (e) => {
    setSearchedAnime(e.target.value);
  }

  useEffect(() => {
    const animeResults = props?.anime?.data?.filter((animes) => {
      console.log(animes);
      console.log(animes.title);
      return animes.title.includes(searchedAnime);
    });

    console.log(animeResults);
    setAnimeResults(animeResults);
  }, [searchedAnime]);

  return (
    <>
      <Flex ht='10vh' justify='center' flexDirection='column'>
        <Box pt='64px'>
          <Text>Search to add</Text>
          <Input width='auto' onChange={handleChange} />
        </Box>
        {animeResults?.length === 0 ? <Box>
          <h1>No Anime Yet</h1>
        </Box> : <Box><h1>Yas</h1></Box>}
        {/* <Box mt='24px'>
          <h1>No Anime Yet</h1>
        </Box> */}
      </Flex>
    </>
)
}