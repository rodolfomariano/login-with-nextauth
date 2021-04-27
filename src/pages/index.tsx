import { Center, Divider, Flex, Heading, Link, Stack, Text, VStack } from '@chakra-ui/layout'
import { signIn, signOut, useSession } from 'next-auth/client'
import { useRouter } from 'next/dist/client/router'
import { useEffect } from 'react'


import { BtnLoginSocial } from '../components/BtnLoginSocial'

import { GoMarkGithub, GoLock, GoEyeClosed, GoEye } from "react-icons/go"
import { FaGoogle } from "react-icons/fa"
import { InputWithIcon } from '../components/InputWithIcon'
import { GoMail } from "react-icons/go"
import { FormControl } from '@chakra-ui/form-control'
import { Button } from '@chakra-ui/button'
import { Popover, PopoverArrow, PopoverBody, PopoverCloseButton, PopoverContent, PopoverHeader, PopoverTrigger } from '@chakra-ui/popover'

export default function Home() {
  const [session, setSession] = useSession()

  const router = useRouter()

  useEffect(() => {
    session && router.push('/app/dashboard')
  }, [session])



  return (
    <>
      <Center w="100vw" h="100vh" >
       <VStack
         w="350px"
         h="500px"
         bg="white"
         boxShadow="base"
         py="1.5rem"
         px="1rem"
         borderRadius={20}
         spacing="24px"
       >
          <Heading fontSize="1.5rem">
            Logn In
          </Heading>

          <VStack w="100%" >
            <BtnLoginSocial 
              provider="github"
              callbackUrl="http://localhost:3000/app/dashboard"
              icon={<GoMarkGithub size={20} />}
              fontSize="14px"
              title="Logar com GitHub"
              borderRadius={50}
              // bg="#333"
              // color="white"
              // _hover={{ bg: '#4A4346' }}
              bg="#EDF2F7"
            />

            <BtnLoginSocial 
              provider="google"
              callbackUrl="http://localhost:3000/app/dashboard"
              icon={<FaGoogle size={20} />}
              fontSize="14px"
              borderRadius={50}
              title="Logar com Google"
              // colorScheme="red"
              bg="#EDF2F7"
            />
          </VStack>

          <Center w="100%" h="20px" position="relative" alignItems="center" >
            <Divider />
            <Center
              position="absolute"
              zIndex="5"
              w="40px"
              h="40px"
              borderRadius={50}
              alignItems="center"
              bg="white"
            >
              <Text color="gray.300">ou</Text>
            </Center>

          </Center>

          <Stack>
            <InputWithIcon 
              leftIcon={<GoMail size={18} />}
              placeholder="Digite seu email"
              type="email"
              variant="filled"
              borderRadius={10}
              // isRequired
              fontSize="sm"
            />

            <InputWithIcon 
              type="password"
              leftIcon={<GoLock size={18} />}
              rightIcon={<GoEye />}
              rightSecondIcon={<GoEyeClosed />}
              placeholder="Digite sua senha"
              variant="filled"
              borderRadius={10}
              // isRequired
              fontSize="sm"
            />
            <Center flexDirection="column">

              <Button
                w="100%"
                h="50px"
                colorScheme="telegram"
                borderRadius={10}
                fontFamily="Nunito"
                type="submit"
              >
                Logar
              </Button>

              <Popover>
                <PopoverTrigger>
                  <Text fontSize={12} color="orange.700" cursor="pointer">Esqueceu a senha</Text>
                </PopoverTrigger>
                <PopoverContent>
                  <PopoverArrow />
                  <PopoverCloseButton />
                  <PopoverHeader>Recuperar a senha</PopoverHeader>
                  <PopoverBody>
                    <InputWithIcon 
                      leftIcon={<GoMail size={18} />}
                      placeholder="Digite seu email cadastrado"
                      type="email"
                      variant="filled"
                      borderRadius={10}
                      // isRequired
                      fontSize="sm"
                    />
                    <Button
                      w="100%"
                      mt="10px"
                      colorScheme="orange"
                      borderRadius={10}
                    >
                      Recuperar
                    </Button>
                  </PopoverBody>
                </PopoverContent>
              </Popover>

              <Link
                mt="30px"
                cursor="pointer"
                color="green.600"
                href="/signup"
              >
                Criar conta
              </Link>
            </Center>
          </Stack>


        </VStack>
      </Center>
    </>
  )
}
