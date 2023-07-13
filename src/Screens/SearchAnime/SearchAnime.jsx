import { Box, Text, Input, Flex,} from "@chakra-ui/react";
import React, { useState, useEffect } from "react";
import axios from "axios";
import AnimeAccordion from "../../Components/Accordion";

export default function SearchAnime() {
  const [searchedAnime, setSearchedAnime] = useState("");
  const [animeResults, setAnimeResults] = useState([]);

  const handleChange = (e) => {
    setSearchedAnime(e.target.value);
  };

  const searchAnime = (searchedAnime) => {
    console.log(searchedAnime);
    setSearchedAnime(searchedAnime);
  };

  const resetField = (e) => {
    e.preventDefault();
    setSearchedAnime("");
    console.log("reset!");
  };

  const handleClick = async () => {
    try {
      console.log("this is working!");
      axios
        .get(`https://api.jikan.moe/v4/anime?q=${searchedAnime}`)
        .then((response) => {
          setAnimeResults(response.data);
          console.log(response.data);
        });
    } catch (err) {
      console.log(err.message);
    }
  };

  const useEnter = (e) => {
    if (e.key === 13) {
      handleClick();
    }
  }

  return (
    <>
      <Flex ht="10vh" justify="center" flexDirection="column">
        <Box pt="64px">
          <Text>Search to add</Text>
          <Input width="auto" onChange={(e) => searchAnime(e.target.value)} onKeyDown={useEnter} />
          <button onClick={handleClick} onKeyDown={useEnter}>Search </button>
          <button onClick={resetField}>Clear</button>
        </Box>
        {animeResults?.length === 0 ? (
          <Box>
            <h1>The anime you are looking for does not exist? </h1>
          </Box>
        ) : (
            <AnimeAccordion animeResults={animeResults} />
        )}
      </Flex>
    </>
  );
}
