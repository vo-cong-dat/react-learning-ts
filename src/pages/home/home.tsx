import { useEffect } from 'react';
import Card from './components/card';
import Banner from './components/banner';

export default function Home() {
  const handleGetPost = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/todos/1');

    console.log(res);
  };

  useEffect(() => {
    handleGetPost();
  }, []);

  return (
    <div className="w-full flex flex-col justify-center">
      <Banner />
      <div className="flex flex-wrap gap-x-5 gap-y-10 w-[calc(100%-240px)]">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
}
