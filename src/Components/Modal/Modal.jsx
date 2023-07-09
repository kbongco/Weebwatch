import { Modal,ModalOverlay, ModalContent, ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton, Box, Flex, ButtonGroup, Button
} from '@chakra-ui/react'

export default function AnimeModal(props) {
  return (
    <Modal isOpen={props.isOpen} onClose={props.onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Adding to your list</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Box p='24px'>
            You are about to add this anime to your list, are you sure you want to do this? 
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