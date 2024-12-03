import { API_ROOT, MOCK_ROOT } from "@repo/constants";
import { API_AUTH_URL, WEB_URL } from "../constants/ev";
import { T_Backend_Response } from "../../BackendResponse";

type WithModifiedKeys<
  T,
  Modifications extends Partial<{ [K in keyof T]: unknown }>,
> = Omit<T, keyof Modifications> & Modifications;

export class ApiService {
  private BASE_URL: string | undefined;
  private ROOT_PATH: string | undefined;

  constructor(source: "main" | "auth" | "mock" = "main") {
    if (source === "main") {
      this.BASE_URL = WEB_URL;
      this.ROOT_PATH = API_ROOT;
    } else if (source === "auth") {
      this.BASE_URL = API_AUTH_URL;
      this.ROOT_PATH = API_ROOT;
    } else {
      this.BASE_URL = WEB_URL;
      this.ROOT_PATH = MOCK_ROOT;
    }
  }

  private constructOptions(removeContentType = false) {
    const headers = {
      ...(!removeContentType && {
        "Content-Type": "application/json",
      }),
    } as Record<string, any>;
    const options = {
      headers,
      credentials: "include" as RequestCredentials,
    };
    return options;
  }

  async get<
    Modifications extends Partial<{ [K in keyof T_Backend_Response]: unknown }>,
  >(
    endpoint: string,
    params?: Record<string, any>,
    signal?: AbortSignal
  ): Promise<WithModifiedKeys<T_Backend_Response, Modifications>> {
    const reqParams = new URLSearchParams(params).toString();
    const otherOptions = this.constructOptions();
    const res = fetch(
      `${this.BASE_URL}${this.ROOT_PATH}${endpoint}${params ? `?${reqParams}` : ""}`,
      {
        ...otherOptions,
        ...(signal ? { signal } : {}),
      }
    );
    return (await res).json();
  }

  async post<
    Modifications extends Partial<{ [K in keyof T_Backend_Response]: unknown }>,
  >(
    endpoint: string,
    body: any,
    raw?: boolean,
    removeContentType?: boolean
  ): Promise<WithModifiedKeys<T_Backend_Response, Modifications>> {
    const otherOptions = this.constructOptions(removeContentType);
    const res = fetch(`${this.BASE_URL}${this.ROOT_PATH}${endpoint}`, {
      method: "POST",
      body: !raw ? JSON.stringify(body) : body,
      ...otherOptions,
    });
    return (await res).json();
  }

  async patch<
    Modifications extends Partial<{ [K in keyof T_Backend_Response]: unknown }>,
  >(
    endpoint: string,
    body?: any,
    raw?: boolean,
    removeContentType?: boolean
  ): Promise<WithModifiedKeys<T_Backend_Response, Modifications>> {
    const otherOptions = this.constructOptions(removeContentType);
    const res = fetch(`${this.BASE_URL}${this.ROOT_PATH}${endpoint}`, {
      method: "PATCH",
      body: !raw ? JSON.stringify(body) : body,
      ...otherOptions,
    });
    return (await res).json();
  }

  async delete<
    Modifications extends Partial<{ [K in keyof T_Backend_Response]: unknown }>,
  >(
    endpoint: string,
    body?: any,
    raw?: boolean,
    removeContentType?: boolean
  ): Promise<WithModifiedKeys<T_Backend_Response, Modifications>> {
    const otherOptions = this.constructOptions(removeContentType);
    const res = fetch(`${this.BASE_URL}${this.ROOT_PATH}${endpoint}`, {
      method: "DELETE",
      body: !raw ? JSON.stringify(body) : body,
      ...otherOptions,
    });
    return (await res).json();
  }
}
