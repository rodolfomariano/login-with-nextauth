import { Accordion, AccordionButton, AccordionItem, AccordionPanel, Button, Text, useColorModeValue } from "@chakra-ui/react";
import { useState } from "react";
import { AiFillFolder } from "react-icons/ai";
import { SiJavascript, SiNextDotJs } from "react-icons/si";
import { CategoryItem } from "./CategoryItem";

interface DetachedCourse {
  title: string
}

interface DataCurse {
  title: string;
}

interface Item {
  titleOfFolder?: string,
  courseOutFolder?: DetachedCourse[],
  content?: DataCurse[]
}

interface CategoryContainerProps {
  titleOfFolder?: string;
  isVisible: boolean
  content?: Item[]
}



export function CategoryContainer({ isVisible, titleOfFolder, content }: CategoryContainerProps) {
  const [isActiveBtn, setIsActiveBtn] = useState('')
  const [folderBelong, setFolderBelong] = useState('')

  const bg = useColorModeValue("white", "#22242C")

  function handleClick(title) {
    // setFolderBelong(titleOfFolder)
    content.forEach(item => titleOfFolder === title && setIsActiveBtn(title))

  }
  console.log(content)

  return (
    <Accordion allowMultiple w="100%" >
      <AccordionItem >

        <AccordionButton w="100%" display="flex" justifyContent="start" fontWeight="400" fontFamily="Nunito">
          <AiFillFolder size={20} />
          <Text
            display={isVisible === true ? "block" : "none"}
            ml="10px"
          >
            {titleOfFolder}
          </Text>
        </AccordionButton>



        {/* {content.map(course =>

          <CategoryItem
            isVisible={isVisible}
            icon={<SiJavascript size={14} />}
            title={course.title}
            // titleOfFolder={titleOfFolder}
            // onClick={() => handleClick(item.titleOfFolder)}
            isActiveBtn={isActiveBtn}
          />


        )} */}

      </AccordionItem>
    </Accordion>
  )
}