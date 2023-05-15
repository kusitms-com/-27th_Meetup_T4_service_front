import axios from "axios";

const WritonAxios = axios.create({
  baseURL: "https://www.tarae.store",
});

const postLoginUser = (userIdentifier, userPassword) =>
  WritonAxios.post("/api/user/login", { userIdentifier, userPassword });

const getAccessToken = () =>
  WritonAxios.get("/api/user/login/reissue-token", {
    headers: {
      access: localStorage.getItem("accessToken"),
      refresh: localStorage.getItem("refreshToken"),
    },
  });

const patchLogoutUser = () =>
  WritonAxios.patch("/api/user/logout", "", {
    headers: { access: localStorage.getItem("accessToken") },
  });

const postEmail = (userEmail) =>
  WritonAxios.post('/api/user/signup/verify-email-code', {'email': userEmail})

const getEmailCode = (userEmail, userEmailCode) =>
  WritonAxios.get("/api/user/signup/verify-email", {params:{
    'email': userEmail,
    'code': userEmailCode
  }
  });

const postSignup = (userId, userEmail, userPassword, nickname, phoneNumber) =>
  WritonAxios.post("/api/user/signup", {
    'userId':userId,
    'email':userEmail,
    'password':userPassword,
    'nickname':nickname,
    'phoneNumber':phoneNumber,
  });

const getChallenge = () => WritonAxios.get("/api/challenge/whole-category");

const getLoginMain = () =>
  WritonAxios.get("/api/challenge/main", {
    headers: { access: localStorage.getItem("accessToken") },
  });

export {
  postLoginUser,
  patchLogoutUser,
  getAccessToken,
  postEmail,
  getEmailCode,
  postSignup,
  getLoginMain,
  getChallenge,
};
