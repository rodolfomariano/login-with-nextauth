import { Button, Flex, Text, LinkProps, useColorModeValue, Link } from "@chakra-ui/react";
import { ReactElement, useState } from "react";
import { ActiveLink } from "../ActiveLink";

interface NavLinkProps extends LinkProps {
  icon: ReactElement
  title: string
  href: string
}

export function NavLink({ icon, title, href, ...rest }: NavLinkProps) {
  
  const brnActived = useColorModeValue("blue.700", "blue.400")
  
  return (
    <ActiveLink href={href} passHref>
      <Link
        variant="ghost"
        px={2}
        fontWeight="500"
        fontFamily="Nunito"
        {...rest}
      >
        <Flex alignItems="center" flexDirection="column">
          {icon}
          <Text fontSize="0.8rem">{title}</Text>
        </Flex>
      </Link>
    </ActiveLink>
  )

}