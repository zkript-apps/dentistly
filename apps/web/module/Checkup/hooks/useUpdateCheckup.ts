import { API_URL_CHECKUPS } from "@/common/constants/api";
import { IUpdateCheckup } from "@/common/types";
import { useMutation } from "@tanstack/react-query";
import { ApiService } from "@/common/services/api";

export async function updateCheckup(id: string, props: any) {
  const apiService = new ApiService();
  return await apiService.patch(`${API_URL_CHECKUPS}/${id}`, props);
}
function useUpdateCheckup(id: string) {
  const query = useMutation({
    mutationFn: (props: any) => updateCheckup(id, props),
  });
  return query;
}

export default useUpdateCheckup;
