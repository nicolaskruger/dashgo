import { Box, Link as LinkC, Button, Checkbox, CircularProgress, Flex, Heading, Icon, Spinner, Table, Tbody, Td, Text, Th, Thead, Tr, useBreakpointValue } from "@chakra-ui/react";
import { NextPage } from "next";
import Link from "next/link";
import { useEffect, useState } from "react";
import { RiAddLine, RiPencilLine } from "react-icons/ri";
import { Layout } from "../../components/Layot";
import { Pagination } from "../../components/Pagination";
import { dateFormat } from "../../services/dateFromat";
import { useQuery } from "react-query";
import { api } from "../../services/api";
import { useUsers } from "../../services/hooks/useUsers";
import { queryClient } from "../../services/queryClient";


type User = {
    id: string,
    name: string,
    email: string,
    createdAt: string;
}

const UserList: NextPage = () => {

    const [page, setPage] = useState(1);

    const { data, isLoading, isRefetching, error } = useUsers(page)

    const users: User[] = data?.users || []

    const isWideVersion = useBreakpointValue({
        base: false,
        lg: true,
    })

    useEffect(() => {
    }, [])

    const handelPrefetchUser = async (userId: number) => {
        await queryClient.prefetchQuery(['user', userId], async () => {
            const response = await api.get<User>(`users/${userId}`)
            return response.data
        }, {
            staleTime: 1000 * 60 * 10
        })
    }

    return (
        <Box>
            <Layout>
                <Box flex={"1"} borderRadius={8} bg={"gray.800"} p="8">
                    <Flex mb={"8"} justifyContent={"space-between"} align={"center"}>
                        <Heading size={"lg"} fontWeight={"normal"}>
                            Usuarios
                            {(!isLoading && isRefetching) &&
                                <Spinner
                                    size={"sm"}
                                    color="gray.500"
                                    ml={"4"}
                                />}
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
                                                        <LinkC
                                                            color={"purple.400"}
                                                            onMouseEnter={() => { handelPrefetchUser(user.id) }}
                                                        >
                                                            <Text fontWeight={"bold"}>
                                                                {user.name}
                                                            </Text>
                                                        </LinkC>
                                                        <Text fontSize={"sm"} color={"gray.300"}>
                                                            {user.email}
                                                        </Text>
                                                    </Box>
                                                </Td>
                                                {
                                                    isWideVersion &&
                                                    <Td>
                                                        {user.createdAt}
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
                                <Pagination
                                    totalCountOfRegister={data?.totalCount as number}
                                    currentPage={page}
                                    onPageChange={(numPage) => { setPage(numPage) }}
                                />
                            </>
                        )
                    }
                </Box >
            </Layout >
        </Box >
    )
}

export default UserList