import { useColorModeValue } from "@chakra-ui/color-mode";
import { useRouter } from "next/dist/client/router";
import Link, { LinkProps } from "next/link";
import { cloneElement, ReactElement } from "react";

interface ActiveLinkProps extends LinkProps {
  children: ReactElement
  shouldMatchExactHref?: boolean
}

export function ActiveLink({ children, shouldMatchExactHref = false, ...rest }: ActiveLinkProps) {
  const { asPath } = useRouter()

  const brnActived = useColorModeValue("blue.700", "blue.400")

  let isActive = false

  if (shouldMatchExactHref && (asPath === rest.href || asPath === rest.as)) {
    isActive = true
  }

  if (!shouldMatchExactHref && 
    (asPath.startsWith(String(rest.href)) || 
    asPath.startsWith(String(rest.as)))) {
      isActive = true
    }

  return (
    <Link {...rest}>
      {cloneElement(children, {
        color: isActive === true ? brnActived : 'gray.400',
      })}
    </Link>
  )
}