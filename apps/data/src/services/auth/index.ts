import { storeApiMethods } from '../../apis';
import { handleErrorResponse } from '../../helpers';
import { BaseServiceResponse } from '../common/types';
import { AUTH_PATHS } from './constants';

import {
  loginRequestSchema,
  loginResponseSchema,
  refreshTokenRequestSchema,
  refreshTokenResponseSchema,
  userProfileResponseSchema,
} from './schemas';
import {
  LoginRequest,
  LoginResponse,
  RefreshTokenRequest,
  RefreshTokenResponse,
  UserProfileResponse,
} from './types';

/**
 * @description Logs a user in.
 * @param {LoginRequest} info The user to log in.
 * @returns {Promise<BaseServiceResponse<LoginResponse>>} A Promise that resolves to a LoginResponse.
 */
export const login = async (
  info: LoginRequest
): Promise<BaseServiceResponse<LoginResponse>> => {
  try {
    const infos = loginRequestSchema.parse(info);
    const response = await storeApiMethods.post<LoginRequest, LoginResponse>(
      AUTH_PATHS.AUTH.LOGIN,
      infos
    );
    const data = loginResponseSchema.parse(response.data);
    return {
      data,
      message: response.statusText,
      success: true,
    };
  } catch (e) {
    // TODO: test
    return {
      data: {
        access_token: 'fake_access_token_123',
        refresh_token: 'fake_refresh_token_123',
      },
    };
    // return handleErrorResponse(e);
  }
};
/**
 * @description Gets the user profile.
 * @returns {Promise<BaseServiceResponse<UserProfileResponse>>} A Promise that resolves to a UserProfileResponse.
 */
export const getUserProfile = async (): Promise<
  BaseServiceResponse<UserProfileResponse>
> => {
  try {
    const response = await storeApiMethods.get<UserProfileResponse>(
      AUTH_PATHS.AUTH.PROFILE
    );
    const data = userProfileResponseSchema.parse(response.data);

    return {
      data,
      message: response.statusText,
      success: true,
    };
  } catch (e) {
    return handleErrorResponse(e);
  }
};
/**
 * @description Refreshes the token.
 * @param {RefreshTokenRequest} refreshToken The refresh token.
 * @returns {Promise<BaseServiceResponse<RefreshTokenResponse>>} A Promise that resolves to a RefreshTokenResponse.
 */
export const refreshToken = async (
  token: RefreshTokenRequest
): Promise<BaseServiceResponse<RefreshTokenResponse>> => {
  try {
    const values = refreshTokenRequestSchema.parse(token);
    const response = await storeApiMethods.post<
      RefreshTokenRequest,
      RefreshTokenResponse
    >(AUTH_PATHS.AUTH.REFRESH_TOKEN, values);
    const data = refreshTokenResponseSchema.parse(response.data);
    return {
      data,
      message: response.statusText,
      success: true,
    };
  } catch (e) {
    return handleErrorResponse(e);
  }
};
export type {
  LoginRequest,
  LoginResponse,
  UserProfileResponse,
  RefreshTokenRequest,
  RefreshTokenResponse,
};
export {
  loginRequestSchema,
  loginResponseSchema,
  refreshTokenRequestSchema,
  refreshTokenResponseSchema,
  userProfileResponseSchema,
};
