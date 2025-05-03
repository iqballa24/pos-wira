import { env } from '@/env';
import { getAxiosConfig } from '@/services/axiosConfig';

type TServiceBasePath = '';

export const instance = (service: TServiceBasePath) => {
  return getAxiosConfig(`${env.NEXT_PUBLIC_BASE_URL}/${service}`, {
    isAuth: true,
  });
};
