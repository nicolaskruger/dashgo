import { Box, Button, Stack, Text } from "@chakra-ui/react";
import { FC } from "react";
import { PaginationItem } from "./PaginationItem";

type PaginationProps = {
    totalCountOfRegister: number,
    registerPerPage?: number,
    currentPage?: number,
    onPageChange: (page: number) => void,
}

const siblinCount = 1;
function generatePageArray(from: number, to: number) {
    return [...new Array(to - from)]
        .map((_, index) => {
            return from + index + 1
        })
        .filter(page => page > 0)
}


export const Pagination: FC<PaginationProps> = ({
    totalCountOfRegister,
    registerPerPage = 10,
    currentPage = 1,
    onPageChange
}) => {
    const renderPageItem = (page: number) => (
        <PaginationItem
            key={page}
            number={page}
            onClick={() => onPageChange(page)}
        />
    );

    const lastPage = Math.ceil(totalCountOfRegister / registerPerPage);

    const previousPage = currentPage > 1
        ? generatePageArray(currentPage - 1 - siblinCount, currentPage - 1)
        : []

    const nextPage = currentPage < lastPage
        ? generatePageArray(currentPage, Math.min(currentPage + siblinCount, lastPage))
        : []
    return (
        <Stack
            direction={["column", "row"]}
            spacing={"6"}
            mt={"8"}
            justify={"space-between"}
            align={"center"}

        >
            <Box>
                <strong>0</strong> - <strong>{lastPage}</strong> de <strong>{totalCountOfRegister}</strong>
            </Box>
            <Stack
                direction={"row"}
                spacing={"2"}
            >
                {
                    currentPage > (siblinCount + 1) &&
                    (<>
                        {renderPageItem(1)}
                        {currentPage > (siblinCount + 2) &&
                            <Text
                                color={"gray.300"}
                                width={"8"}
                                textAlign={"center"}

                            >...</Text>}
                    </>)
                }
                {previousPage.map(page => (
                    renderPageItem(page)
                ))}

                <PaginationItem isCurrent number={currentPage} />

                {nextPage.map(page => (
                    renderPageItem(page)
                ))}
                {
                    currentPage < (lastPage - siblinCount) &&
                    (<>
                        {currentPage < (lastPage - siblinCount - 1) &&
                            <Text
                                color={"gray.300"}
                                width={"8"}
                                textAlign={"center"}

                            >...</Text>}
                        {renderPageItem(lastPage)}
                    </>)
                }
            </Stack>
        </Stack >
    )
}