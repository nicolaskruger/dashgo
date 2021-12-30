import { Flex, Icon, IconButton, useBreakpointValue } from "@chakra-ui/react";
import { FC } from "react";
import { RiMenuLine } from "react-icons/ri";
import { useSideBarDrawer } from "../../contexts/SidebarDrawerContext";
import { Logo } from "./Logo";
import { NotificationNav } from "./NotificationsNav";
import { Profile } from "./Profile";
import { SearchBox } from "./SeachBox";

export const Header: FC = () => {

    const { onOpen } = useSideBarDrawer();

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
            {!isWideVersion &&
                <IconButton
                    aria-label="open navigation"
                    fontSize={"24"}
                    variant={"unstyled"}
                    icon={<Icon as={RiMenuLine} />}
                    onClick={onOpen}
                    mr={"2"}
                />
            }
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