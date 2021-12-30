import { Box, Stack, Text, Link, Icon, useBreakpointValue, Drawer, DrawerOverlay, DrawerContent, DrawerCloseButton, DrawerHeader, DrawerBody } from "@chakra-ui/react";
import { Children, FC } from "react";
import { RiContactsLine, RiDashboardLine, RiGitMergeLine, RiInputMethodLine } from "react-icons/ri";
import { useSideBarDrawer } from "../../contexts/SidebarDrawerContext";
import { NavLink } from "./NavLink";
import { NavSection } from "./NavSection";
import { SideBarNav } from "./SideBarNav";

export const Sidebar: FC = () => {

    const { isOpen, onClose } = useSideBarDrawer();

    const isDrawerSideBar = useBreakpointValue<boolean>({
        base: true,
        lg: false,
    })

    if (isDrawerSideBar) {
        return (
            <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
                <DrawerOverlay>
                    <DrawerContent bg={"gray.800"} p={"4"}>
                        <DrawerCloseButton mt={"6"} />
                        <DrawerHeader>
                            Navegação
                        </DrawerHeader>
                        <DrawerBody>
                            <SideBarNav />
                        </DrawerBody>
                    </DrawerContent>
                </DrawerOverlay>
            </Drawer >
        )
    }

    return (
        <Box
            as="aside"
            w="64"
            mr="8"
        >
            <SideBarNav />
        </Box>
    )
}