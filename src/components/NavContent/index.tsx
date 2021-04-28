import { useColorModeValue } from "@chakra-ui/color-mode";

import { Box, Text, Flex, HStack, Button } from "@chakra-ui/react";

import { VscLibrary, VscGraph } from 'react-icons/vsc'
import { RiAdminLine } from 'react-icons/ri'
import { ActiveLink } from "../ActiveLink";
import { NavLink } from "./NavLink";


export function NavContent() {

  const bg = useColorModeValue("white", "#22242C" )

  return (
    <HStack
      h="30px"
      bg={bg}
      px="10px"
      display="flex"
      alignItems="center"
      // spacing="24px"
    >
      
      <NavLink
        icon={<VscGraph />}
        title={"Dashboard"}
        href="/app/dashboard"
      />

      <NavLink
        icon={<VscLibrary />}
        title={"Biblioteca"}
        href="/app/library"
      />

      <NavLink
        icon={<RiAdminLine />}
        title={"Administração"}
        href="/app/admin"
      />

    </HStack>
  )
}