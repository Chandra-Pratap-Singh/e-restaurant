import { Icategory } from './Icategory.interface';

export interface IadminProduct {
  name: string;
  productId: string;
  description: string;
  img: string;
  price: number;
  category: Icategory[];
  _id?: string;
  available: boolean;
}
