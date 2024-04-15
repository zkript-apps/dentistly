import { API_URL_OPERATION } from "@/common/constants/api";
import { IOperation } from "@/common/types";
import { useMutation } from "@tanstack/react-query";
import { ApiService } from "@/common/services/api";

export async function addOperation(props: IOperation) {
  const apiService = new ApiService();
  return await apiService.post(`${API_URL_OPERATION}/auth/manual`, props);
}
function useAddOperation() {
  const query = useMutation({
    mutationFn: (props: IOperation) => addOperation(props),
  });
  return query;
}

export default useAddOperation;
