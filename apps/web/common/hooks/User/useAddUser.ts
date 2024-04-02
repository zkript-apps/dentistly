import { API_URL_USERS } from "@/common/constants/api";
import { ApiService } from "@/common/services/api";
import { IUser } from "@/common/types";
import { useMutation } from "@tanstack/react-query";

export async function addUser(props: IUser) {
  console.log(props);
  const apiService = new ApiService();
  return await apiService.post(`${API_URL_USERS}`, props);
}

function useAddUser() {
  const query = useMutation({
    mutationFn: (props: IUser) => addUser(props),
  });
  return query;
}
export default useAddUser;
