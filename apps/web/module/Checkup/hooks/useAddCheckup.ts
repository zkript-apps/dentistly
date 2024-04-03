import { API_URL_USER } from "@/common/constants/api";
import { ICheckup } from "@/common/types";
import { useMutation } from "@tanstack/react-query";
import { ApiService } from "@/common/services/api";

export async function checkupUser(props: ICheckup) {
  const apiService = new ApiService();
  return await apiService.post(`${API_URL_USER}/auth/manual`, props);
}
function useAddCheckup() {
  const query = useMutation({
    mutationFn: (props: ICheckup) => checkupUser(props),
  });
  return query;
}

export default useAddCheckup;
