import { ApiService } from "@/common/service/api";
import { API_URL_PATIENT } from "@/common/constants/api";
import { useMutation } from "@tanstack/react-query";
import { IPatient } from "../../types";

export async function addPatient(props: IPatient) {
  const apiService = new ApiService();
  return await apiService.post(`${API_URL_PATIENT}`, props);
}

function useAddPatient() {
  const query = useMutation({
    mutationFn: (props: IPatient) => addPatient(props),
});
  return query;
}
export default useAddPatient;
