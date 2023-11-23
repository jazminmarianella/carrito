type Product = {
  id: number,
  name: string,
  description: string | null,
  price: number
};


type CartItem = {
  product: Product,
  count: number
}
