import { Flex, Text, useColorMode } from "@chakra-ui/react";

export function Sidebar() {
  const { colorMode} = useColorMode()

  return (
    <Flex
      w={240}
      h="calc(100vh - 50px)"
      bg={colorMode ? '#1F2341' : "white"}
      color={colorMode ? 'white' : 'gray.600'}
    >
      <Text>Sidebar</Text>
    </Flex>
  )
}