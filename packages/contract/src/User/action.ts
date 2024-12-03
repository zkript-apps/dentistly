import { ApiService } from "../common/services/api";
import { T_User_Login, T_User_Register } from "./type";

const ACTION_BASE_URL = "/users";

export class UserService {
  private api: ApiService;

  constructor(source: "main" | "mock" = "main") {
    this.api = new ApiService(source);
  }

  async login(credentials: T_User_Login) {
    return this.api.post(`${ACTION_BASE_URL}/login`, credentials);
  }

  async register(userData: T_User_Register) {
    return this.api.post(`${ACTION_BASE_URL}/register`, userData);
  }

  static getQueryKeys() {
    return {
      userLogin: "user-login",
      userRegistration: "user-registration",
    };
  }
}
