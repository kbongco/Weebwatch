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
import { useToast } from '@chakra-ui/react'


export default function AnimeAccordion(props) {
  const [showAnimeDetails, setAnimeDetails] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [animeName, setAnimeName] = useState('');
  const [animeImg, setAnimeImg] = useState('');
  const [animeEpisodes, setAnimeEpisodes] = useState(0);
  const addingAnimeTitle = 'Adding to your list';
  const addingAnimeVerification = 'You are about to add this anime to your list are you sure you want to do this?';
  const addToList = 'Add to my list';
  const cancelAdd = 'Cancel adding'
  const toast = useToast()


  const addToYourList = () => {
    let randomNumber = Math.random().toFixed(2);
    let key = `storedAnime${randomNumber}`;
    const storedAnime = {
      name: animeName,
      totalEpisodes: animeEpisodes,
      image: animeImg
    };
    toast({
      position: 'top',
      title: 'You added an anime to your list',
      description: "Check out the list on your page",
      status: 'success',
      duration: 9000,
      isClosable: true,
    })
    closeModal();
    localStorage.setItem(key, JSON.stringify(storedAnime));
    // will handle duplicate value scenario after user anime page
    //is set up 
  }

  const openModal = () => {
    onOpen();
  }

  const closeModal = () => {
    onClose();
  }

  return (
    <Box mt="24px">
          <button onClick={addToYourList}>RT</button>
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
              <button onClick={() => {
                openModal();
                setAnimeName(anime.title);
                setAnimeImg(anime.images.jpg.image_url);
                setAnimeEpisodes(anime.episodes);
              }} p='8px'>Add to your list</button>
            </Flex>
</AccordionPanel>
        </AccordionItem>
      </Accordion>
    ))}
      {!showModal ? <AnimeModal isOpen={isOpen} onOpen={onOpen} addingAnimeVerification={addingAnimeVerification} addingAnimeTitle={addingAnimeTitle} onClose={onClose} closeModal={closeModal} addToList={addToList} cancelAdd={cancelAdd} addToYourList={addToYourList} /> : ''}
  </Box>
  )
}