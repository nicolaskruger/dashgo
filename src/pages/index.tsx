import { Button, Flex, FormControl, FormLabel, Stack } from '@chakra-ui/react'
import type { NextPage } from 'next'
import { SubmitHandler, useForm } from "react-hook-form";
import Head from 'next/head'
import Image from 'next/image'
import { Input } from '../components/Form/Input'

type SignInFormData = {
  email: string,
  password: string
}

const Home: NextPage = () => {

  const { register
    , handleSubmit, formState } = useForm();

  const handleSignIn: SubmitHandler<SignInFormData> = async (values, event) => {
    await new Promise(resolve => setTimeout(resolve, 2000))
  }

  return (
    <Flex
      w="100vw"
      h="100vh"
      align="center"
      justify="center"
    >
      <Flex
        as="form"
        w="100%"
        maxW={360}
        bg="gray.800"
        p="8"
        borderRadius={8}
        flexDir="column"
        onSubmit={handleSubmit(handleSignIn)}
      >
        <Stack spacing={4}>
          <Input
            label='E-mail'
            info='email'
            type={"email"}
            {...register("email")}
          />
          <Input
            label='Senha'
            info='password'
            type={"password"}
            {...register("password")}
          />
        </Stack>
        <Button
          type="submit"
          mt="6"
          colorScheme={"pink"}
          isLoading={formState.isSubmitting}
        >
          Entrar
        </Button>
      </Flex>
    </Flex >
  )
}

export default Home
