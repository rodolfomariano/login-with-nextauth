import { Flex, Text, useColorModeValue } from "@chakra-ui/react";

export function Sidebar() {

  const bg = useColorModeValue("white", "#1F2341" )
  const color = useColorModeValue("gray.600", "gray.50" )

  return (
    <Flex
      w="20%"
      h="calc(100vh - 50px)"
      bg={bg}
      color={color}
      boxShadow="md"
    >
      <Text>Sidebar</Text>
    </Flex>
  )
}