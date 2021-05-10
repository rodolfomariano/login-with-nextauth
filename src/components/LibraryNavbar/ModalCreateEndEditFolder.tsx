import { 
  Button, 
  ButtonProps,
  Input, 
  InputProps,
  Modal, 
  ModalBody, 
  ModalContent, 
  ModalFooter, 
  ModalHeader, 
  ModalOverlay, 
  Text, 
  useColorModeValue, 
  useDisclosure
} from "@chakra-ui/react";
import { ReactElement } from "react";

interface ModalCreateEndEditFolderProps extends InputProps{
  // title: string
  createEditButton: ReactElement
  isOpen: boolean
  onClose: () => void
  type: string
  nameOfFolder?: string
}

export function ModalCreateEndEditFolder({ createEditButton, type, isOpen, nameOfFolder, onClose, ...rest}: ModalCreateEndEditFolderProps) {
  
  const bg = useColorModeValue("#EEEEEE", "gray.800")
  
  return (
    <Modal isOpen={isOpen} onClose={onClose} >
      <ModalOverlay />
      <ModalContent fontFamily="Nunito" bg={bg}>
        <ModalHeader>{type === 'create' ? 'Criar categoria' : "Editar o nome"}</ModalHeader>
        <ModalBody>
          {type === "edit" && 
            <Text
            fontFamily="Nunito"
            fontSize={12}
            display="flex"
            > 
              Nome atual: <Text ml={2} fontWeight="600" color="blue.300">{nameOfFolder}</Text>
            </Text>}
          <Input
            isRequired
            {...rest}
          />
        </ModalBody>

        <ModalFooter>
          <Button variant="ghost" mr={3} onClick={onClose}>
            Cancelar
          </Button>
          {createEditButton}
        </ModalFooter>
      </ModalContent>
    </Modal>
  )
}