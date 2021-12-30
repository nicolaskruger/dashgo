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

                <NavLink href="/dashboard" icon={RiDashboardLine} >
                    DashBoard
                </NavLink>
                <NavLink href="/users" icon={RiContactsLine}>
                    Usuarios
                </NavLink>
            </NavSection>

            <NavSection title="AUTOMAÇÃO">
                <NavLink href="/forms" icon={RiInputMethodLine}>
                    Formulario
                </NavLink>
                <NavLink href="/automation" icon={RiGitMergeLine}>
                    Automação
                </NavLink>
            </NavSection>
        </Stack>
    )
}