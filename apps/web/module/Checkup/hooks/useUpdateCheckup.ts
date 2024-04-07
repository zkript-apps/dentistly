import { API_URL_USERS } from "@/common/constants/api";
import { IUpdateCheckup } from "@/common/types";
import { useMutation } from "@tanstack/react-query";
import { ApiService } from "@/common/services/api";

export async function updateCheckup(props: IUpdateCheckup) {
  const apiService = new ApiService();
  return await apiService.post(`${API_URL_USERS}/auth/manual`, props);
}
function useUpdateCheckup() {
  const query = useMutation({
    mutationFn: (props: IUpdateCheckup) => updateCheckup(props),
  });
  return query;
}

export default useUpdateCheckup;
