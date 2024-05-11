export type BaseServiceResponse<T> = {
  data: T;
  message?: string;
  success?: boolean;
  status?: any;
};
