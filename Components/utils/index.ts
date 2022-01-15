const TOKEN_KEY = "isLoggedIn";

export const login = () => {
  if (typeof window !== "undefined") {
    localStorage.setItem(TOKEN_KEY, "1");
  }
};

export const logout = () => {
  if (typeof window !== "undefined") {
    localStorage.removeItem(TOKEN_KEY);
  }
};

export const isLogin = () => {
  if (typeof window !== "undefined") {
    if (localStorage.getItem(TOKEN_KEY) === "1") {
      return true;
    }
  }

  return false;
};
