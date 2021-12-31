import { InputProps, Input as InputC, FormControl, FormLabel } from "@chakra-ui/react";
import { forwardRef, ForwardRefRenderFunction } from "react";


interface Props extends InputProps {
    info: string,
    label?: string,
}


const InputBase: ForwardRefRenderFunction<HTMLInputElement, Props> = ({ label, info, ...props }, ref) => {
    return (
        <FormControl>
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
        </FormControl>
    )
}

export const Input = forwardRef(InputBase)