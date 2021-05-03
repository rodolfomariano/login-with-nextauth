import { AccordionPanel } from "@chakra-ui/accordion";
import { Button, ButtonProps } from "@chakra-ui/button";
import { useColorModeValue } from "@chakra-ui/color-mode";
import { Text } from "@chakra-ui/layout";
import { ReactElement, useEffect, useState } from "react";


interface DataOfCourse {
  title: string;
}

interface CategoryItemProps extends ButtonProps {
  isVisible: boolean
  isActiveBtn: string
  icon: ReactElement
  title: string
  // titleOfFolder: string
}

export function CategoryItem({ icon, title, isVisible, isActiveBtn, ...rest }: CategoryItemProps) {

  const bg = useColorModeValue("white", "#22242C")
  // console.log(titleOfFolder)
  return (
    <AccordionPanel w="100%" p={0} pl={2}  >
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
        bg={isActiveBtn === title && bg}
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
    </AccordionPanel>
  )
}