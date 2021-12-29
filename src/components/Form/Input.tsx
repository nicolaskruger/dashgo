import { InputProps, Input as InputC, FormControl, FormLabel } from "@chakra-ui/react";
import { FC } from "react";


interface Props extends InputProps {
    info: string,
    label?: string,
}


export const Input: FC<Props> = ({ label, info, ...props }) => {
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
                {...props}
            />
        </FormControl>
    )
}