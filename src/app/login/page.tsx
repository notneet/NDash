"use client";

import {
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  InputGroup,
  InputRightElement,
  useToast,
} from "@chakra-ui/react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { IFormInputs, schemaLogin } from "./schema";

export default function Login() {
  const [isLoading, setIsLoading] = useState(false);
  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);
  const toast = useToast();
  const router = useRouter();

  const {
    formState: { errors },
    setValue,
    handleSubmit,
    watch,
  } = useForm<IFormInputs>({
    resolver: zodResolver(schemaLogin),
  });
  const email = watch("email");
  const password = watch("password");

  const onSubmit: SubmitHandler<IFormInputs> = async (data) => {
    setIsLoading(true);
    /**
     * Process Data here
     */
    await new Promise((res) => setTimeout(res, 3000));
    toast({
      title: "Login Successful",
      position: "top-right",
      status: "success",
      isClosable: true,
    });
    setIsLoading(false);
    console.log(data);

    router.push("/home");
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-center">
      <div className="w-96 h-[500px] bg-foreground/10 rounded-lg py-4 px-5">
        <h4 className="text-2xl font-semibold text-center mb-9">NDash</h4>
        <form onSubmit={handleSubmit(onSubmit)}>
          <FormControl isInvalid={!!errors?.email || !!errors?.password}>
            <FormLabel>Username / Email Address</FormLabel>
            <Input
              type="text"
              placeholder="Enter username or email"
              onChange={(e) => setValue("email", e?.target?.value)}
              isInvalid={!!errors?.email}
            />
            <FormErrorMessage>{errors?.email?.message}.</FormErrorMessage>
            {/*  */}
            <FormLabel className="mt-2.5">Password</FormLabel>
            <InputGroup>
              <Input
                pr="4.5rem"
                type={show ? "text" : "password"}
                placeholder="Enter password"
                onChange={(e) => setValue("password", e?.target?.value)}
                isInvalid={!!errors?.password}
              />
              <InputRightElement width="4.5rem">
                <Button h="1.75rem" size="sm" onClick={handleClick}>
                  {show ? "Hide" : "Show"}
                </Button>
              </InputRightElement>
            </InputGroup>
            <FormErrorMessage>{errors?.password?.message}.</FormErrorMessage>
            {/*  */}
            <Input
              type="submit"
              className="w-full mt-5 hover:cursor-pointer"
              value={"Submit"}
              variant="filled"
              disabled={!email || !password || isLoading}
            />
          </FormControl>
        </form>
      </div>
    </main>
  );
}
