import { Box, Flex, Text, BoxProps } from "@chakra-ui/react"
import { useSession } from "next-auth/client"
import { ReactNode } from "react"
import { TopBar } from "./TopBar"

interface PageContainerProps extends BoxProps {
  title?: string
  children?: ReactNode
}

export function PageContainer({ title, children, ...rest }: PageContainerProps) {
  const [ session, loading ] = useSession()

  if(session) {
    return (
      <Box
        width="100vw"
        minHeight="100vh"
        h="100%"
        display="flex"
        flex="1"
        flexDirection="column"
        alignItems="center"
        {...rest}
      >
        <TopBar />
        <Flex
          w="100%"
          h="100%"
          flex="1"
          maxWidth="1320px"
          px="10px"
          py="40px"
        >

          <Box
            width="80%"
           
          >
            <Text>{title}</Text>
            {children}
          </Box>
        </Flex>
      </Box>
    )
    
  }

  return <a href="/">Sign in</a>
}