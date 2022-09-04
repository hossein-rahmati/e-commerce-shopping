import http from "./httpService";

export default function signupUser(data) {
  return http.post("/user/register", data);
}
