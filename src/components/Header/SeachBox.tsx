import { Flex, Icon, Input } from "@chakra-ui/react";
import { FC, useRef, useState } from "react";
import { RiSearchLine } from "react-icons/ri";

export const SearchBox: FC = () => {
    // const [search, setSearch] = useState("");

    const searchInputRef = useRef<HTMLInputElement>(null);

    return (
        <Flex
            as="label"
            flex={"1"}
            align={"center"}
            py={"4"}
            px={"8"}
            ml={"6"}
            maxWidth={400}
            alignSelf={"center"}
            color={"gray.200"}
            position={"relative"}
            bg={"gray.800"}
            borderRadius={"full"}
        >
            <Input
                ref={searchInputRef}
                color={"gray.50"}
                variant={"unstyled"}
                px={"4"}
                mr={"4"}
                placeholder="Buscar na plataform"
                _placeholder={{ color: "gray.400" }}
            // value={search}
            // onChange={(event) => setSearch(event?.target.value)}
            />
            <Icon as={RiSearchLine} fontSize={"20"} />
        </Flex>
    )
}