import { ApiService } from "@/common/service/api";
import { API_URL_PATIENT } from "@/common/constants/api";
import { useQuery } from "@tanstack/react-query";

export async function getOnePatient(id: string | undefined) {
  const apiService = new ApiService();
  return await apiService.get(`${API_URL_PATIENT}/${id}`);
}

function useGetOnePatient(id: string | undefined) {
  const query = useQuery({
    queryKey: ["patient", id],
    queryFn: () => getOnePatient(id),
  });
  return query;
}
export default useGetOnePatient;
