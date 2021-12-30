import { useDisclosure, UseDisclosureReturn } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { createContext, FC, useContext, useEffect } from "react";

const SideBarDrawerContext = createContext<UseDisclosureReturn>({} as UseDisclosureReturn);

export const SideBarDrawerProvider: FC = ({ children }) => {

    const disclosure = useDisclosure();

    const router = useRouter();

    useEffect(() => {
        disclosure.onClose()
    }, [router.asPath])

    return (
        <SideBarDrawerContext.Provider value={disclosure}>
            {children}
        </SideBarDrawerContext.Provider>
    )
}

export const useSideBarDrawer = () => useContext(SideBarDrawerContext);