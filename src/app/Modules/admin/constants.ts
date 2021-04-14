import Iproduct from '../shop/modal/interfaces/Iproduct.interface';
import { IadminProduct } from './modal/interfaces/IadminProduct.interface';

export const DEFAULT_NEW_PRODUCT: IadminProduct = {
  img: '',
  name: '',
  price: 0,
  description: '',
  category: [],
  productId: '',
  available: true,
};
