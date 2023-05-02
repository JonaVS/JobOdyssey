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

export type LoginRequest = Omit<AuthBaseFields, "displayName"> & RegisterRequest;