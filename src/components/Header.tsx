import { Avatar, Box, Flex, HStack, Icon, Input, Text } from "@chakra-ui/react";
import { FC } from "react";
import { RiNotificationLine, RiSearchLine, RiUserAddLine } from "react-icons/ri";

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
            <Flex
                align={"center"}
                ml={"auto"}
                pr={"8"}
                py={"1"}
                color={"gray.50"}
                borderRightWidth={1}
                borderColor={"gray.700"}
            >
                <HStack spacing={"4"} mx={"8"}>
                    <Icon as={RiNotificationLine} fontSize={20} />
                    <Icon as={RiUserAddLine} fontSize={20} />
                </HStack>
                <Flex
                    align={"center"}
                >
                    <Box
                        mr={"4"}
                        textAlign={"right"}
                    >
                        <Text>Nícolas Krüger</Text>
                        <Text
                            color={"gray.300"}
                            fontSize={"sm"}
                        >
                            nicolas.nkruger@gmail.com
                        </Text>
                    </Box>

                    <Avatar
                        size={"md"}
                        name="Nicolas Kruger"
                        src="https://github.com/nicolaskruger.png"
                    />

                </Flex>
            </Flex>
        </Flex>
    )
}