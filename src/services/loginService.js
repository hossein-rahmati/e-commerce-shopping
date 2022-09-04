import http from "./httpService";

export default function loginUser(data) {
  return http.post("/user/login", data);
}
