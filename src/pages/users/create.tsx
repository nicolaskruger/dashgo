import { Box, Button, Divider, Flex, Heading, HStack, SimpleGrid, VStack } from "@chakra-ui/react";
import { NextPage } from "next";
import { Input } from "../../components/Form/Input";
import { Header } from "../../components/Header";
import { Layout } from "../../components/Layot";
import { Sidebar } from "../../components/Sidebar";

const CreateUser: NextPage = () => {
    return (
        <Box>
            <Layout>

                <Box flex={"1"} borderRadius={8} bg={"gray.800"} p={["6", "8"]}>
                    <Heading size={"lg"} fontWeight={"normal"}>Criar usuário</Heading>
                    <Divider my={"6"} borderColor={"gray.700"} />

                    <VStack spacing={"8"}>
                        <SimpleGrid minChildWidth={"240px"} spacing={["6", "8"]} w="100%">
                            <Input info="name" label="Nome completo" />
                            <Input info="email" label="E-mail" />
                        </SimpleGrid>
                        <SimpleGrid minChildWidth={"240px"} spacing={["6", "8"]} w="100%">
                            <Input info="password" type={"password"} label="Senha" />
                            <Input info="password_confirmation" type={"password"} label="Confirmação de senha" />
                        </SimpleGrid>
                    </VStack>

                    <Flex mt={"8"} justify={"flex-end"}>
                        <HStack spacing={"4"}>
                            <Button colorScheme={"whiteAlpha"}>
                                Cancelar
                            </Button>
                            <Button colorScheme={"pink"}>
                                Salvar
                            </Button>
                        </HStack>
                    </Flex>

                </Box>
            </Layout>

        </Box >
    )
}

export default CreateUser