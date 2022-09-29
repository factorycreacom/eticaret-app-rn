export interface IProductInterface {
  id: string;
  createdAt: Date;
  name: string;
  image: string;
  price: string;
  category: string;
  quantity?: number;
}

export interface IProductTiming {
  productId: string;
  startDate: string;
  endDate: string;
}

export interface IProductDeals {
  productId: string;
}
