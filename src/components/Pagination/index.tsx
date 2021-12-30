import { Box, Button, Stack } from "@chakra-ui/react";
import { FC } from "react";
import { PaginationItem } from "./PaginationItem";

export const Pagination: FC = () => {
    return (
        <Stack
            direction={"row"}
            spacing={"6"}
            mt={"8"}
            justify={"space-between"}
            align={"center"}

        >
            <Box>
                <strong>0</strong> - <strong>10</strong> de 100
            </Box>
            <Stack
                direction={"row"}
                spacing={"2"}
            >

                <PaginationItem isCurrent number={1} />
                {"_".repeat(4).split("").map((_, index) => (
                    <PaginationItem key={index} number={index + 2} />
                ))}
            </Stack>
        </Stack>
    )
}