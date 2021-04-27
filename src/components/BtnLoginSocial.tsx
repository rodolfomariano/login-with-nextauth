import { Button, ButtonProps, Text } from "@chakra-ui/react";

import { signIn } from 'next-auth/client'
import { ReactElement } from "react";


interface BtnLoginSocialProps extends ButtonProps {
  icon: ReactElement
  title: string
  provider: string
  callbackUrl: string
}

export function BtnLoginSocial({ icon, provider, callbackUrl, title, ...rest }: BtnLoginSocialProps) {
  
  const handleSignin = (e) => {
    e.preventDefault()
    signIn(`${provider}`, {callbackUrl: `${callbackUrl}`})
  } 

  return (
    <Button
      leftIcon={icon}
      w="100%"
      fontWeight="500"
      onClick={handleSignin}
      fontFamily="Nunito"
      {...rest}
    >
      {title}
    </Button>
  )
}