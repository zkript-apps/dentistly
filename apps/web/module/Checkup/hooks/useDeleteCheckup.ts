import { API_URL_USER } from "@/common/constants/api";
import { IDeleteCheckup } from "@/common/types";
import { useMutation } from "@tanstack/react-query";
import { ApiService } from "@/common/services/api";

export async function deleteCheckup(props: IDeleteCheckup) {
  const apiService = new ApiService();
  return await apiService.post(`${API_URL_USER}/auth/manual`, props);
}
function useDeleteCheckup() {
  const query = useMutation({
    mutationFn: (props: IDeleteCheckup) => deleteCheckup(props),
  });
  return query;
}

export default useDeleteCheckup;
