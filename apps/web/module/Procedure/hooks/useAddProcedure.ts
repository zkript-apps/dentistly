import { API_URL_PROCEDURES } from "@/common/constants/api";

import { useMutation } from "@tanstack/react-query";
import { ApiService } from "@/common/services/api";

export async function addProcedure(props: any) {
  const apiService = new ApiService();
  return await apiService.post(`${API_URL_PROCEDURES}/auth/manual`, props);
}
function useAddProcedure() {
  const query = useMutation({
    mutationFn: (props: any) => addProcedure(props),
  });
  return query;
}

export default useAddProcedure;
