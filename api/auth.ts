import axios from "axios";
import {
  LoginData,
  LogoutData,
  RefreshAccessTokenData,
  RegisterData,
} from "./types";

class AuthFetch {
  async register(data: RegisterData) {
    const axiosRes = await axios.post(
      `${process.env.NEXT_PUBLIC_API_URL}/auth/register`,
      data
    );
    return axiosRes;
  }

  async login(data: LoginData) {
    const axiosRes = await axios.post(
      `${process.env.NEXT_PUBLIC_API_URL}/auth/login`,
      data
    );
    return axiosRes;
  }

  async refreshAccessToken(data: RefreshAccessTokenData) {
    const axiosRes = await axios.post(
      `${process.env.NEXT_PUBLIC_API_URL}/auth/refresh-access-token`,
      data
    );
    return axiosRes;
  }

  async logout(data: LogoutData, accessToken: string) {
    const axiosRes = await axios.delete(
      `${process.env.NEXT_PUBLIC_API_URL}/auth/logout`,
      {
        data,
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );
    return axiosRes;
  }
}

export const authFetch = new AuthFetch();
