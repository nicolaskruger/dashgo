import { Stack } from "@chakra-ui/react";
import { FC } from "react";
import { RiDashboardLine, RiContactsLine, RiInputMethodLine, RiGitMergeLine } from "react-icons/ri";
import { NavLink } from "./NavLink";
import { NavSection } from "./NavSection";

export const SideBarNav: FC = () => {
    return (
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
    )
}