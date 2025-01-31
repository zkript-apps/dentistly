import { API_URL_CHECKUPS } from "@/common/constants/api";
import { IDeleteCheckup } from "@/common/types";
import { useMutation } from "@tanstack/react-query";
import { ApiService } from "@/common/services/api";

export async function deleteCheckup(id: string) {
  const apiService = new ApiService();
  console.log(`${API_URL_CHECKUPS}/${id}`);
  return await apiService.delete(`${API_URL_CHECKUPS}/${id}`);
}
function useDeleteCheckup() {
  const query = useMutation({
    mutationFn: (id: string) => deleteCheckup(id),
  });
  return query;
}

export default useDeleteCheckup;
