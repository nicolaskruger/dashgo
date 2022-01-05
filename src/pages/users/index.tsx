import { Box, Button, Checkbox, Flex, Heading, Icon, Spinner, Table, Tbody, Td, Text, Th, Thead, Tr, useBreakpointValue } from "@chakra-ui/react";
import { NextPage } from "next";
import Link from "next/link";
import { useEffect, useState } from "react";
import { RiAddLine, RiPencilLine } from "react-icons/ri";
import { Layout } from "../../components/Layot";
import { Pagination } from "../../components/Pagination";
import { dateFormat } from "../../services/dateFromat";
import { useQuery } from "react-query";

type User = {
    id: string,
    name: string,
    email: string,
    createdAt: string;
}

const UserList: NextPage = () => {

    const { data, isLoading, error } = useQuery("users", async () => {
        const response = await fetch('http://localhost:3000/api/users');
        const data = await response.json();

        const users = (data.users as User[]).map(user => {
            return {
                id: user.id,
                name: user.name,
                email: user.email,
                createdAt: dateFormat(user.createdAt),
            }
        })

        return users
    })

    const users: User[] = data || []

    const isWideVersion = useBreakpointValue({
        base: false,
        lg: true,
    })

    useEffect(() => {
    }, [])

    return (
        <Box>
            <Layout>
                <Box flex={"1"} borderRadius={8} bg={"gray.800"} p="8">
                    <Flex mb={"8"} justifyContent={"space-between"} align={"center"}>
                        <Heading size={"lg"} fontWeight={"normal"}>
                            Usuarios
                        </Heading>
                        <Link href={"/users/create"} passHref>
                            <Button
                                as="a"
                                size={"sm"}
                                fontSize={"sm"}
                                colorScheme={"pink"}
                                leftIcon={<Icon as={RiAddLine} />}
                            >
                                Criar novo
                            </Button>
                        </Link>
                    </Flex>
                    {
                        isLoading ? (
                            <Flex
                                justify={"center"}
                            >
                                <Spinner />
                            </Flex>
                        ) : error ? (
                            <Flex
                                justify={"center"}
                            >
                                <Text>
                                    Falha ao obter os dados
                                </Text>
                            </Flex>
                        ) : (
                            <>
                                <Table
                                    colorScheme={"whiteAlpha"}
                                >
                                    <Thead>
                                        <Tr>
                                            <Th
                                                px={["4", "4", "6"]}
                                                color={"green.300"}
                                                width={"8"}
                                            >
                                                <Checkbox colorScheme={"pink"} />
                                            </Th>
                                            <Th>
                                                Usuário
                                            </Th>
                                            {isWideVersion &&
                                                <Th>
                                                    Data de cadastro
                                                </Th>
                                            }
                                            <Th>

                                            </Th>
                                        </Tr>
                                    </Thead>
                                    <Tbody>
                                        {users.map((user, index) => (

                                            <Tr key={index}>
                                                <Td
                                                    px={["4", "4", "6"]}
                                                    color={"green.300"}
                                                    width={"8"}
                                                >
                                                    <Checkbox colorScheme={"pink"} />
                                                </Td>
                                                <Td>
                                                    <Box>
                                                        <Text fontWeight={"bold"}>
                                                            {user.name}
                                                        </Text>
                                                        <Text fontSize={"sm"} color={"gray.300"}>
                                                            {user.email}
                                                        </Text>
                                                    </Box>
                                                </Td>
                                                {
                                                    isWideVersion &&
                                                    <Td>
                                                        {dateFormat(user.createdAt)}
                                                    </Td>
                                                }
                                                <Td>
                                                    {isWideVersion &&
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
                                                    }
                                                </Td>
                                            </Tr>
                                        ))}
                                    </Tbody>
                                </Table >
                                <Pagination />
                            </>
                        )
                    }
                </Box >
            </Layout >
        </Box >
    )
}

export default UserList