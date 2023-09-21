/* eslint-disable no-useless-concat */
const LS_KEY = {
  auth_token: "jwt_access_token",
  userId_token: "jwt_userId",
  userType: "user_type"
};

const set = {
  authToken: (data) => {
    localStorage.setItem(LS_KEY.auth_token, "Bearer" + " " + data);
  },
  userId: (data) => {
    localStorage.setItem(LS_KEY.userId_token, data);
  },
  userType: (data) => {
    localStorage.setItem(LS_KEY.userType, data);
  },
};

const fetch = {
  authToken: () => {
    const data = localStorage.getItem(LS_KEY.auth_token);
    if (data) {
      try {
        const decoded = data;
        return decoded;
      } catch (err) {
      }
    }
  },
  userId: () => {
    const data = localStorage.getItem(LS_KEY.userId_token);
    if (data) {
      try {
        const decoded = data;
        return decoded;
      } catch (err) {
      }
    }
  },
  userType: () => {
    const data = localStorage.getItem(LS_KEY.userType);
    if (data) {
      try {
        const decoded = data;
        return decoded;
      } catch (err) {
      }
    }
  },
};

const destroy = {
  authToken: () => {
    localStorage.removeItem(LS_KEY.auth_token);
  },
  userId: () => {
    localStorage.removeItem(LS_KEY.userId_token);
  },
  userType: () => {
      localStorage.removeItem(LS_KEY.userType);
    },
};

export const storage = {
  set,
  fetch,
  destroy,
};
