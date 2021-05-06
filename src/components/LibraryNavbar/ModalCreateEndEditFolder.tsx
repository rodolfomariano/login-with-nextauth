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
  useColorModeValue, 
  useDisclosure
} from "@chakra-ui/react";
import { ReactElement } from "react";

interface ModalCreateEndEditFolderProps extends InputProps{
  // title: string
  createEditButton: ReactElement
  isOpen: boolean
  onClose: () => void
  type: 'create' | 'edit'
}

export function ModalCreateEndEditFolder({ createEditButton, type, isOpen, onClose, ...rest}: ModalCreateEndEditFolderProps) {
  
  const bg = useColorModeValue("#EEEEEE", "gray.800")
  
  return (
    <Modal isOpen={isOpen} onClose={onClose} >
      <ModalOverlay />
      <ModalContent fontFamily="Nunito" bg={bg}>
        <ModalHeader>{type === 'create' ? 'Criar categoria' : "Editar o nome"}</ModalHeader>
        <ModalBody>
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