import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon, Image, Box, Flex
} from '@chakra-ui/react'
import { useDisclosure } from '@chakra-ui/react'

import React, { useState } from "react";
import AnimeModal from '../Components/Modal/Modal'


export default function AnimeAccordion(props) {
  const [showAnimeDetails, setAnimeDetails] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const { isOpen, onOpen, onClose } = useDisclosure()
  const addingAnimeTitle = 'Adding to your list';
  const addingAnimeVerification = 'You are about to add this anime to your list are you sure you want to do this? '

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
              <button onClick={onOpen}p='8px'>Add to your list</button>
            </Flex>
</AccordionPanel>
        </AccordionItem>
      </Accordion>
    ))}
      {showModal ? <AnimeModal isOpen={isOpen} onOpen={onOpen} onClose={onClose} /> : ''}
  </Box>
  )
}