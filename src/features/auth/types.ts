export type RegisterPayload = {
  username: string;
  email: string;
  password: string;
};

export type RegisterResponse = {
  email: string;
  username: string;
  id: number;
};

export type ActivatePayload = {
  uid: string;
  token: string;
};

export type LoginPayload = Omit<RegisterPayload, "username">;
export type LoginResponse = {
  access: string;
  refresh: string;
};
export type RefreshResponse = {
	access: string;
 };
