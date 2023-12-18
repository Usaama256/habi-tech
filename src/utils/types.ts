export interface Light {
  id: number;
  name: string;
  isOn: boolean;
}

export interface UserLogin {
  email: string;
  pass: string;
}

export interface User extends UserLogin {
  id: number;
  phoneContact: string;
  profilePicture: string;
  location: string;
  username: string;
}

export type SwitchAction = "on" | "off";
