import { Button, Flex, FormControl, FormLabel, Stack } from '@chakra-ui/react'
import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { Input } from '../components/Form/Input'

const Home: NextPage = () => {
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
      >
        <Stack spacing={4}>
          <Input
            label='E-mail'
            info='email'
            type={"email"}
          />
          <Input
            label='Senha'
            info='password'
            type={"password"}
          />
        </Stack>
        <Button type="submit" mt="6" colorScheme={"pink"}>
          Entrar
        </Button>
      </Flex>
    </Flex >
  )
}

export default Home
