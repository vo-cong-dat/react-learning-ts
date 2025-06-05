import { useEffect } from 'react';
import Card from './components/card';
import Banner from './components/banner';
import AvatarMan from '../../assets/images/avatars/avatar-man.png';
import AvatarWoman from '../../assets/images/avatars/avatar-woman.png';
import { Button } from '../../components/button';
import { ArrowEndIcon } from '../../components/icons';

export default function Home() {
  const handleGetPost = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/todos/1');

    console.log(res);
  };

  useEffect(() => {
    handleGetPost();
  }, []);

  const PTEs = [12, 24, 30, 40, 50, 60, 70, 80, 90, 99];

  const teachers = [
    {
      image: AvatarMan,
      name: 'Hùng Mạnh Dương',
      position: 'Founder & Head Trainer',
    },
    {
      image: AvatarWoman,
      name: 'Phương Dương ',
      position: 'PTE Trainer',
    },
  ];

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
      <div className="w-full font-[Inter] pl-4">
        <div className="text-[#1D2939] font-bold text-2xl leading-7 mt-10 mb-6 text-center">
          Đội ngũ giáo viên
        </div>
        <div className="flex gap-3 w-full overflow-x-scroll pr-4 md:justify-center md:items-center">
          {teachers.map((teacher, index) => (
            <div key={index} className="max-w-[287px] relative w-full shrink-0">
              <img src={teacher.image} alt="" className="rounded-[8px] object-container w-full" />
              <div className="absolute bottom-6 text-white text-center left-0 right-0 space-y-2">
                <div className="text-2xl font-bold">{teacher.name}</div>
                <div className="text-sm font-medium">{teacher.position}</div>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-6">
          <Button className="text-sm font-semibold py-[13px] px-6 gap-1">
            Xem tất cả
            <ArrowEndIcon className="w-4" />
          </Button>
        </div>
      </div>
      <div className="py-96"></div>
    </div>
  );
}
