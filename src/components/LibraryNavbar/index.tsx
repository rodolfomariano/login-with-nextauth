import { Accordion, AccordionItem, Box, Button, Flex, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Tab, TabList, TabPanel, TabPanels, Tabs, Text, useColorModeValue, useDisclosure, useToast, VStack } from "@chakra-ui/react";
import { useState } from "react";
import { AiFillPlusCircle } from "react-icons/ai";
import { FcMenu } from "react-icons/fc";
import { FiFolderPlus } from "react-icons/fi";

import { CgTag } from "react-icons/cg";

import { CategoryContainer } from "./CategoryContainer";
import { CategoryItem } from "./CategoryItem";
import { SiJavascript } from "react-icons/si";

const dataCourse = [
  {
    title: "Criando aplicação com next js",
    inFolder: true,
    folderTag: "Desenvolvimento web",
    icon: "FiFolderPlus",
  }, 
  {
    title: "Iniciando em VueJS",
    inFolder: true,
    folderTag: "Desenvolvimento web",
    icon: "CgTag",
  },
  {
    title: "Fundamento em MongoDB",
    inFolder: true,
    folderTag: "Banco de dados",
    icon: "CgTag",
  },
  {
    title: "Curso de Git",
    inFolder: false,
    folderTag: "",
    icon: "CgTag",
  }
]

const dataFolders = [
  {
    titleOfFolder: "Desenvolvimento web",
    titleIsEdited: false,
    newTitle: ''
  },
  {
    titleOfFolder: "Banco de dados",
    titleIsEdited: false,
    newTitle: ''
  },
]


export function LibraryNavbar() {
  const [inStretch, setStretch] = useState(true)
  const [isVisible, setIsVisible] = useState(true)
  const [folderInFocus, setFolderInFocus] = useState()
  const [isActiveBtn, setIsActiveBtn] = useState('')
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [createFolderValue, setCreateFolderValue] = useState('')
  const toast = useToast()

  const bg = useColorModeValue("white", "#22242C")
  const sideNav = useColorModeValue("#EEEEEE", "gray.800")
  const baseColor = useColorModeValue("#ADBAC7", "gray.600")
  const bgBtnAddLink = useColorModeValue("#cae2d1", "#202736")
  const colorBtnAddLink = useColorModeValue("#818e9b", "gray.600")
  const createCategoryBgColor = useColorModeValue("#e9e6e6", "#1f2735")
  const createCategoryHoverColor = useColorModeValue("#dddbdb", "#1d2431")

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

  function handleClick(title) {
    dataCourse.forEach(item => item.title === title && setIsActiveBtn(title))
  }

  function createFolder() {
    dataFolders.push({ titleOfFolder: createFolderValue, titleIsEdited: false, newTitle: '' })
    onClose()
    toast({
      title: `Cateroria ${createFolderValue} criada com sucesso!`,
      status: 'success',
      position: 'top',
      duration: 4000,
      isClosable: true,
    })
  }

  return (
    <Box
      position="relative"
      w={inStretch === true ? "250px" : "50px"}
      transition="20ms"
      borderLeftRadius={10}
      bg={sideNav}
      color={baseColor}
    >

      <Flex alignItems="center" >
        <Button w="50px" onClick={handleSize} variant="ghost" mb="10px">
          <FcMenu />
        </Button>

        <Button
          flex="1"
          display={isVisible === true ? "flex" : "none"}
          leftIcon={<AiFillPlusCircle size={24} />}
          bg={bgBtnAddLink}
          mx="10px"
          variant="ghost"
          borderRadius="50px"
          fontFamily="Nunito"
          color={colorBtnAddLink}
          _hover={{ bg: createCategoryHoverColor }}
        >
          Add link
        </Button>
      </Flex>

      <Tabs >
        <TabList
          flex="1"
          display={isVisible === true ? "flex" : "none"}
          fontFamily="Nunito"
        >
          <Tab flex="1">Usuario</Tab>
          <Tab flex="1">Autor</Tab>
        </TabList>

        <TabPanels >
          <TabPanel flex="1" px={0}>
            <VStack flex="1" w="100%" overflowY="auto" >
              <Button
                w="100%"
                display="flex"
                justifyContent="start"
                fontWeight="400"
                borderRadius={0}
                fontFamily="Nunito"
                bg={createCategoryBgColor}
                _hover={{ bg: createCategoryHoverColor }}
                onClick={onOpen}
              >
                <FiFolderPlus size={20} />
                <Text
                  display={isVisible === true ? "block" : "none"}
                  ml="10px"
                >
                  Criar categoria</Text>
              </Button>

              <Modal isOpen={isOpen} onClose={onClose} >
                <ModalOverlay />
                <ModalContent fontFamily="Nunito" bg={sideNav}>
                  <ModalHeader>Criar categoria</ModalHeader>
                  {/* <ModalCloseButton /> */}
                  <ModalBody>
                    <Input 
                      isRequired
                      onChange={event => setCreateFolderValue(event.target.value)}
                      placeholder="Digite o nome da categoria" 
                    />
                  </ModalBody>

                  <ModalFooter>
                    <Button variant="ghost" mr={3} onClick={onClose}>
                      Cancelar
                    </Button>
                    <Button colorScheme="blue" onClick={createFolder}>Criar</Button>
                  </ModalFooter>
                </ModalContent>
              </Modal>

              <Flex w="100%" flexDirection="column">
                {dataFolders.map(item => (
                  <CategoryContainer
                    key={item.titleOfFolder}
                    titleOfFolder={item.titleIsEdited === true ? item.newTitle : item.titleOfFolder}
                    // dataCourse={dataCourse.map(course => course.inFolder === true && course)}
                    isVisible={isVisible}
                    // dataFolder={dataFolders}
                  >
                    {dataCourse.map(course => {
                      if(course.folderTag === item.titleOfFolder) {
                        return (
                          <CategoryItem
                            key={course.title}
                            isVisible={isVisible}
                            icon={<CgTag size={14} />}
                            title={course.title}
                            bg={course.folderTag === item.titleOfFolder && isActiveBtn === course.title && bg}
                            onClick={() => handleClick(course.title)}
                            isActiveBtn={isActiveBtn}
                          />
                        )
                      }
                    })}
                  </CategoryContainer>
                ))}


                {dataCourse.map(course => (
                  course.inFolder === false && 
                  <Box
                    w="100%"
                    pl={3}
                  >
                    <CategoryItem 
                      key={course.title}
                      title={course.title}
                      isVisible={isVisible}
                      icon={<CgTag size={14} />}
                      bg={isActiveBtn === course.title && bg}
                      onClick={() => handleClick(course.title)}
                      isActiveBtn={isActiveBtn}
                      
                    />
                  </Box>
                ))}



              </Flex>

            </VStack>
          </TabPanel>

          <TabPanel px={0}>
            <Flex flex="1" bg="blue">oi</Flex>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Box>
  )
}