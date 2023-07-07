import { Box, Text, Input, Flex, Image,   Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon } from "@chakra-ui/react";
import React, { useState, useEffect } from "react";
import axios from "axios";

export default function SearchAnime() {
  const [searchedAnime, setSearchedAnime] = useState("");
  const [animeResults, setAnimeResults] = useState([]);
  const [showAnimeDetails, setAnimeDetails] = useState(false);

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

  return (
    <>
      <Flex ht="10vh" justify="center" flexDirection="column">
        <Box pt="64px">
          <Text>Search to add</Text>
          <Input width="auto" onChange={(e) => searchAnime(e.target.value)} />
          <button onClick={handleClick}>Search </button>
          <button onClick={resetField}>Clear</button>
        </Box>
        {animeResults?.length === 0 ? (
          <Box>
            <h1>The anime you are looking for does not exist? </h1>
          </Box>
        ) : (
          <Box mt="24px">
            {animeResults.data.map((anime) => (
              <Accordion key={anime.mal_id} allowToggle>
                <AccordionItem>
                  <h2>
                    <AccordionButton>
                      <Box as="span" flex="1" textAlign="left">
                        {anime.title}
                      </Box>
                      <AccordionIcon />
                    </AccordionButton>
                  </h2>
                  <AccordionPanel pb={4}>
                    <Flex gap='20px'>
                      <Image alignSelf='center' boxSize='150px' src={anime.images.jpg.large_image_url} />
                      {showAnimeDetails ? anime.synopsis : `${anime.synopsis.substring(0, 226)}`}
                    </Flex>
                    {anime.synopsis.length > 220 ? <button onClick={() => setAnimeDetails(true)}>Show More</button> : <button onClick={() => setAnimeDetails(false)}>Show less</button>}
    </AccordionPanel>
                </AccordionItem>
              </Accordion>
            ))}
          </Box>
        )}
      </Flex>
    </>
  );
}
