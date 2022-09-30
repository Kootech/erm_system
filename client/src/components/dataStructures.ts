export interface Product {
  id: string;
  itemName: string;
  price: number;
  quantity: number;
  category: string;
  image: string;
}

export declare const productAPI: {
  updateById<Response>(id: string, fields: {}): { data: Response };
};

export interface UpdateProductResponse {
  products: Product[];
  success: boolean;
}

export interface ErrorMessage {
  errorMessage: string;
}
