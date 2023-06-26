import { Box, Text, Input } from '@chakra-ui/react'
import React, { useState, useEffect } from "react";

export default function SearchAnime(props) {

  const [searchedAnime, setSearchedAnime] = useState('');
  const [animeResults, setAnimeResults] = useState([]);
  
  return (
    <>
      <Box ht='10vh'>
        <Box pt='64px'>
          <Text>Search to add</Text>
          <Input width='auto'/>
        </Box>
      </Box>
    </>
)
}