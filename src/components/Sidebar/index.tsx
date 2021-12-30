import { Box, Stack, Text, Link, Icon } from "@chakra-ui/react";
import { Children, FC } from "react";
import { RiContactsLine, RiDashboardLine, RiGitMergeLine, RiInputMethodLine } from "react-icons/ri";
import { NavLink } from "./NavLink";
import { NavSection } from "./NavSection";

export const Sidebar: FC = () => {
    return (
        <Box
            as="aside"
            w="64"
            mr="8"
        >
            <Stack
                spacing={"12"}
                align={"flex-start"}
            >
                <NavSection title="GERAL">

                    <NavLink icon={RiDashboardLine} >
                        DashBoard
                    </NavLink>
                    <NavLink icon={RiContactsLine}>
                        Usuarios
                    </NavLink>
                </NavSection>

                <NavSection title="AUTOMAÇÃO">
                    <NavLink icon={RiInputMethodLine}>
                        Formulario
                    </NavLink>
                    <NavLink icon={RiGitMergeLine}>
                        Automação
                    </NavLink>
                </NavSection>
            </Stack>
        </Box>
    )
}