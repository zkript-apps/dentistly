import { ApiService } from "@/common/service/api";
import { useMutation } from "@tanstack/react-query";
import { API_URL_USER } from "../constants/api";
import { IUser } from "../types";

export async function addUser(props: IUser) {
  const apiService = new ApiService();
  return await apiService.post(`${API_URL_USER}`, props);
}

function useAddUser() {
  const query = useMutation({
    mutationFn: (props: IUser) => addUser(props),
  });
  return query;
}
export default useAddUser;
