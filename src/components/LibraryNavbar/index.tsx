import { Box, Button, Flex, Tab, TabList, TabPanel, TabPanels, Tabs, Text, useColorModeValue, VStack } from "@chakra-ui/react";
import { useState } from "react";
import { AiFillPlusCircle } from "react-icons/ai";
import { FcMenu } from "react-icons/fc";
import { FiFolderPlus } from "react-icons/fi";

import { CategoryContainer } from "./CategoryContainer";

const dataCourse = [
  {
    title: "Criando aplicação com next js"
  },
  {
    title: "Aula 1"
  },
  {
    title: "Aula 2"
  },
  {
    title: "Aula 3"
  }
]

const dataFolders = [
  {
    titleOfFolder: "Desenvolvimento web",
    content: [
      {
        title: "Criando aplicação com next js",
      },
      {
        title: "CSS Avançado"
      },
      {
        title: "Serveless"
      },
    ]
  },
  {
    titleOfFolder: "Banco de dados",
    content: [
      {
        title: "SQL Server"
      },
    ]
  },
  {
    courseOutFolder: [
      {
        title: "Banco de dados MongoDB"
      }
    ]
  }
]


export function LibraryNavbar() {
  const [inStretch, setStretch] = useState(true)
  const [isVisible, setIsVisible] = useState(true)
  const [folderInFocus, setFolderInFocus] = useState()


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
            <VStack flex="1" w="100%" >
              <Button
                w="100%"
                display="flex"
                justifyContent="start"
                fontWeight="400"
                borderRadius={0}
                fontFamily="Nunito"
                bg={createCategoryBgColor}
                _hover={{ bg: createCategoryHoverColor }}
              >
                <FiFolderPlus size={20} />
                <Text
                  display={isVisible === true ? "block" : "none"}
                  ml="10px"
                >
                  Criar categoria</Text>
              </Button>

              <Flex w="100%" flexDirection="column">
                {dataFolders.map(item => (
                  <CategoryContainer
                    titleOfFolder={item.titleOfFolder}
                    content={item}
                    isVisible={isVisible}
                  />
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