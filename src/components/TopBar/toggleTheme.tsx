import { Button, IconButton, Switch, Tooltip } from "@chakra-ui/react";
import { useColorMode } from "@chakra-ui/color-mode";

import { AiFillBulb } from "react-icons/ai"

export function ToggleTheme() {
  // const { colorMode, setColorMode } = useColorMode()
  const { colorMode, toggleColorMode } = useColorMode()

  return (
    <>
      {colorMode === 'light' 
      ? <Switch id="alter-theme" onChange={toggleColorMode} size="sm" />
      : <Switch id="alter-theme" onChange={toggleColorMode} size="sm" defaultChecked />
      }
    </>
    // <IconButton
    //   variant="link"
    //   aria-label="Thema"
    //   _hover={{color: '#FFD827'}}
    //   icon={<AiFillBulb />}
    //   onClick={() => setColorMode(!colorMode)} 
    //   color={colorMode ? 'white' : 'gray.600'}
    // />

    

    // 



  )
}