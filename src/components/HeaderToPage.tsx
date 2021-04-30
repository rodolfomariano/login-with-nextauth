import { Divider, Flex, Heading, HStack, Text } from "@chakra-ui/react";
import { ReactNode } from "react";

interface HeaderToPageProps {
  title: string
  subTitle?: string
  children: ReactNode
}

export function HeaderToPage({ title, subTitle, children }: HeaderToPageProps) {
  return (
    <>
      <Flex justifyContent="space-between">
        <Heading fontSize={['1.2rem', 'none', '1.4rem']}>{title}</Heading>
        <HStack>
          {children}
        </HStack>
      </Flex>
      
      <Divider mt="10px" />
      <Text fontSize={[10, 10, 12]} color="gray.400">
        {subTitle}
      </Text>
    </>
  )
}