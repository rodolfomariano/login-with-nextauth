
import { PageContainer } from "../../components/PageContainer";

import { Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, AspectRatio, Box, Button, Center, Divider, Flex, Grid, Heading, HStack, Image, Input, InputGroup, InputRightAddon, Text, VStack, Wrap, WrapItem } from '@chakra-ui/react'

import { useState } from 'react'
import { useColorModeValue } from '@chakra-ui/color-mode'

import { FiFolderPlus } from "react-icons/fi"
import { FcMenu } from "react-icons/fc"
import { RiLayoutGridFill, RiLayoutRowFill } from "react-icons/ri"
import { BsFillCollectionPlayFill, BsSearch } from "react-icons/bs"
import { IoDocumentText } from "react-icons/io5"
import { MdForum } from "react-icons/md"
import { FaCalendar, FaFileCode } from "react-icons/fa"
import { AiFillFileWord, AiFillFilePdf, AiFillFolder } from "react-icons/ai"
import { SiNextDotJs, SiJavascript } from "react-icons/si"
import { BtnIconWithData } from "../../components/BtnIconWithData";
import { HeaderToPage } from "../../components/HeaderToPage";
import { ContentListClass } from "../../components/ContentListClass";
import { ContentCardClass } from "../../components/ContentCardClass";
import { LibraryNavbar } from "../../components/LibraryNavbar";


export default function Library() {
  const [inStretch, setStretch] = useState(true)
  const [isVisible, setIsVisible] = useState(true)
  const [isGridLayout, setIsGridLayout] = useState(true)

  const bg = useColorModeValue("white", "#22242C")
  const color = useColorModeValue("gray.600", "gray.50")
  const sideNav = useColorModeValue("gray.50", "gray.800")

  function handleSize() {

    if (inStretch === true) {
      setStretch(!inStretch)
      setIsVisible(!isVisible)

    } else {
      setTimeout(() => {
        setIsVisible(!isVisible)
      }, 30)

      setStretch(!inStretch)
    }
  }

  return (
    <PageContainer title="Biblioteca"  >
      <Flex flexDirection="column"
        flex="1"
        w="100%"
        color={color}
      >

        <Flex justifyContent="space-between">


        </Flex>

        <Flex boxShadow="base" borderRadius={10}>

          <LibraryNavbar />

          {/* <Box
            position="relative"
            w={inStretch === true ? "250px" : "50px"}
            transition="20ms"
            borderLeftRadius={10}
            bg={sideNav}
          >
            <Button
              w="50px"
              onClick={handleSize}
              variant="ghost"
              mb="10px"

            >
              <FcMenu />
            </Button>

            <VStack >
              <Button
                w="100%"
                display="flex"
                justifyContent="start"
                fontWeight="400"
                borderRadius={0}
                fontFamily="Nunito"
              >
                <FiFolderPlus size={20} />
                <Text
                  display={isVisible === true ? "block" : "none"}
                  ml="10px"
                >
                  Criar pasta</Text>
              </Button>

              <Accordion allowMultiple w="100%" >
                <AccordionItem
                // pb={2}

                >
                  <AccordionButton
                    w="100%"
                    display="flex"
                    justifyContent="start"
                    fontWeight="400"
                    fontFamily="Nunito"
                  // mb={2}
                  >
                    <AiFillFolder size={20} />
                    <Text
                      display={isVisible === true ? "block" : "none"}
                      ml="10px"
                    >
                      Desenvolvimento web
                    </Text>
                  </AccordionButton>

                  <AccordionPanel w="100%" p={0} pl={2}  >
                    <Button
                      w="100%"
                      display="flex"
                      justifyContent="start"
                      fontWeight="400"
                      borderRadius={0}
                      fontFamily="Nunito"
                      variant="link"
                      fontSize={12}
                      bg={bg}
                      py={3}
                      pl={2}
                      borderLeftRadius="50"
                      _hover={{ bg: bg }}
                    >
                      <SiNextDotJs size={14} />
                      <Text
                        display={isVisible === true ? "block" : "none"}
                        ml="10px"

                      >
                        Criando aplicação com next js
                    </Text>
                    </Button>
                  </AccordionPanel>

                  <AccordionPanel w="100%" p={0} pl={2}   >
                    <Button
                      w="100%"
                      display="flex"
                      justifyContent="start"
                      fontWeight="400"
                      borderRadius={0}
                      fontFamily="Nunito"
                      variant="link"
                      fontSize={12}
                      // bg="white"
                      py={3}
                      pl={2}
                      borderLeftRadius="50"
                      _hover={{ bg: bg }}
                    >
                      <SiJavascript size={14} />
                      <Text
                        display={isVisible === true ? "block" : "none"}
                        ml="10px"

                      >
                        JavaScript moderno
                    </Text>
                    </Button>
                  </AccordionPanel>
                </AccordionItem>
              </Accordion>

            </VStack>

          </Box> */}
          <Box bg={bg} h="100%" flex="1" py="20px" px="20px" borderRightRadius={10} overflowY="auto">

            <HeaderToPage
              title="Criando aplicações com Next JS"
              subTitle="Desenvolvido por: Rodolfo Mariano de Souza"
            >
              <BtnIconWithData
                icon={<BsFillCollectionPlayFill color="purple" size={18} />}
                data={4}
                isActive
              />

              {/* <BtnIconWithData 
              icon={<IoDocumentText color="green" size={18} />}
              data={2}
            />

            <BtnIconWithData 
              data="Total: 5"
            /> */}
            </HeaderToPage>


            <Box>

              <Flex mt="40px" alignItems="flex-end" justifyContent="space-between">

                <Text fontSize={['1rem', 'none', '1.2rem']}>Videos</Text>

                <HStack w="100%" ml="10px" justifyContent="end">
                  <InputGroup size="sm" w="100%" >
                    <Input
                      placeholder="Buscar"
                      variant="filled"
                      borderRadius="20px"
                      fontSize={12}
                      w="10%"
                      ml="auto"
                      _focus={{ w: "100%" }}
                    />
                    <InputRightAddon
                      borderRadius="20px"
                      children={<BsSearch />}
                      cursor="pointer"
                    />
                  </InputGroup>

                  <Button
                    variant="ghost"
                    w="50px"
                    onClick={() => setIsGridLayout(!isGridLayout)}
                  >
                    {isGridLayout === false ? <RiLayoutGridFill /> : <RiLayoutRowFill />}
                  </Button>
                </HStack>

              </Flex>
              <Box width="100%" h="80vh" py="15px">

                {isGridLayout
                  ? (
                    <Wrap spacing="20px" py="15px">
                      <ContentCardClass
                        title="Instalação do Next JS"
                        date="05/10/2022"
                        description="Nesta aula iremos aprende Como instalar o next js e fazer as configurações basicas"
                        hrefForum=""
                        hrefActivity=""
                        hrefPage=""
                        srcVideo="https://player.vimeo.com/video/532024091?color=ffffff&title=0&byline=0&portrait=0&badge=0"
                      >

                      </ContentCardClass>

                    </Wrap>
                  )
                  : (
                    <Box w="100%" h="100%" py="15px" px="2px" overflowY="auto">

                      <ContentListClass
                        title="Instalação do Next JS"
                        date="05/10/2022"
                        description="Nesta aula iremos aprende Como instalar o next js e fazer as configurações basicas"
                        hrefForum=""
                        hrefActivity=""
                        hrefPage=""
                        srcVideo="https://player.vimeo.com/video/532024091?color=ffffff&title=0&byline=0&portrait=0&badge=0"
                      >

                      </ContentListClass>

                    </Box>
                  )

                }


              </Box>


            </Box>

          </Box>
        </Flex>

      </Flex>

    </PageContainer>
  )
}