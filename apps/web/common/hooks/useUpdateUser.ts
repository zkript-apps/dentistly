import { ApiService } from "@/common/service/api"
import { IUser } from "../types";
import { useMutation } from "@tanstack/react-query"
import { API_URL_USER } from "../constants/api";

export async function updateUser(
  id: string | null,
  props: IUser
) {
  const apiService = new ApiService()
  return await apiService.patch(`${API_URL_USER}/${id}`,props)
}

function useUpdateUser(id: string | null) {
  const query = useMutation({
    mutationFn: (props: IUser) => updateUser(id, props),
  })
  return query
}
export default useUpdateUser;