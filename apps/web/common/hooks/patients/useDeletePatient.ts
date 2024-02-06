import { ApiService } from "@/common/service/api";
import { API_URL_PATIENT } from "@/common/constants/api";
import { useMutation } from "@tanstack/react-query";

export async function deletePatient(id: string) {
  const apiService = new ApiService();
  return await apiService.delete(`${API_URL_PATIENT}/${id}`);
}

function useDeletePatient() {
  const query = useMutation({
    mutationFn: (id: string) => deletePatient(id),
  });
  return query;
}

export default useDeletePatient;
