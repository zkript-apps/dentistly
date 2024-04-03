import { API_URL_USER } from "@/common/constants/api";
import { useMutation } from "@tanstack/react-query";
import { ApiService } from "@/common/services/api";
import { IPatient } from "@/common/types";

export async function updatePatient(props: IPatient) {
  const apiService = new ApiService();
  return await apiService.post(`${API_URL_USER}/auth/register`, props);
}

function useUpdatePatient() {
  const query = useMutation({
    mutationFn: (props: IPatient) => updatePatient(props),
  });
  return query;
}

export default useUpdatePatient;