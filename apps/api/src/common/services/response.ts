interface T_BackendResponse{
    error: boolean
    message?: string
    item?: string | object
    items?: object[]
    pageItemCount?: number
    allItemCount?: number
    currPage?: number
}

export type T_ResponseParams = Omit<T_BackendResponse, 'error'>

export class ResponseService {
  private config: T_BackendResponse

  constructor() {
    this.config = {
      error: false,
    }
  }

  success(responseParams?: T_ResponseParams): T_BackendResponse {
    return {
      ...this.config,
      ...responseParams,
      error: false,
    }
  }

  error(responseParams?: T_ResponseParams): T_BackendResponse {
    return {
      ...this.config,
      ...responseParams,
      error: true,
    }
  }
}
