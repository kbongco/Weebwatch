import {
  Modal, ModalOverlay, ModalContent, ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton, Box, Flex, Button
} from '@chakra-ui/react';


export default function AnimeModal(props) {
  // need to fix props to be more dynamic and not just for adding in anime, but for deleting anime as well.

  return (
    <Modal isOpen={props.isOpen} onClose={props.closeModal}>
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
              <Button colorScheme='red' m='8px' onClick={props.onClose}>{props.cancelAdd}</Button>
            </Flex>
          </Flex>
        </ModalBody>
      </ModalContent>
    </Modal>
  )
}