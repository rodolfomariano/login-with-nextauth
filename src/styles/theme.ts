import { extendTheme } from "@chakra-ui/react"

export const theme = extendTheme({
  fonts: {
    heading: 'Nunito',
    body: 'Poppins',
  },
  styles: {
    global: (props) => ({
      body: {
        bg: props.colorMode === "dark" ? "#292A33" : "gray.50",
        color: props.colorMode === "dark" ? "gray.300" : "gray.600",
      }
    })
  }
})