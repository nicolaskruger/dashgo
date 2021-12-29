import { Center, Flex, Icon, Input, Text } from "@chakra-ui/react";
import { FC } from "react";
import { RiSearchLine } from "react-icons/ri";

export const Header: FC = () => {
    return (
        <Flex
            as="header"
            w="100%"
            maxW={1480}
            h="20"
            mx="auto"
            mt="4"
            px={"6"}
            align="center"
        >
            <Text
                fontSize={"3xl"}
                fontWeight={"bold"}
                letterSpacing={"tight"}
                w="64"
            >
                dashgod
                <Text
                    as="span"
                    ml={"1"}
                    textColor={"pink.500"}
                >
                    .
                </Text>
            </Text>
            <Flex
                as="label"
                flex={"1"}
                align={"center"}
                py={"4"}
                px={"8"}
                ml={"6"}
                maxWidth={400}
                alignSelf={"center"}
                color={"gray.200"}
                position={"relative"}
                bg={"gray.800"}
                borderRadius={"full"}
            >
                <Input
                    color={"gray.50"}
                    variant={"unstyled"}
                    px={"4"}
                    mr={"4"}
                    placeholder="Buscar na plataform"
                    _placeholder={{ color: "gray.400" }}
                />
                <Icon as={RiSearchLine} fontSize={"20"} />
            </Flex>
        </Flex>
    )
}