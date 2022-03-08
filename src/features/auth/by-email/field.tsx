import {
  Box,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { Controller, useFormContext } from "react-hook-form";

type Props = {
  name: string;
  label: string;
  type?: React.HTMLInputTypeAttribute;
};

export const Field: React.FC<Props> = ({ name, label, type = "text" }) => {
  const {
    control,
    formState: { errors },
  } = useFormContext();
  return (
    <Box w="100%" mb="25px">
      <FormControl isInvalid={Boolean(errors[name])}>
        <FormLabel color="#fff" htmlFor={name}>
          <Text as="span" color="red">
            *
          </Text>
          {label}
        </FormLabel>
        <Controller
          control={control}
          name={name}
          render={({ field }) => (
            <Input
              type={type}
              bg="#fff"
              value={field.value}
              onChange={field.onChange}
              id={name}
            />
          )}
        />
        <FormErrorMessage>
          {errors[name] && errors[name].message}
        </FormErrorMessage>
      </FormControl>
    </Box>
  );
};
