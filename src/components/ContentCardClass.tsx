import { AspectRatio, Box, Center, Divider, Flex, Heading, HStack, Text, useColorModeValue, VStack, WrapItem } from "@chakra-ui/react";
import Link from "next/link";
import { ReactNode } from "react";
import { FaCalendar } from "react-icons/fa";
import { GiBookPile } from "react-icons/gi";
import { MdForum } from "react-icons/md";

interface ContentCardClassProps {
  title: string
  date: string
  description: string
  hrefForum: string
  hrefActivity: string
  hrefPage: string
  srcVideo: string
  children: ReactNode
}

export function ContentCardClass({ 
  title, 
  date, 
  description, 
  hrefForum, 
  hrefActivity,  
  hrefPage,
  srcVideo,
  children
 }: ContentCardClassProps) {

  const colorHover = useColorModeValue("teal.400", "teal" )
  const borderType = useColorModeValue("none", "1px" )
  const borderTypeColor = useColorModeValue("none", "gray.700" )

  return (
    <WrapItem>
      <Flex
        flexDirection="column"
        w="270"
        maxW="270"
        h="350px"
        py="10px"
        px="10px"
        borderRadius="15px"
        boxShadow="xs"
        border={borderType}
        borderColor={borderTypeColor}
        _hover={{boxShadow: "base"}}
        
      >
        <Text fontSize={10} color="gray.300">{date}</Text>
        <Center w="100%">
          <Box w="300px" mt="5px" mb="10px" >
            <AspectRatio maxH="150px" maxW="300px" ratio={2}>
              <iframe
                width="300px"
                height="150px"
                title={title}
                src={srcVideo}
                allowFullScreen
              />
            </AspectRatio>
          </Box>
        </Center>
        <Link href={hrefPage}>
          <Heading 
            as="h3" 
            fontSize="1.2rem"
            cursor="pointer"
            _hover={{color: colorHover}}
          >
            {title} 
          </Heading>
        </Link>
        <Text 
          fontSize=".8rem"
          mt="10px"
        >
          {description}
        </Text>

        <HStack
          w="100%"
          alignItems="flex-start"
          justifyContent="space-around"
          mt="auto"
        >
          <Link as="a" href={hrefForum}>
            <Flex
              flexDirection="column"
              alignItems="center"
              cursor="pointer"
              _hover={{ color: colorHover }}
            >
              <MdForum />
              <Text fontSize=".65rem">Forum</Text>
            </Flex>
          </Link>

          <Divider orientation="vertical" />

          <Link href={hrefActivity}>
            <Flex
              flexDirection="column"
              alignItems="center"
              cursor="pointer"
              _hover={{ color: colorHover }}
            >
              <FaCalendar />
              <Text fontSize=".65rem">Atividades</Text>
            </Flex>

            
          </Link>

          <Divider orientation="vertical" />

          <Link href="">
            <Flex
              flexDirection="column"
              alignItems="center"
              cursor="pointer"
              _hover={{ color: colorHover }}
            >
              <GiBookPile fontSize={22} />
              <Text fontSize=".65rem" mt="-5px">Material</Text>
            </Flex> 
          </Link>

        </HStack>

      </Flex>
    </WrapItem>
  )
}