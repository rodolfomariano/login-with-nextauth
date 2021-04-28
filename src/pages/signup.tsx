import { Center, Heading, VStack, Text, Flex, Link, Button, Box, Divider, Grid, useColorModeValue } from "@chakra-ui/react";

import ReCAPTCHA from "react-google-recaptcha"
import { GoEye, GoEyeClosed, GoLock, GoMail, GoPerson } from "react-icons/go";

import { ImExit } from 'react-icons/im'
import { InputWithIcon } from "../components/InputWithIcon";

export default function SignUp() {
  const bg = useColorModeValue("white", "#22242C" )

  function onChange(value) {
    console.log("Captcha value:", value);
  }

  return (
    <Center w="100vw" h="100vh">
      <VStack
        w="350px"
        h="540px"
        bg={bg}
        boxShadow="base"
        py="1.5rem"
        px="1rem"
        borderRadius={20}
        spacing="24px"
      >
        <Flex
          w="100%"
          alignItems="center"
          justifyContent="space-between"
        >
          <Heading as="h1" fontSize={24}>Criar conta</Heading>
          <Link href="/">
            <Button
              // bg="red.300"
              colorScheme="red"
              fontSize={18}
              variant="link"
            > 
              <Text mr="2" fontSize={14}>voltar</Text> <ImExit />
            </Button>
          </Link>
        </Flex>

        <Divider />

        <Grid gap="2" mt="4" >
          <InputWithIcon 
            leftIcon={<GoPerson size={18} />}
            placeholder="Digite seu nome"
            type="text"
            variant="filled"
            borderRadius={10}
            isRequired
            fontSize="sm"
          />

          <InputWithIcon 
            leftIcon={<GoMail size={18} />}
            placeholder="Digite seu email"
            type="email"
            variant="filled"
            borderRadius={10}
            isRequired
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
            isRequired
            fontSize="sm"
          />

          <InputWithIcon 
            type="password"
            leftIcon={<GoLock size={18} />}
            rightIcon={<GoEye />}
            rightSecondIcon={<GoEyeClosed />}
            placeholder="Confirm sua senha"
            variant="filled"
            borderRadius={10}
            isRequired
            fontSize="sm"
          />
        </Grid>

        <Center flexDirection="column" >
          <ReCAPTCHA
            sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}
            onChange={onChange}
            data-size="compact"
          />
        <Center 
          fontSize={12}
          flexDirection="column"
          mt="2"
        >
          <Text>
            Ao se registrar, você aceita nossos <strong>termos de uso</strong>
          </Text>
          <Text>
            e a nossa <strong>política de privacidade</strong>.
          </Text>
        </Center>
        </Center>

        <Button
          w="100%"
          h="50px"
          colorScheme="telegram"
          borderRadius={10}
          mt="4"
          type="submit"
          fontFamily="Nunito"
        >
          Cadastrar
        </Button>

      </VStack>
    </Center>
  )
}