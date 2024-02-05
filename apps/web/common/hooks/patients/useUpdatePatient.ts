import { ApiService } from "@/common/service/api";
import { API_URL_PATIENT } from "@/common/constants/api";
import { useMutation } from "@tanstack/react-query";
import { IPatient } from "../../types";

export async function updatePatient(id: string | null, props: IPatient) {
    const apiService = new ApiService();
    return await apiService.patch(`${API_URL_PATIENT}/${id}`, props);
  }

  function useUpdatePatient(id: string | null) {
    const query = useMutation({
      mutationFn: (props: IPatient) => updatePatient(id, props),
    });
    return query;
  }
  export default useUpdatePatient;
  