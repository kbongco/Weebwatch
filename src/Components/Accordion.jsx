import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon, Image, Box, Flex
} from '@chakra-ui/react'

import React, { useState } from "react";


export default function AnimeAccordion(props) {
  const [showAnimeDetails, setAnimeDetails] = useState(false);

  return (
    <Box mt="24px">
    {props.animeResults.data.map((anime) => (
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
            <Flex justify='end'>
            <button onClick={() => setAnimeDetails(!showAnimeDetails)}>
              {!showAnimeDetails ? 'Show More' : 'Show Less'}
              </button>
            <button p='8px'>Add to your list</button>
            </Flex>
</AccordionPanel>
        </AccordionItem>
      </Accordion>
    ))}
  </Box>
  )
}