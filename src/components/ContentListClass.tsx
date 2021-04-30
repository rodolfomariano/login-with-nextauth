import { AspectRatio, Box, Divider, Flex, Heading, HStack, Text, useColorModeValue, Wrap } from "@chakra-ui/react";
import Link from "next/link";
import { ReactElement, ReactNode } from "react";
import { FaCalendar } from "react-icons/fa";
import { GiBookPile } from "react-icons/gi";
import { MdForum } from "react-icons/md";

interface ContentListClassProps {
  title: string
  date: string
  description: string
  hrefForum: string
  hrefActivity: string
  hrefPage: string
  srcVideo: string
  children: ReactNode
}

export function ContentListClass({ 
  title, 
  date, 
  description, 
  hrefForum, 
  hrefActivity,  
  hrefPage,
  srcVideo,
  children
}: ContentListClassProps) {

  const colorHover = useColorModeValue("teal.400", "teal" )
  const borderType = useColorModeValue("none", "1px" )
  const borderTypeColor = useColorModeValue("none", "gray.700" )

  return (
    <>
      <Flex
        w="100%"
        // maxW="800px"
        justifyContent="space-between"
        py="20px"
        pl={2}
        borderRadius="15px"
        boxShadow="xs"
        border={borderType}
        borderColor={borderTypeColor}
        _hover={{boxShadow: "base"}}
        mb="10px"
      >

        <Box w="200px" h="150px" >
          <AspectRatio maxH="150px" maxW="200px" ratio={1}>
            <iframe
              width="200px"
              height="150px"
              title={title}
              src={srcVideo}
              allowFullScreen
            />
          </AspectRatio>
        </Box>    

        <Flex flex="1" >
          <Flex  flex="1" px="10px" flexDirection="column" justifyContent="space-between" >
            <Box>
              <Text fontSize={10} color="gray.300">{date}</Text>
              <Link href={hrefPage}>
                <Heading 
                  as="h3" 
                  fontSize={["1.2rem", "none", "1.4rem"]}
                  cursor="pointer"
                  _hover={{color: colorHover}}
                >
                  {title}
                </Heading>
              </Link>
              <Text 
                fontSize={[".8rem", "none", ".9rem"]}
                mt="10px"
              >
                {description}
              </Text>
            </Box>
            <HStack >
              <Link as="a" href={hrefForum}>
                <Flex
                  flexDirection={["column",
                  "column",
                  "row"]}
                  alignItems="center"
                  cursor="pointer"
                  _hover={{ color: colorHover }}
                >
                  <MdForum />
                  <Text fontSize={[".65rem", ".7rem", ".75rem"]} ml="8px">Forum de duvidas</Text>
                </Flex>
              </Link>

              <Divider orientation="vertical" />

              <Link href={hrefActivity}>
                <Flex
                  flexDirection={["column",
                  "column",
                  "row"]}
                  alignItems="center"
                  cursor="pointer"
                  _hover={{ color: colorHover }}
                >
                  <FaCalendar />
                  <Text fontSize={[".65rem", ".7rem", ".75rem"]} ml="8px">Atividades</Text>
                </Flex>

                
              </Link>

              <Divider orientation="vertical" />

              <Link href={hrefActivity}>
                <Flex
                  flexDirection={["column",
                  "column",
                  "row"]}
                  alignItems="center"
                  cursor="pointer"
                  _hover={{ color: colorHover }}
                >
                  <GiBookPile fontSize={24} />
                  <Text fontSize={[".65rem", ".7rem", ".75rem"]} ml="8px">Material de apoio</Text>
                </Flex> 
              </Link>

            </HStack>
          </Flex>
          {/* <Box >
            <Text fontSize={[".9rem", "none", "1rem"]}>Material de apoio</Text>
            <Wrap mt="15px" >
              {children}
            </Wrap>
          </Box> */}
        </Flex>
      </Flex>

      {/* <Divider /> */}
    </>
  )
}