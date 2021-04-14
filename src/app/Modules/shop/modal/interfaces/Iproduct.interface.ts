export default interface Iproduct {
  img: string;
  name: string;
  price: number;
  rating: number;
  ratingProvider: number;
  description: string;
  category: string[];
  productId: string;
  cartLoader?: boolean;
  _id: string;
  available: boolean;
}
