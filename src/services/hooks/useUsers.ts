
import { useQuery } from "react-query";
import { api } from "../api";
import { dateFormat } from "../dateFromat";

type User = {
    id: string,
    name: string,
    email: string,
    createdAt: string;
}

const getUsers = async (): Promise<User[]> => {
    const { data } = await api.get<{ users: User[] }>('users');

    const users = (data.users as User[]).map(user => {
        return {
            id: user.id,
            name: user.name,
            email: user.email,
            createdAt: dateFormat(user.createdAt),
        }
    })

    return users
}

export const useUsers = () => {
    return useQuery("users", getUsers, {
        staleTime: 1000 * 5
    })
}