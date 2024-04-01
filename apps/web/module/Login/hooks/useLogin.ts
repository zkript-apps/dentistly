import { API_URL_USER } from "@/common/constants/api";
import { IUser } from "@/common/types";
import { useMutation } from "@tanstack/react-query";
import { ApiService } from "@/common/services/api";

export async function loginUser(props: IUser) {
  const apiService = new ApiService();
  return await apiService.post(`${API_URL_USER}/auth/manual`, props);
}
function useLogin() {
  const query = useMutation({
    mutationFn: (props: IUser) => loginUser(props),
  });
  return query;
}

export default useLogin;
