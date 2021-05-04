import { Button, ButtonProps } from "@chakra-ui/button";
import { useColorModeValue } from "@chakra-ui/color-mode";
import { Text } from "@chakra-ui/layout";
import { ReactElement } from "react";


interface DataOfCourse {
  title: string;
}

interface CategoryItemProps extends ButtonProps {
  isVisible: boolean
  isActiveBtn: string
  icon: ReactElement
  title: string
}

export function CategoryItem({ 
  icon, 
  title, 
  isVisible, 
  isActiveBtn, 
  ...rest 
}: CategoryItemProps) {

  const bg = useColorModeValue("white", "#22242C")

  return (
    
      <Button
        id={title}
        w="100%"
        display="flex"
        justifyContent="start"
        fontWeight="400"
        borderRadius={0}
        fontFamily="Nunito"
        variant="link"
        fontSize={12}
        py={3}
        pl={2}
        borderLeftRadius="50"
        _hover={{ bg: bg }}
        {...rest}
      >
        {icon}
        <Text
          display={isVisible === true ? "block" : "none"}
          ml="10px"

        >
          {title}
        </Text>
      </Button>
     
  )
}