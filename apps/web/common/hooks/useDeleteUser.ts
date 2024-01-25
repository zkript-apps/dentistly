import { ApiService } from "@/common/service/api"
import { API_URL_USER } from "../constants/api";
import { useMutation } from "@tanstack/react-query"

export async function removeUser(id: string) {
  const apiService = new ApiService()
  return await apiService.delete(
    `${API_URL_USER}/${id}`
  )
}

function useDeleteUser(id: string) {
  const query = useMutation({
    mutationFn: () => removeUser(id),
  })
  return query
}
export default useDeleteUser;