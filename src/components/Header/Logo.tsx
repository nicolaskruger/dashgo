import { Text } from "@chakra-ui/react";
import { FC } from "react";

export const Logo: FC = () => {
    return (
        <Text
            fontSize={["2xl", "3xl"]}
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
    )
}