import { API_URL_PATIENT } from "@/common/constants/api";
import { useMutation } from "@tanstack/react-query";
import { ApiService } from "@/common/services/api";

export async function patientUser (patientId: string) {
  const apiService = new ApiService();
  return await apiService.patch(`${API_URL_PATIENT}/${patientId}` );
}
function useDeletePatient() {
  const query = useMutation({
    mutationFn: (patientId: string) => patientUser(patientId),
  });
  return query;
}

export default useDeletePatient;