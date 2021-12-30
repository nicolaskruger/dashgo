import { Box, Button, Checkbox, Flex, Heading, Icon, Table, Tbody, Td, Text, Th, Thead, Tr } from "@chakra-ui/react";
import { NextPage } from "next";
import { RiAddLine, RiPencilLine } from "react-icons/ri";
import { Header } from "../../components/Header";
import { Layout } from "../../components/Layot";
import { Pagination } from "../../components/Pagination";
import { Sidebar } from "../../components/Sidebar";

const UserList: NextPage = () => {
    return (
        <Box>
            <Layout>
                <Box flex={"1"} borderRadius={8} bg={"gray.800"} p="8">
                    <Flex mb={"8"} justifyContent={"space-between"} align={"center"}>
                        <Heading size={"lg"} fontWeight={"normal"}>
                            Usuarios
                        </Heading>
                        <Button
                            as="a"
                            size={"sm"}
                            fontSize={"sm"}
                            colorScheme={"pink"}
                            leftIcon={<Icon as={RiAddLine} />}
                        >
                            Criar novo
                        </Button>
                    </Flex>
                    <Table
                        colorScheme={"whiteAlpha"}
                    >
                        <Thead>
                            <Tr>
                                <Th px="6" color={"green.300"} width={"8"}>
                                    <Checkbox colorScheme={"pink"} />
                                </Th>
                                <Th>
                                    Usuário
                                </Th>
                                <Th>
                                    Data de cadastro
                                </Th>
                                <Th>

                                </Th>
                            </Tr>
                        </Thead>
                        <Tbody>
                            <Tr>
                                <Td px="6" color={"green.300"} width={"8"}>
                                    <Checkbox colorScheme={"pink"} />
                                </Td>
                                <Td>
                                    <Box>
                                        <Text fontWeight={"bold"}>
                                            Nícolas Krüger
                                        </Text>
                                        <Text fontSize={"sm"} color={"gray.300"}>
                                            nicolas.nkruger@gmail.com
                                        </Text>
                                    </Box>
                                </Td>
                                <Td>
                                    04 de Abril, 2021
                                </Td>
                                <Td>
                                    <Button
                                        as="a"
                                        size={"sm"}
                                        fontSize={"sm"}
                                        colorScheme={"purple"}
                                        leftIcon={<Icon as={RiPencilLine}
                                            fontSize={"16"} />}
                                    >
                                        Editar
                                    </Button>
                                </Td>
                            </Tr>
                        </Tbody>
                    </Table>
                    <Pagination />
                </Box>
            </Layout>
        </Box >
    )
}

export default UserList