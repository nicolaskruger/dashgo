
import { useQuery, UseQueryOptions } from "react-query";
import { api } from "../api";
import { dateFormat } from "../dateFromat";

type User = {
    id: string,
    name: string,
    email: string,
    created_at: string;
}

type UserObj = {
    id: string,
    name: string,
    email: string,
    createdAt: string;
}

type GetUserResult = { users: UserObj[], totalCount: number }

export const getUsers = async (page: number): Promise<GetUserResult> => {
    const { data, headers } = await api.get<{ users: User[] }>(`users`, {
        params: {
            page,
        }
    });

    const totalCount = Number(headers["x-total-count"])

    console.log(data)

    const users = (data.users as User[]).map(user => {
        return {
            id: user.id,
            name: user.name,
            email: user.email,
            createdAt: dateFormat(user.created_at),
        }
    })

    return { users, totalCount }
}

export const useUsers = (page: number, options?: Omit<UseQueryOptions<GetUserResult, GetUserResult, GetUserResult, (string | number)[]>, "queryKey" | "queryFn">) => {
    return useQuery([`users`, page], async () => await getUsers(page), {
        staleTime: 1000 * 60 * 10,
        ...options
    })
}