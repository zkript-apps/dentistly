import { API_URL_OPERATIONS } from "@/common/constants/api";
import { useMutation } from "@tanstack/react-query";
import { ApiService } from "@/common/services/api";
import { IUpdateOperation } from "@/common/types";

export async function updateOperation(props: IUpdateOperation, _id: string) {
  const apiService = new ApiService();
  return await apiService.patch(`${API_URL_OPERATIONS}/${_id}`, props);
}

function useUpdateOperation(_id: string) {
  const query = useMutation({
    mutationFn: (props: IUpdateOperation) => updateOperation(props, _id),
  });
  return query;
}

export default useUpdateOperation;
