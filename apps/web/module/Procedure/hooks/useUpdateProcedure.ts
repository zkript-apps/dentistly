import { API_URL_PROCEDURES } from "@/common/constants/api";
import { useMutation } from "@tanstack/react-query";
import { ApiService } from "@/common/services/api";
import { IUpdateProcedure } from "@/common/types";

export async function updateProcedure(props:IUpdateProcedure, procedureId: string) {
  const apiService = new ApiService();
  return await apiService.patch(`${API_URL_PROCEDURES}/${procedureId}`, props);
}

function useUpdateProcedure(procedureId: string) {
  const query = useMutation({
    mutationFn: (props:IUpdateProcedure) => updateProcedure(props, procedureId),
  });
  return query;
}

export default useUpdateProcedure;
