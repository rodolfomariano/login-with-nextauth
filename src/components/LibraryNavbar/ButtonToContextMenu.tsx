import { Button, ButtonProps} from "@chakra-ui/button";
import { useColorModeValue } from "@chakra-ui/color-mode";
import { ReactElement } from "react";

interface ButtonToContextMenuProps extends ButtonProps {
  title: string
  icon: ReactElement
}

export function ButtonToContextMenu({  title, icon, ...rest}: ButtonToContextMenuProps) {

  const contextMenuHoverColor = useColorModeValue("#dddbdb", "#1d2431")

  return (
    <Button
      w="100%"
      h="35px"
      borderRadius={0}
      fontSize=".8rem"
      py={0}
      leftIcon={icon}
      variant="ghost"
      color="gray.500"
      fontFamily="Nunito"
      justifyContent="flex-start"
      _hover={{ bg: contextMenuHoverColor}}
      {...rest}
    >{title}</Button>
  )
}