import { GetSiteResponse } from './responseTypes/site/GetSiteResponse.js';

interface HeaderMap {
  [key: string]: string;
}

export class SublinksClient {
  #baseUrl: string;
  #apiUrl: string;
  #headers: HeaderMap;

  constructor({
    instance,
    insecure = false,
    headers = {},
  }: {
    instance: string;
    insecure?: boolean;
    headers?: HeaderMap;
  }) {
    const domain = instance;
    const protocol = insecure ? 'http' : 'https';

    this.#baseUrl = `${protocol}://${domain}`;
    this.#apiUrl = `${this.#baseUrl}/api/v3`;
    this.#headers = {
      'Content-Type': 'application/json',
      ...headers,
    };
  }

  async getSite() {
    return this.#apiWrapper<GetSiteResponse>({
      path: 'site',
      method: 'GET',
    });
  }

  async #apiWrapper<ResponseType>({
    path,
    method = 'GET',
    data,
    headers = {},
  }: {
    path: string;
    method?: 'GET' | 'POST' | 'PUT' | 'DELETE';
    data?: any;
    headers?: any;
  }): Promise<ResponseType> {
    const response = await fetch(`${this.#apiUrl}/${path}`, {
      method,
      headers: {
        ...this.#headers,
        ...headers,
      },
      body: data ? undefined : JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error(response.statusText ?? 'Bad API response');
    }

    return await response.json();
  }
}
