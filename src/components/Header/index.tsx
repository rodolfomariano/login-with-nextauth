import { Button, Center, Divider, Flex, HStack, IconButton, Text, useColorMode } from "@chakra-ui/react";
import Profile from "./Profile";
import { ToggleTheme } from "./toggleTheme";

import { MdHelpOutline } from "react-icons/md"

export function Header() {
  const { colorMode } = useColorMode()

  return (
    <Center
      w="100%"
      bg={colorMode ? '#1F2341' : "white"}
      color={colorMode ? 'white' : 'gray.600'}
    >
      <Flex
        w="100%"
        h="50px"
        px="10px"
        maxWidth="1320px"
        alignItems="center"
        justifyContent="space-between"
      >
        <Text>Header</Text>

        <HStack ml="auto">
          {/* <MdHelpOutline size={22} cursor="pointer" /> */}
          <IconButton 
            variant="link"
            icon={<MdHelpOutline size={22} />}
            aria-label="Ajuda"
            color={colorMode ? 'white' : 'gray.600'}
            _hover={{color: '#FFD827'}}
          />
          <ToggleTheme />
        </HStack>
        <Divider orientation="vertical" mr="20px" ml="20px" h="30px" />
        <Profile />
      </Flex>
    </Center>
  )
}