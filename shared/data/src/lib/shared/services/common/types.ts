export type BaseServiceResponse<T> = {
  data: T | null;
  message?: string;
  success?: boolean;
  status?: any;
};
