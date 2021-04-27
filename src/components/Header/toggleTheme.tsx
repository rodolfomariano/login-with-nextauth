import { Button, IconButton, Switch, Tooltip } from "@chakra-ui/react";
import { useColorMode } from "@chakra-ui/color-mode";

import { AiFillBulb } from "react-icons/ai"

export function ToggleTheme() {
  const { colorMode, setColorMode } = useColorMode()

  return (
    <IconButton 
      onClick={() => setColorMode(!colorMode)}
      variant="link"
      aria-label="Thema"
      _hover={{color: '#FFD827'}}
      icon={<AiFillBulb />}
      color={colorMode ? 'white' : 'gray.600'}
    />
    // <Tooltip
    //   label="Alterar o tema"
    // >
    //   <Switch 
    //     id="alter-theme" 
    //     onChange={() => setColorMode(!colorMode)} 
    //     size="sm"
    //   />

    // </Tooltip>
     
  )
}