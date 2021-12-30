import { Icon } from "@chakra-ui/react";
import { Link, LinkProps, Text } from "@chakra-ui/react";
import { ElementType, FC } from "react";
import A from "next/link";

interface NavLinkProps extends LinkProps {
    icon: ElementType,
    href: string,
}

export const NavLink: FC<NavLinkProps> = ({ icon, children, href, ...props }) => {
    return (
        <A href={href} passHref>
            <Link
                display={"flex"}
                alignContent={"center"}
                {...props}
            >
                <Icon as={icon} fontSize={"20"} />
                <Text ml={"4"} fontWeight={"medium"}> {children} </Text>
            </Link>
        </A>
    )
}