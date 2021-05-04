import { Accordion, AccordionButton, AccordionItem,  AccordionPanel, Button, Popover, PopoverBody, PopoverCloseButton, PopoverContent, PopoverTrigger, Text, useColorModeValue, VStack } from "@chakra-ui/react";
import { MouseEvent, ReactNode, useState } from "react";
import { AiFillFolder } from "react-icons/ai";
import { FaRegEdit, FaRegTrashAlt } from "react-icons/fa";

interface DataFolder {
  titleOfFolder: string
  titleIsEdited: boolean,
  newTitle: string
}

interface DataCurse {
  title: string
  inFolder: boolean
  folderTag: string
  icon: string
}


interface CategoryContainerProps {
  titleOfFolder?: string
  isVisible: boolean
  children: ReactNode
  // dataCourse?: DataCurse[]
  // dataFolder?: DataFolder[]
}
 

export function CategoryContainer({ 
  isVisible, 
  titleOfFolder, 
  children,
  // dataCourse,
  // dataFolder
}: CategoryContainerProps) {

  const sideNav = useColorModeValue("#EEEEEE", "gray.800")
  const baseColor = useColorModeValue("gray.500", "gray.500")
  const contextMenuHoverColor = useColorModeValue("#dddbdb", "#1d2431")

  // const [myFolders, setMyFolders] = useState(dataFolder)
  const [isOpen, setIsOpen] = useState(false)
  const open = () => setIsOpen(!isOpen)
  const close = () => setIsOpen(false)


  // function clickRightButton( event: MouseEvent, titleOfFolder: string ) {
  //   event.preventDefault()
  //   console.log(event.target)
  // }

  function preventContextMenu(event: MouseEvent) {
    event.preventDefault()
  }

  
  
  // function handleRemoveFolder(titleOfFolder) {
  //   let cont = 0
  //   dataCourse.forEach(course => course.folderTag === titleOfFolder && cont++)

  //   console.log(`A pasta ${titleOfFolder} tem ${cont} arquivos`)
  //   const newData = myFolders.find(findFolder => findFolder.titleOfFolder !== titleOfFolder && findFolder)
  //   dataFolder.pop([{...newData}])
  //   console.log(myFolders)
  //   setMyFolders([{...newData}])
  // }

  return (
    <Accordion allowMultiple w="100%" >
      <AccordionItem >

        <Popover
          returnFocusOnClose={false}
          isOpen={isOpen}
          onClose={close}
          placement="right"
        >

          <PopoverTrigger >
            <AccordionButton
              id={titleOfFolder}
              as="button"
              w="100%"
              h="50px"
              pl={4}
              display="flex"
              justifyContent="start"
              fontWeight="400"
              fontFamily="Nunito"
              color={baseColor}
              // onAuxClick={event => clickRightButton(event, titleOfFolder)}
              onContextMenu={(event) => preventContextMenu(event)}
              onAuxClick={open}

            >
              <AiFillFolder size={20} />
              <Text
                display={isVisible === true ? "block" : "none"}
                ml="10px"
              >
                {titleOfFolder}
              </Text>
            </AccordionButton>
          </PopoverTrigger>
        
          <PopoverContent
            bg={sideNav}
            fontSize=".8rem"
            w="130px"
          >
            
            <PopoverBody p={0} display="flex" flexDirection="column" >
              
                <Button
                  w="100%"
                  h="35px"
                  borderRadius={0}
                  fontSize=".8rem"
                  py={0}
                  leftIcon={<FaRegEdit />}
                  variant="ghost"
                  color= {baseColor}
                  fontFamily="Nunito"
                  justifyContent="flex-start"
                  _hover={{ bg: contextMenuHoverColor}}
                >Editar</Button>

                <Button
                  w="100%"
                  h="35px"
                  borderRadius={0}
                  fontSize=".8rem"
                  py={0}
                  leftIcon={<FaRegTrashAlt />}
                  variant="ghost"
                  color= {baseColor}
                  fontFamily="Nunito"
                  justifyContent="flex-start"
                  _hover={{ bg: contextMenuHoverColor }}
                  // onClick={() => handleRemoveFolder(titleOfFolder)}
                >Remover</Button>
              

            </PopoverBody>
            
          </PopoverContent>
        </Popover>

        <AccordionPanel w="100%" p={0} pl={isVisible === true ? 6 : 2} >
          {children}
        </AccordionPanel>

        
        
          
    
      </AccordionItem>
    </Accordion>
  )
}