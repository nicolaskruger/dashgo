import { Flex } from "@chakra-ui/react";
import { FC } from "react";
import { Header } from "../Header";
import { Sidebar } from "../Sidebar";

export const Layout: FC = ({ children }) => {
    return (
        <>
            <Header />
            <Flex
                w={"100%"}
                my={"6"}
                maxW={1480}
                mx={"auto"}
                px={"6"}
            >
                <Sidebar />
                {children}
            </Flex>
        </>
    )
}