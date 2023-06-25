
import { useState } from 'react'
import {
  useColorMode,
  Switch,
  Flex,
  Button,
  IconButton,
  Link
} from '@chakra-ui/react'
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons'
import './NavBar.scss'


export const NavBar = () => {
  const { colorMode, toggleColorMode } = useColorMode()
  const [display, changeDisplay] = useState('none')
  return (
    <div className='chbi-weebwatch-navbar'>
    <Flex>
      <Flex
        position="fixed"
        top="1rem"
        right="1rem"
        align="center"
      >
        
        {/* Mobile */}
        <IconButton
          aria-label="Open Menu"
          size="lg"
            mr={2}
            bg='#FBEFB3'
          icon={
            <HamburgerIcon
           />
          }
          onClick={() => changeDisplay('flex')}
          display={['flex', 'flex', 'none', 'none']}
        />
      </Flex>

      {/* Mobile Content */}
      <Flex
        w='100vw'
        display={display}
        bgColor='#FBEFB3'
        zIndex={20}
        h="100vh"
        pos="fixed"
        top="0"
        left="0"
        overflowY="auto"
        flexDir="column"
      >
        <Flex justify="flex-end">
          <IconButton
            mt={2}
            mr={2}
            aria-label="Open Menu"
            size="lg"
            icon={
              <CloseIcon />
            }
            bg='#FBEFB3'
            onClick={() => changeDisplay('none')}
          />
        </Flex>

        <Flex
          flexDir="column"
          align="center"
          >
            <Link
            fontSize='3xl'
            padding={24}>
              Home</Link>
            <Link
            fontSize='3xl'
            padding={24}>
              Search</Link>
            <Link
              fontSize='3xl'
              padding={24}>
              Your List</Link>
        </Flex>
      </Flex>
      </Flex>
      </div>
  )
}