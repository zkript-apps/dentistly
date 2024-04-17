import { API_URL_PROCEDURES } from "@/common/constants/api";
import { useMutation } from "@tanstack/react-query";
import { ApiService } from "@/common/services/api";

export async function deleteProcedure(procedureId: string) {
  const apiService = new ApiService();
  return await apiService.patch(`${API_URL_PROCEDURES}/${procedureId}`);
}
function useDeleteProcedure() {
  const query = useMutation({
    mutationFn: (procedureId: string) => deleteProcedure(procedureId),
  });
  return query;
}

export default useDeleteProcedure;
