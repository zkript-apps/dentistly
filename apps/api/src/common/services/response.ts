interface IBackendResponse {
  error: boolean;
  message?: string;
  item?: string | object;
  items?: object[];
  pageItemCount?: number;
  allItemCount?: number;
  currPage?: number;
}

export type T_ResponseParams = Omit<IBackendResponse, "error">;

export class ResponseService {
  private config: IBackendResponse;

  constructor() {
    this.config = {
      error: false,
    };
  }

  success(responseParams?: T_ResponseParams): IBackendResponse {
    return {
      ...this.config,
      ...responseParams,
      error: false,
    };
  }

  error(responseParams?: T_ResponseParams): IBackendResponse {
    return {
      ...this.config,
      ...responseParams,
      error: true,
    };
  }
}
