import { ApiService } from "@/common/service/api";
import { API_URL_USER } from "../constants/api";
import { useQuery } from "@tanstack/react-query";

export async function getOneUserId(id: string | undefined) {
  const apiService = new ApiService();
  return await apiService.get(`${API_URL_USER}/${id}`);
}

function useGetOneUser(id: string | undefined) {
  const query = useQuery({
    queryKey: ["users", id],
    queryFn: () => getOneUserId(id),
    refetchOnWindowFocus: false,
    enabled: !!id,
  });
  return query;
}
export default useGetOneUser;
