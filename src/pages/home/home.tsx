import { useEffect } from 'react';
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
    <div className="h-full w-screen overflow-y-auto">
      <Banner />
      <div className="pt-96"></div>
    </div>
  );
}
