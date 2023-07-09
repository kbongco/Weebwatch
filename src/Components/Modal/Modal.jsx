import { Modal,ModalOverlay, ModalContent, ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton, Box, Flex, Button
} from '@chakra-ui/react'

export default function AnimeModal(props) {
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
              <Button colorScheme='blue' m='8px'>Add to my List</Button>
              <Button colorScheme='red' m='8px'>No, thank you</Button>
            </Flex>
          </Flex>
        </ModalBody>
      </ModalContent>
    </Modal>
  )
}