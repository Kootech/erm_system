export interface Product {
  id: string;
  itemName: string;
  price: number;
  quantity: number;
  category: string;
  image: string;
}

export interface Sold {
  id: string;
  items: string;
  total: number;
}
