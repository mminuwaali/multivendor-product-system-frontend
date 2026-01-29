import axios from "axios";
import Cookie from "js-cookie";
import { jwtDecode } from "jwt-decode";
import * as KEY from "constants/settings";

export class TokenManager {
  public static getAccessToken() {
    console.log("getting access token");
    return Cookie.get(KEY.ACCESS_TOKEN);
  }

  public static getRefreshToken() {
    console.log("getting refresh token");
    return Cookie.get(KEY.REFRESH_TOKEN);
  }

  public static clearTokens() {
    console.log("clearing token");

    Cookie.remove(KEY.ACCESS_TOKEN);
    Cookie.remove(KEY.REFRESH_TOKEN);
  }

  public static setTokens(access: string, refresh: string) {
    const accessExpiry = this.parseDate(access);
    const refreshExpiry = this.parseDate(refresh);

    const common: Cookies.CookieAttributes = { secure: true, sameSite: "Lax" };

    Cookie.set(KEY.ACCESS_TOKEN, access, {
      ...common,
      expires: accessExpiry,
    });
    Cookie.set(KEY.REFRESH_TOKEN, refresh, {
      ...common,
      expires: refreshExpiry,
    });
  }

  public static isTokenExpired(token?: string) {
    if (!token) return true;

    try {
      const decoded: { exp: number } = jwtDecode(token);
      return decoded.exp <= Math.floor(Date.now() / 1000);
    } catch (error) {
      console.error("Error checking token expiry:", error);
      return true;
    }
  }

  public static parseDate(token: string) {
    try {
      const decoded: { exp: number } = jwtDecode(token);
      const expires = new Date(decoded.exp * 1000);

      return expires;
    } catch (error) {
      console.error("Error parsing token:", error);
      return new Date(Date.now() + 60 * 1000);
    }
  }

  public static async refreshAccessToken() {
    const refreshToken = this.getRefreshToken();
    if (!refreshToken) throw new Error("No refresh token found");

    try {
      const res = await axios.post(KEY.REFRESH_TOKEN_URL, {
        refresh: refreshToken,
      });
      const access = res.data.access;
      const refresh = res.data.refresh ?? refreshToken;

      this.setTokens(access, refresh);
    } catch (error) {
      console.error("Failed to refresh token:", error);
      throw error;
    }
  }
}
