import { Avatar, Box, Flex, Text } from "@chakra-ui/react";
import { FC } from "react";

type ProfileProps = {
    showProfileData: boolean
}

export const Profile: FC<ProfileProps> = ({ showProfileData }) => {
    return (
        <Flex
            align={"center"}
        >
            {showProfileData &&
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
            }

            <Avatar
                size={"md"}
                name="Nicolas Kruger"
                src="https://github.com/nicolaskruger.png"
            />

        </Flex>
    )
}