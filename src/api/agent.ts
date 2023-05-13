import axios, { AxiosError, AxiosResponse, InternalAxiosRequestConfig } from "axios";
import { RegisterRequest, AuthResponse, LoginRequest, User } from "@/models/auth/authModels";

const response = <T>(res: AxiosResponse<T>) => res.data;
let isRefreshingJwt: boolean = false;

axios.defaults.baseURL = process.env.NEXT_PUBLIC_BASE_API_URL;
axios.defaults.withCredentials = true;

/*
    -----AUTH HEADER ATTACHER-----
*/
axios.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('jwt');
    if (token) {
      // eslint-disable-next-line no-param-reassign
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);


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


/*
    -----REFRESH TOKEN-----
*/
axios.interceptors.response.use(
  (res: AxiosResponse) => res,
  async (error: AxiosError) => {
    const originalRequest = error.config as InternalAxiosRequestConfig;

    if (
      error.response?.status === 401 &&
      !isRefreshingJwt &&
      localStorage.getItem("jwt")
    ) {
      isRefreshingJwt = true;

      try {
        // Refresh token is inside http only cookie.
        // Thats why no payload.
        const refreshResponse = await axios
          .post<AuthResponse>(`/auth/refresh-token`)
          .then(response);

        localStorage.setItem("jwt", refreshResponse.token);

        originalRequest.headers.Authorization = `Bearer ${refreshResponse.token}`;

        return await axios(originalRequest);

      } catch (err) {
        /* do nothing  */
      } finally {
        isRefreshingJwt = false;
      }
    }
    return Promise.reject(error);
  }
);

const auth = {
  register: (body: RegisterRequest) => axios.post<AuthResponse>("/auth/register", body).then(response),
  login: (body: LoginRequest) => axios.post<AuthResponse>("/auth/login", body).then(response),
  isAuthenticated: () => axios.get<User>("/auth/is-authenticated").then(response),
  logout: () => axios.post("/auth/logout").then(response),
};

const apiAgent = {
  auth,
};

export default apiAgent;