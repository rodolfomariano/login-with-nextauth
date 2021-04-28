import { Box, Button, Center, Divider, Flex, HStack, IconButton, Text, useColorModeValue } from "@chakra-ui/react";
import Profile from "./Profile";
import { ToggleTheme } from "./toggleTheme";

import { MdHelpOutline } from "react-icons/md"
import { NavContent } from "../NavContent";

export function TopBar() {
  
  const bg = useColorModeValue("white", "#22242C" )
  const color = useColorModeValue("gray.600", "gray.50" )

  return (
    <Center
      w="100%"
      bg={bg}
      color={color}
      boxShadow="md"
    >
      <Center
        w="100%"
        h="50px"
        px="10px"
        maxWidth="1320px"
        alignItems="center"
        justifyContent="space-between"
      >
        <Text>Header</Text>

        <NavContent  />

        
        <Flex>

          <HStack>
            <IconButton 
              variant="link"
              icon={<MdHelpOutline size={22} />}
              aria-label="Ajuda"
              color={color}
              _hover={{color: '#FFD827'}}
            />
            <ToggleTheme />
          </HStack>

          <Divider
            orientation="vertical"
            mr="20px"
            ml="20px"
            h="30px"
          />
          <Profile />

        </Flex>
      </Center>
    </Center>
  )
}