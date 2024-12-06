import { API_URL_OPERATIONS } from "@/common/constants/api";

import { useMutation } from "@tanstack/react-query";
import { ApiService } from "@/common/services/api";

export async function addOperation(props: any) {
  const apiService = new ApiService();
  return await apiService.post(`${API_URL_OPERATIONS}/auth/manual`, props);
}
function useAddOperation() {
  const query = useMutation({
    mutationFn: (props: any) => addOperation(props),
  });
  return query;
}

export default useAddOperation;
