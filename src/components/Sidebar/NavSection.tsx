import { Box, Icon, Link, Stack, Text } from "@chakra-ui/react";
import { FC } from "react";
import { RiContactsLine, RiDashboardLine } from "react-icons/ri";

type NavSectionProps = {
    title: string,
}

export const NavSection: FC<NavSectionProps> = ({ title, children }) => {
    return (
        <Box>
            <Text
                fontWeight={"bold"}
                color={"gray.400"}
                fontSize={"small"}
            >
                {title}
            </Text>
            <Stack
                spacing={"4"}
                mt={"8"}
                align={"stretch"}
            >
                {children}
            </Stack>
        </Box>
    )
}