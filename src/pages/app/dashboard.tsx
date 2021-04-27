import { useColorMode } from '@chakra-ui/color-mode'
import { Box } from '@chakra-ui/layout'
import { useSession } from 'next-auth/client'

import { Header } from '../../components/Header'
import { Sidebar } from '../../components/Sidebar'


export default function Dashboard() {
  const [ session, loading ] = useSession()
  const { colorMode} = useColorMode()

  if(session) {
    return (
      <Box
        bg={colorMode ? "#242849" : "gray.50"}
      >
        <Header />
        <Sidebar />
      </Box>
    )
    
  }

  return <a href="/">Sign in</a>

}