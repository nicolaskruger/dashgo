import { Icon } from "@chakra-ui/react";
import { Link, LinkProps, Text } from "@chakra-ui/react";
import { ElementType, FC } from "react";

interface NavLinkProps extends LinkProps {
    icon: ElementType,
}

export const NavLink: FC<NavLinkProps> = ({ icon, children, ...props }) => {
    return (
        <Link
            display={"flex"}
            alignContent={"center"}
            {...props}
        >
            <Icon as={icon} fontSize={"20"} />
            <Text ml={"4"} fontWeight={"medium"}> {children} </Text>
        </Link>
    )
}