import { API_URL_PATIENTS } from "@/common/constants/api";
import { useMutation } from "@tanstack/react-query";
import { ApiService } from "@/common/services/api";
import { IPatient } from "@/common/types";

export async function updatePatient(props: IPatient, patientId: string) {
  const apiService = new ApiService();
  return await apiService.patch(`${API_URL_PATIENTS}/${patientId}`, props);
}

function useUpdatePatient(patientId: string) {
  const query = useMutation({
    mutationFn: (props: IPatient) => updatePatient(props, patientId),
  });
  return query;
}

export default useUpdatePatient;
