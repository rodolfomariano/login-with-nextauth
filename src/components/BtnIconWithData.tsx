import { HStack, Text, Button, ButtonProps } from "@chakra-ui/react";
import { ReactElement } from "react";

interface BtnIconWithDataProps extends ButtonProps {
  icon?: ReactElement
  data: number | string
}

export function BtnIconWithData({ icon, data, ...rest }:BtnIconWithDataProps ) {
  return (
    <Button
      fontSize=".8rem"
      fontWeight="300"
      px={6}
      h={26}
      borderRadius="50"
      variant="outline"
      {...rest}
    >
      <HStack>
        {icon}
        <Text>{data}</Text>
      </HStack>
    </Button>
  )
}