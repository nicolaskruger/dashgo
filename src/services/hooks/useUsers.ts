
import { useQuery } from "react-query";
import { api } from "../api";
import { dateFormat } from "../dateFromat";

type User = {
    id: string,
    name: string,
    email: string,
    createdAt: string;
}

const getUsers = async (page: number): Promise<{ users: User[], totalCount: number }> => {
    const { data, headers } = await api.get<{ users: User[] }>(`users`, {
        params: {
            page,
        }
    });

    const totalCount = Number(headers["x-total-count"])

    const users = (data.users as User[]).map(user => {
        return {
            id: user.id,
            name: user.name,
            email: user.email,
            createdAt: dateFormat(user.createdAt),
        }
    })

    return { users, totalCount }
}

export const useUsers = (page: number) => {
    return useQuery([`users`, page], async () => await getUsers(page), {
        staleTime: 1000 * 5
    })
}