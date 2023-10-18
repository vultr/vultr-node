export interface ApiEndpoint {
  url: string
  requestType: HttpMethod
  apiKeyRequired: boolean
  parameters?: ApiParameters
}

export type HttpMethod = 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE' | 'OPTIONS'

export type RecursiveRecord =
  | string
  | boolean
  | number
  | symbol
  | { [key: string]: RecursiveRecord }
  | undefined

export type UserConfiguration = { baseUrl: string; apiKey: string }

export type ApiParameterOptions = {
  type: string
  required?: boolean
  path?: boolean
}

export type ApiParameters = Record<string, ApiParameterOptions>
