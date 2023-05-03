type AuthBaseFields = {
  displayName: string;
  email: string;
};

export type RegisterRequest = AuthBaseFields & {
  password: string;
};

export type AuthResponse = Omit<AuthBaseFields, "displayName"> & {
  token: string;
};

export type LoginRequest = Pick<AuthBaseFields, "email"> & Pick<RegisterRequest, "password">;