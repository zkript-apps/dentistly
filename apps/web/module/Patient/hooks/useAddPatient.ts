import { API_URL_USERS } from "@/common/constants/api";
import { IPatient } from "@/common/types";
import { useMutation } from "@tanstack/react-query";
import { ApiService } from "@/common/services/api";

export async function patientUser(props: IPatient) {
  const apiService = new ApiService();
  return await apiService.post(`${API_URL_USERS}/auth/manual`, props);
}
function useAddPatient() {
  const query = useMutation({
    mutationFn: (props: IPatient) => patientUser(props),
  });
  return query;
}

export default useAddPatient;
