import Iproduct from 'src/app/Modules/shop/modal/interfaces/Iproduct.interface';
import { IcartItem } from './Icart.interface';
import { Iuser } from './Iuser.interface';

export interface Iorder {
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
      product: Iproduct;
      snapshot: {
        name: string;
        img: string;
        price: number;
        rating: number;
        ratingProvider: number;
        description: string;
        category: string[];
        productId: string;
      };
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
