import { Avatar, Box, Flex, Text } from "@chakra-ui/react";
import { FC } from "react";

export const Profile: FC = () => {
    return (
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
    )
}