type AuthBaseFields = {
  displayName: string;
  email: string;
};

export type RegisterRequest = AuthBaseFields & {
  password: string;
};

export type AuthResponse = AuthBaseFields & {
  token: string;
};

export type LoginRequest = Pick<AuthBaseFields, "email"> & Pick<RegisterRequest, "password">;

export type User = Omit<AuthResponse, "token">