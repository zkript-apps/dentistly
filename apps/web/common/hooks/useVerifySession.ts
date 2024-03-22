import { API_URL_USERS } from "@/common/constants";
import { useQuery } from "@tanstack/react-query";
import { ApiService } from "@/common/service/api";

export async function verifySession() {
	const apiService = new ApiService();
	return await apiService.get(`${API_URL_USERS}/auth/verify-session`);
}

function useVerifySession() {
	const query = useQuery({
		queryKey: ["session"],
		queryFn: () => verifySession(),
	});
	return query;
}

export default useVerifySession;
