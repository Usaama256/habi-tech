export interface Light {
  user_id: number;
  device_id: number;
  device_name: string;
  device_description?: string | null;
  type_name: string;
  status: string;
}

export interface UserLogin {
  email: string;
  pass: string;
}

export interface User {
  id: number;
  email: string;
  phoneContact?: string;
  profilePicture: string | null;
  location?: string;
  username: string;
  pass?: string;
}

export type SwitchAction = 1 | 0;
