import { LoginRequest } from './requestTypes/user/LoginRequest.js';
import { GetPostsRequest } from './requestTypes/post/GetPostsRequest.js';
import { GetSiteResponse } from './responseTypes/site/GetSiteResponse.js';
import { GetPostsResponse } from './responseTypes/post/GetPostsResponse.js';
import { SuccessResponse } from './responseTypes/user/SuccessResponse.js';
import { GetCommentsResponse } from './responseTypes/comment/GetCommentsResponse.js';
import { GetCommentsRequest } from './requestTypes/comment/GetCommentsRequest.js';
import { CreatePrivateMessageRequest } from './requestTypes/privatemessage/CreatePrivateMessageRequest.js';
import { CreatePrivateMessageResponse } from './responseTypes/privatemessage/CreatePrivateMessageResponse.js';
import { RemovePostRequest } from './requestTypes/post/RemovePostRequest.js';
import { RemovePostResponse } from './responseTypes/post/RemovePostResponse.js';
import { RemoveCommentRequest } from './requestTypes/comment/RemoveCommentRequest.js';
import { RemoveCommentResponse } from './responseTypes/comment/RemoveCommentResponse.js';

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

  async getPosts(request?: GetPostsRequest) {
    return await this.#apiWrapper<GetPostsResponse>({
      path: 'post/list',
      method: 'GET',
      data: request,
    });
  }

  async getComments(request?: GetCommentsRequest) {
    return await this.#apiWrapper<GetCommentsResponse>({
      path: 'comment/list',
      method: 'GET',
      data: request,
    });
  }

  async login(request: LoginRequest) {
    return await this.#apiWrapper<SuccessResponse>({
      path: 'user/login',
      method: 'POST',
      data: request,
    });
  }

  async removePost(request: RemovePostRequest) {
    return await this.#apiWrapper<RemovePostResponse>({
      path: 'post/remove',
      method: 'POST',
      data: request,
    });
  }

  async removeComment(request: RemoveCommentRequest) {
    return await this.#apiWrapper<RemoveCommentResponse>({
      path: 'comment/remove',
      method: 'POST',
      data: request,
    });
  }

  async createPrivateMessage(request: CreatePrivateMessageRequest) {
    return await this.#apiWrapper<CreatePrivateMessageResponse>({
      path: 'private_message',
      method: 'POST',
      data: request,
    });
  }

  setHeader({ key, value }: { key: string; value: string }) {
    this.#headers[key] = value;
  }

  setHeaders(headers: HeaderMap) {
    this.#headers = {
      ...this.#headers,
      ...headers,
    };
  }

  removeHeader(key: string) {
    delete this.#headers[key];
  }

  removeHeaders(keys: string[]) {
    keys.forEach((key) => {
      delete this.#headers[key];
    });
  }

  clearHeaders() {
    this.#headers = {};
  }

  async #apiWrapper<ResponseType>({
    path,
    method = 'GET',
    data,
    headers = {},
  }: {
    path: string;
    method?: 'GET' | 'POST' | 'PUT' | 'DELETE';
    data?: object;
    headers?: HeaderMap;
  }): Promise<ResponseType> {
    const response = await fetch(
      `${this.#apiUrl}/${path}${method === 'GET' ? `${this.#jsonToQueryString(data)}` : ''}`,
      {
        method,
        headers: {
          ...this.#headers,
          ...headers,
        },
        body: method === 'GET' ? undefined : JSON.stringify(data),
      },
    );

    if (!response.ok) {
      throw new Error(response.statusText ?? 'Bad API response');
    }

    return await response.json();
  }

  #jsonToQueryString(json?: object) {
    if (!json) {
      return '';
    }

    const query = Object.entries(json)
      .filter(([, value]) => value !== undefined)
      .map(
        ([key, value]) =>
          `${encodeURIComponent(key)}=${encodeURIComponent(value)}`,
      )
      .join('&');

    if (query.length === 0) {
      return '';
    }

    return `?${query}`;
  }
}
