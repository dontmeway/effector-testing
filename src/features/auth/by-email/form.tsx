import { Button, Heading, Stack } from "@chakra-ui/react";
import { FormProvider, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useStore } from "effector-react";

import { authByEmailSchema } from "@shared/schemas";
import { userModel } from "@entities/user";

import { Field } from "./field";
import { authModel } from "./model";

export const Form = () => {
  const isLoading = useStore(authModel.$isLoading);
  const formMethods = useForm<userModel.LoginFormTypes>({
    mode: "onBlur",
    resolver: yupResolver(authByEmailSchema),
  });

  return (
    <Stack
      maxW="550px"
      w="100%"
      d="flex"
      flexDir="column"
      alignItems="center"
      as="form"
      onSubmit={formMethods.handleSubmit(authModel.submitted)}
    >
      <Heading color="#fff" mb="40px" as="h1">
        Авторизация
      </Heading>
      <FormProvider {...formMethods}>
        <Field name="email" label="Электронная почта" />
        <Field type="password" name="password" label="Пароль" />
      </FormProvider>
      <Button
        isLoading={isLoading}
        disabled={isLoading}
        mt="20px"
        type="submit"
        colorScheme="linkedin"
        variant="solid"
      >
        Авторизация
      </Button>
    </Stack>
  );
};
