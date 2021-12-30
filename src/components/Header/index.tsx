import { Flex, useBreakpointValue } from "@chakra-ui/react";
import { FC } from "react";
import { Logo } from "./Logo";
import { NotificationNav } from "./NotificationsNav";
import { Profile } from "./Profile";
import { SearchBox } from "./SeachBox";

export const Header: FC = () => {

    const isWideVersion = useBreakpointValue<boolean>({
        base: false,
        lg: true,
    });

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
            <Logo />
            {!!isWideVersion &&
                <SearchBox />
            }
            <Flex
                align={"center"}
                ml={"auto"}

            >
                <NotificationNav />
                <Profile showProfileData={!!isWideVersion} />
            </Flex>
        </Flex>
    )
}