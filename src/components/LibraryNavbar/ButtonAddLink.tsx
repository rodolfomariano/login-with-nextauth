import { Button, ButtonProps, useColorModeValue } from "@chakra-ui/react";
import { ReactElement } from "react";

interface ButtonAddLinkProps extends ButtonProps{
  title: string
  icon: ReactElement
  // isVisible: boolean
}

export function ButtonAddLink({ title, icon, ...rest }: ButtonAddLinkProps) {

  const bgBtnAddLink = useColorModeValue("#cae2d1", "#202736")
  const colorBtnAddLink = useColorModeValue("#818e9b", "gray.600")
  const hoverColor = useColorModeValue("#dddbdb", "#1d2431")

  return (
    <Button
      flex="1"
      // display={isVisible === true ? "flex" : "none"}
      leftIcon={icon}
      bg={bgBtnAddLink}
      mx="10px"
      variant="ghost"
      borderRadius="50px"
      fontFamily="Nunito"
      color={colorBtnAddLink}
      _hover={{ bg: hoverColor }}
      {...rest}
    >
      
      {title}
    </Button>
  )
}