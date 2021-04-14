export interface Iuser {
  userId: string;
  name: string;
  email: string;
  phone: string;
  addresses: Iaddress[];
}
export interface Iaddress {
  address: string;
  isPrimary: boolean;
  identifier: string;
  name: string;
  email: string;
  phone: string;
  addressId: string;
}

export interface IuserProfile {
  name: string;
  phone: string;
  email: string;
}
