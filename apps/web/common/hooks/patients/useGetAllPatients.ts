import { ApiService } from "@/common/service/api";
import { API_URL_PATIENT } from "@/common/constants/api";
import { useQuery } from "@tanstack/react-query";

export async function getAllPatients() {
  const apiService = new ApiService();
  return await apiService.get(`${API_URL_PATIENT}/`);
}

function useGetAllPatients() {
  const query = useQuery({
    queryKey: ["patients"],
    queryFn: () => getAllPatients(),
    refetchOnWindowFocus: false,
  });
  return query;
}
export default useGetAllPatients;
