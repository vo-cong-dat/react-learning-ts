import { useEffect } from 'react';
import Card from './components/card';
import Banner from './components/banner';
import AvatarMan from '../../assets/images/avatars/avatar-man.png';
import AvatarWoman from '../../assets/images/avatars/avatar-woman.png';

export default function Home() {
  const handleGetPost = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/todos/1');

    console.log(res);
  };

  useEffect(() => {
    handleGetPost();
  }, []);

  const PTEs = [12, 24, 30, 40, 50, 60, 70, 80, 90, 99];

  return (
    <div className="w-full flex flex-col justify-center">
      <Banner />

      <div className="md:w-[calc(100%-240px)] overflow-x-auto w-full mx-auto">
        <div className="flex pl-4 md:pl-0 md:flex-wrap gap-x-5 gap-y-10">
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </div>
      <div className="mx-4 bg-[#FF8D0A] flex-1 md:gap-x-[84px] flex-wrap md:flex-col md:mx-[120px] gap-4 p-6 flex flex-col md:items-center md:justify-between rounded-2xl md:p-12 relative">
        <div className="font-bold text-[40px] text-white">Bảng quy đổi điểm PTE - IELTS</div>
        <div className="flex bg-white border md:flex-col rounded-2xl w-full overflow-hidden">
          <div className="flex flex-col md:flex-row flex-1 justify-center">
            <span className="py-3 text-center bg-black/10 w-full md:border-b md:border-b-black/15">
              PTE
            </span>
            {PTEs.map((value, index) => (
              <span key={index} className="py-4 border-t text-center w-full">
                {value}
              </span>
            ))}
          </div>
          <div className="flex flex-col md:flex-row flex-1 justify-center ">
            <span className="py-3 text-center bg-black/10 w-full">IELTS</span>
            {PTEs.map((value, index) => (
              <span key={index} className="py-4 border-t text-center w-full">
                {value}
              </span>
            ))}
          </div>
        </div>
      </div>
      <div className="w-full ">
        <div>Đội ngũ giáo viên</div>
        <div className="flex gap-3 w-full overflow-x-scroll">
          <div className="max-w-[278px] relative w-full shrink-0">
            <img src={AvatarMan} alt="" className="rounded-[8px] object-container w-full" />
            <div className="absolute bottom-6 text-white text-center left-0 right-0">
              <div>Hùng Mạnh Dương</div>
              <div>Founder & Head Trainer</div>
            </div>
          </div>
          <div className="relative max-w-[278px] w-full shrink-0">
            <img src={AvatarWoman} alt="" className="rounded-[8px] object-container w-full" />
            <div className="absolute bottom-6 text-white text-center left-1/2 -translate-x-1/2 p-2 bg-black/90 backdrop-blur-3xl">
              <div>Hùng Mạnh Dương</div>
              <div className="whitespace-nowrap">Founder & Head Trainer </div>
            </div>
          </div>
        </div>
      </div>
      <div className="py-96"></div>
    </div>
  );
}
