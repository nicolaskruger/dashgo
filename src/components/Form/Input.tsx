import { InputProps, Input as InputC, FormControl, FormLabel, FormErrorMessage } from "@chakra-ui/react";
import { forwardRef, ForwardRefRenderFunction } from "react";
import { FieldError } from "react-hook-form";


interface Props extends InputProps {
    info: string,
    label?: string,
    error?: FieldError
}


const InputBase: ForwardRefRenderFunction<HTMLInputElement, Props> = ({ label, info, error = null, ...props }, ref) => {
    return (
        <FormControl isInvalid={!!error}>
            {!!label && <FormLabel htmlFor={info}>
                {label}
            </FormLabel>}
            <InputC
                id={info}
                name={info}
                focusBorderColor='pink.500'
                bgColor={"gray.900"}
                variant={"filled"}
                _hover={{
                    bgColor: "gray.900",
                }}
                size={"lg"}
                ref={ref}
                {...props}
            />
            {!!error &&
                <FormErrorMessage>
                    {error.message}
                </FormErrorMessage>
            }
        </FormControl>
    )
}

export const Input = forwardRef(InputBase)