export type LoginRequest = {
  username_or_email: string;
  password: string;
  totp_2fa_token?: string;
};
