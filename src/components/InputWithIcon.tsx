import { Input, InputGroup, InputLeftElement, InputRightElement, InputProps } from "@chakra-ui/react";
import { ReactElement, ReactNode, useState } from "react";

interface InputWithIconProps extends InputProps {
  leftIcon: ReactElement
  rightIcon?: ReactElement
  rightSecondIcon?: ReactElement
  type: string
}

export function InputWithIcon({ leftIcon, rightIcon = <></>, rightSecondIcon = rightIcon, type, ...rest }) {
  const [value, setValue] = useState("")
  const [isFocus, setIsFocus] = useState(false)
  const [show, setShow] = useState(false)


  const handleChange = (event) => setValue(event.target.value)
  const handleClick = () => setShow(!show)


  return (
    <InputGroup>
      <InputLeftElement
        children={leftIcon}
        color={ value ? "blue.400" : "#bdbebd" }
        
      />
      <Input
        type={type !== 'password' ? type : (show ? "text" : "password")}
        onChange={handleChange}
        
        {...rest}
      />
      { rightIcon !== <></> && 
        <InputRightElement 
          cursor={type === 'password' && rightIcon !== <></> && 'pointer'}
          color={ value ? "red.400" : "#bdbebd" }
          children={show ? rightSecondIcon : rightIcon} 
          onClick={ handleClick }
        /> } 
    </InputGroup>
  )
}