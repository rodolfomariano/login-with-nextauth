import { Accordion, AccordionButton, AccordionItem,  AccordionPanel, Popover, PopoverBody, PopoverContent, PopoverTrigger, Text, useColorModeValue } from "@chakra-ui/react";
import { MouseEvent, ReactElement, ReactNode, useState } from "react";
import { AiFillFolder } from "react-icons/ai";

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
  editButton?: ReactElement
  removeButton?: ReactElement
}
 

export function CategoryContainer({ 
  isVisible, 
  titleOfFolder, 
  children,
  editButton,
  removeButton

}: CategoryContainerProps) {

  const sideNav = useColorModeValue("#EEEEEE", "gray.800")
  const baseColor = useColorModeValue("gray.500", "gray.500")

  const [isOpen, setIsOpen] = useState(false)
  const open = () => setIsOpen(!isOpen)
  const close = () => setIsOpen(false)



  function preventContextMenu(event: MouseEvent) {
    event.preventDefault()
  }


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
              
              {editButton}
              {removeButton}
              
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