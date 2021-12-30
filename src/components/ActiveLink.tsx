import { cloneElement, FC, ReactElement } from "react";
import Link, { LinkProps } from "next/link";
import { useRouter } from "next/router";

type ActiveLinkProps = LinkProps & {
    shouldMatchExactHref?: boolean
}

export const ActiveLink: FC<ActiveLinkProps> = ({ shouldMatchExactHref = false, children, ...rest }) => {

    const { asPath } = useRouter();

    const isActive = (asPath === rest.href ||
        asPath === rest.as) || (
            !shouldMatchExactHref &&
            asPath.startsWith(rest.href as string));

    return (
        <Link {...rest}>
            {cloneElement(children as ReactElement, {
                color: isActive ? "pink.400" : "gray.500"
            })}
        </Link>
    )
}