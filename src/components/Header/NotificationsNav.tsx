import { HStack, Icon } from "@chakra-ui/react";
import { FC } from "react";
import { RiNotificationLine, RiUserAddLine } from "react-icons/ri";

export const NotificationNav: FC = () => {
    return (
        <HStack
            spacing={"4"}
            mx={"8"}
            pr={"8"}
            py={"1"}
            color={"gray.50"}
            borderRightWidth={1}
            borderColor={"gray.700"}
        >
            <Icon as={RiNotificationLine} fontSize={20} />
            <Icon as={RiUserAddLine} fontSize={20} />
        </HStack>
    )
}