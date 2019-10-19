import config from "../config";

const TokenService = {
  saveAuthToken(token) {
    window.localStorage.setItem(config.TOKEN_KEY, token);
  },
  setUser(user) {
    window.sessionStorage.setItem(config.CURRENT_USER, user);
  },
  setDate(date) {
    window.sessionStorage.setItem(config.MEMBER_SINCE, date);
  },
  setUserId(userId) {
    window.sessionStorage.setItem(config.USER_ID, userId);
  },
  getUser() {
    return window.sessionStorage.getItem(config.CURRENT_USER);
  },
  getDate() {
    return window.sessionStorage.getItem(config.MEMBER_SINCE);
  },
  getUserId() {
    return window.sessionStorage.getItem(config.USER_ID);
  },
  getAuthToken() {
    return window.localStorage.getItem(config.TOKEN_KEY);
  },
  clearAuthToken() {
    window.localStorage.removeItem(config.TOKEN_KEY);
  },
  hasAuthToken() {
    return !!TokenService.getAuthToken();
  },
  makeBasicAuthToken(userName, password) {
    return window.btoa(`${userName}:${password}`);
  }
};

export default TokenService;
