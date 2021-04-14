import { Iuser } from 'src/app/Modules/user/modal/interfaces/Iuser.interface';
import { IadminOrderItem } from './IadminOrderItem.interface';
import { IadminProduct } from './IadminProduct.interface';

export interface IadminOrder {
  status: string;
  orderedDateTime: string;
  deliveryDateTime?: string;
  orderId: string;
  customer: {
    customer: Iuser;
    snapshot: {
      userId: string;
      name: string;
      phone: string;
      email: string;
      address: {
        name: string;
        phone: string;
        email: string;
        address: string;
      };
    };
  };
  products: [
    {
      product: IadminProduct;
      snapshot: IadminProduct;
      quantity: number;
    }
  ];
  history: [
    {
      from: string;
      to: string;
      time: string;
      comment: String;
    }
  ];
}
