import { notification } from '@/components/common/AntdMessageWrapper';
import { LocalStorageKey } from '@/constants/local-storage.constant';
import { Response } from '@/types/response';
import { ILoginResponse, IToken } from '@/types/user';
import storage from '@/utils/local-storage';
import axios, {
  AxiosError,
  AxiosRequestConfig,
  AxiosResponse,
  InternalAxiosRequestConfig,
} from 'axios';
import { RefreshTokenError } from './error';

const options: AxiosRequestConfig = {
  baseURL: process.env.NEXT_PUBLIC_BASE_URL,
  responseType: 'json',
};
const client = axios.create(options);
let refreshPromise: Promise<IToken>;

const refresh = async () => {
  try {
    const token = storage.get(LocalStorageKey.AUTH);
    const refreshToken = (JSON.parse(token) as IToken)?.RefreshToken;

    const response = await client.post<Response<ILoginResponse>>('/auth/refresh-token', {
      refreshToken,
    });
    return response.data.data.token;
  } catch {
    notification.info({
      message: 'Login session expired',
    });
    throw new RefreshTokenError();
  }
};

const onRequest = (config: AxiosRequestConfig) => {
  const token = storage.get(LocalStorageKey.AUTH);
  Object.assign(config, {
    headers: {
      ...config.headers,
      ...(token
        ? {
            Authorization: `Bearer ${(JSON.parse(token) as IToken).IdToken}`,
            'X-Access-Token': (JSON.parse(token) as IToken).AccessToken,
            'ngrok-skip-browser-warning': 'true',
          }
        : {}),
      'Content-Type': config.headers?.['Content-Type'] || 'application/json',
    },
  });
  return config as InternalAxiosRequestConfig;
};

const onResponse = (response: AxiosResponse): AxiosResponse => {
  return response;
};

const onError = async (error: AxiosError) => {
  if (error.response?.status === 401) {
    const originalRequest = error.config as InternalAxiosRequestConfig;
    if (!refreshPromise) {
      refreshPromise = refresh();
    }

    const newToken = await refreshPromise;
    storage.set(LocalStorageKey.AUTH, JSON.stringify(newToken));

    return await client.request(originalRequest);
  }

  if (error.response?.status === 403) {
    throw new Error('Permission denied');
  }

  throw error;
};

client.interceptors.request.use(onRequest);
client.interceptors.response.use(onResponse, onError);

export { client };
