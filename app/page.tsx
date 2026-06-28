'use client';
import { Button } from '@/components/ui/button';
import { useGetProductsQuery } from '@/services/fakestoreapi';

export default function Home() {
  const { data: products } = useGetProductsQuery();
  console.log(products);
  return (
    <div className='flex flex-col justify-center items-center'>
      <h1>Home page </h1>
      <Button>Add To Cart</Button>
    </div>
  );
}
