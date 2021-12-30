import { Button } from "@chakra-ui/react";
import { FC } from "react";

type PaginationProsp = {
    isCurrent?: boolean,
    number: number,
}

export const PaginationItem: FC<PaginationProsp> = ({ isCurrent = false, number }) => {

    if (isCurrent) {
        return (
            <Button
                size={"sm"}
                fontSize={"xs"}
                width={"4"}
                colorScheme={"pink"}
                disabled
                _disabled={{
                    bgColor: "pink.500",
                    cursor: "default"
                }}
            >
                {number}
            </Button>
        )
    }

    return (
        <Button
            size={"sm"}
            fontSize={"xs"}
            width={"4"}
            bgColor={"gray.700"}
            _hover={{
                bg: 'gray.500'
            }}
        >
            {number}
        </Button>
    )
}