import { Avatar, Button, Center, Divider, Heading, Popover, PopoverArrow, PopoverBody, PopoverCloseButton, PopoverContent, PopoverHeader, PopoverTrigger, Text, useColorMode } from "@chakra-ui/react";
import { useSession, signIn, signOut } from 'next-auth/client'

export default function Profile() {
  const [session] = useSession();
  const { colorMode} = useColorMode()

  const handleSignout = (e) => {
    e.preventDefault()
    signOut({ callbackUrl: 'http://localhost:3000' })
  }

  return (
    <Popover>
      <PopoverTrigger>
        <Avatar 
          size="sm"
          name={session.user.name}
          cursor="pointer"
          src={session.user.image}
        />
      </PopoverTrigger>
      <PopoverContent>
        <PopoverArrow />
        <PopoverBody
          bg={colorMode === 'light' ? "white" : "#22242C"}
          color={colorMode === 'light' ? 'gray.600' : 'gray.50'}
          py="4"
        >
          <Center flexDirection="column">
            <Avatar 
              size="lg"
              name={session.user.name}
              src={session.user.image}
              mb="2"
            />
            <Heading as="h2" fontSize={18} >{session.user.name}</Heading>
            <Text fontSize={12} color="gray.400" >{session.user.email}</Text>
            <Button
              // w="100%"
              h={8}
              fontSize={16}
              fontWeight="300"
              borderRadius="50"
              variant="outline"
              my="4"
              px="12"

              _hover={{
                bg: "gray.5"
              }}
            >
              <Text fontSize={14}>Gerenciar sua conta</Text>
            </Button>

            <Divider mt="4" />

            <Button
              variant="link"
              fontWeight="300"
              colorScheme="red"
              mt="4"
              onClick={handleSignout}
            >
              Sair
            </Button>
          </Center>
        </PopoverBody>
      </PopoverContent>
    </Popover>
  )
}