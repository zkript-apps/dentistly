import { ApiService } from "@/common/service/api"
import { API_URL_USER } from "../constants/api";
import { useQuery } from "@tanstack/react-query"

export async function getAllUsers() {
  const apiService = new ApiService()
  return await apiService.get(`${API_URL_USER}/`)
}

function useGetAllUsers() {
  const query = useQuery({
    queryKey: ["users"],
    queryFn: () => getAllUsers(),
    refetchOnWindowFocus: false,
  })
  return query
}
export default useGetAllUsers