import {
  Modal, ModalOverlay, ModalContent, ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton, Box, Flex, Button
} from '@chakra-ui/react';
import { useState } from 'react';

export default function AnimeModal(props) {
  console.log(props);

  return (
    <Modal isOpen={props.isOpen} onClose={props.onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>{props.addingAnimeTitle}</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Box p='24px'>
            {props.addingAnimeVerification}
          </Box>
          <Flex p='24px'>
            <Flex justify='center'>
              <Button colorScheme='blue' m='8px'
                onClick={props.addToYourList}>{props.addToList}</Button>
              <Button colorScheme='red' m='8px'>{props.cancelAdd}</Button>
            </Flex>
          </Flex>
        </ModalBody>
      </ModalContent>
    </Modal>
  )
}