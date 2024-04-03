import { API_URL_USER } from "@/common/constants/api";
import { IDelete } from "@/common/types";
import { useMutation } from "@tanstack/react-query";
import { ApiService } from "@/common/services/api";

export async function patientUser (props: IDelete) {
  const apiService = new ApiService();
  return await apiService.post(`${API_URL_USER}/auth/manual`, props);
}
function useDeletePatient() {
  const query = useMutation({
    mutationFn: (props: IDelete) => patientUser(props),
  });
  return query;
}

export default useDeletePatient;