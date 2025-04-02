import { getUSer } from "@/api/AuthApi";
import { useQuery } from "@tanstack/react-query";

export const useAuth = () => {

    const {data, isError, isLoading} = useQuery({
        queryKey: ["user"],
        queryFn: getUSer,
        retry: 1,
        refetchOnWindowFocus: false //evita que al cambiar de pestaña se recarge la pagina
    })

    return {data, isError, isLoading}
}