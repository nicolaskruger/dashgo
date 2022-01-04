import { Box, Button, Divider, Flex, Heading, HStack, SimpleGrid, VStack } from "@chakra-ui/react";
import { yupResolver } from "@hookform/resolvers/yup";
import { NextPage } from "next";
import Link from "next/link";
import { SubmitHandler, useForm } from "react-hook-form";
import { Input } from "../../components/Form/Input";
import { Layout } from "../../components/Layot";
import * as yup from "yup";

type CreateUserFormData = {
    name: string,
    email: string,
    password: string,
    password_confirmation: string,
}

const createUserFormSchema = yup.object().shape({
    name: yup.string().required("Nome obrigatorio"),
    email: yup.string().required("Email obrigatorio").email("Email invalido"),
    password: yup.string().length(6, "Precisa ter 6 ou mais caracters").required("Senha obrigatoria"),
    password_confirmation: yup.string().oneOf([yup.ref("password"), null],
        "Senhas são diferentes"
    )
})


const CreateUser: NextPage = () => {



    const { register, handleSubmit, formState } = useForm({
        resolver: yupResolver(createUserFormSchema)
    });

    const handleCreateUser: SubmitHandler<CreateUserFormData> = async (values, event) => {
        await new Promise(resolve => setTimeout(resolve, 2000))
    }

    const { errors } = formState;

    return (
        <Box>
            <Layout>

                <Box
                    as={"form"}
                    flex={"1"}
                    borderRadius={8}
                    bg={"gray.800"}
                    p={["6", "8"]}
                    onSubmit={handleSubmit(handleCreateUser)}
                >
                    <Heading size={"lg"} fontWeight={"normal"}>Criar usuário</Heading>
                    <Divider my={"6"} borderColor={"gray.700"} />

                    <VStack spacing={"8"}>
                        <SimpleGrid minChildWidth={"240px"} spacing={["6", "8"]} w="100%">
                            <Input
                                info="name"
                                label="Nome completo"
                                error={errors.name}
                                {...register("name")}
                            />
                            <Input
                                info="email"
                                label="E-mail"
                                error={errors.email}
                                {...register("email")}
                            />
                        </SimpleGrid>
                        <SimpleGrid minChildWidth={"240px"} spacing={["6", "8"]} w="100%">
                            <Input
                                info="password"
                                type={"password"}
                                label="Senha"
                                error={errors.password}
                                {...register("password")}
                            />
                            <Input
                                info="password_confirmation"
                                type={"password"}
                                label="Confirmação de senha"
                                error={errors.password_confirmation}
                                {...register("password_confirmation")}
                            />
                        </SimpleGrid>
                    </VStack>

                    <Flex mt={"8"} justify={"flex-end"}>
                        <HStack spacing={"4"}>
                            <Link href={"/users"} passHref>
                                <Button as="a" colorScheme={"whiteAlpha"}>
                                    Cancelar
                                </Button>
                            </Link>
                            <Button
                                type="submit"
                                colorScheme={"pink"}
                                isLoading={formState.isSubmitting}
                            >
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