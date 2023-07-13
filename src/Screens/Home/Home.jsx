import { Flex, Button, Text, Box } from '@chakra-ui/react'

export default function Home() {

  function goToAddPage() {
    // To turn into an actual function once Add Page is completed
    console.log('the button works!')
  }

  return (
    <>
    <Flex bg='#FFBCB3' h='90vh' align='center' flexDirection='column'>
        <Text fontSize='2rem' pt='64px'>My Weeb List</Text>
        <Box>
          <Flex>
            <Text fontSize='2rem' pt='24px' align='center'>A fun way to track anime you've been watching</Text>
          </Flex>
        </Box>
        <Box pt='24px'>
          <Button onClick={goToAddPage} colorScheme='orange' size='lg'>Add some Anime here!</Button>
          </Box>
    </Flex>
    </>
  )
}