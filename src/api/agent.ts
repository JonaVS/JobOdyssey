import axios, { AxiosResponse } from "axios";
import { RegisterRequest, AuthResponse, LoginRequest } from "@/models/auth/authModels";

const response = <T>(res: AxiosResponse<T>) => res.data;
axios.defaults.baseURL = process.env.NEXT_PUBLIC_BASE_API_URL;

/*  
    -----DEV MODE ONLY CODE START-----
    This is just to simulate some dalay
*/
if (process.env.NODE_ENV === "development") {
  const sleep = (delay: number) => new Promise<void>((resolve) => {
      setTimeout(resolve, delay);
    });

  axios.interceptors.request.use(async (res) => {
    await sleep(500);
    return res;
  });
}
/*
    -----DEV MODE ONLY CODE END-----
*/

const auth = {
  register: (body: RegisterRequest) => axios.post<AuthResponse>("/auth/register", body).then(response),
  login: (body: LoginRequest) => axios.post<AuthResponse>("/auth/login", body).then(response),
};

const apiAgent = {
  auth,
};

export default apiAgent;