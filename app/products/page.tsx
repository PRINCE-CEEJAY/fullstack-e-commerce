'use client';
import { Button } from '@/components/ui/button';
import { useGetProductsQuery } from '@/services/fakestoreapi';

export default function Products() {
  const { data: products } = useGetProductsQuery();
  return (
    <div className='container'>
      <h1>Products List</h1>
      <Button onClick={() => console.log(products)}>
        GET PRODUCTS, check console
      </Button>
    </div>
  );
}
