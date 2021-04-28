import { extendTheme } from "@chakra-ui/react"

export const theme = extendTheme({
  fonts: {
    heading: 'Nunito',
    body: 'Poppins',
  },
  styles: {
    global: (props) => ({
      body: {
        // bg: 'gray.50' ,
        bg: props.colorMode === "dark" ? "#292A33" : "gray.50",
        color: props.colorMode === "dark" ? "white" : "gray.600",
        // color : "gray.600"
      }
    })
  }
})