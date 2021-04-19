import { extendTheme } from "@chakra-ui/react"

export const theme = extendTheme({
  fonts: {
    heading: 'Nunito',
    body: 'Poppins',
  },
  styles: {
    global: {
      body: {
        bg: 'gray.50',
        color: 'gray.600',
      }
    }
  }
})