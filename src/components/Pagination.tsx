import { Box, Button, Stack } from "@chakra-ui/react";
import { FC } from "react";

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
                    1
                </Button>
                {"_".repeat(4).split("").map((_, index) => (
                    <Button
                        key={index}
                        size={"sm"}
                        fontSize={"xs"}
                        width={"4"}
                        bgColor={"gray.700"}
                        _hover={{
                            bg: 'gray.500'
                        }}
                    >
                        {index + 1}
                    </Button>

                ))}
            </Stack>
        </Stack>
    )
}