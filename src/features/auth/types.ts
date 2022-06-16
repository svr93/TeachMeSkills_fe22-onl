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
}