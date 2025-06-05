import { Button } from '../../../components/button';
import { ChevronRightIcon } from '../../../components/icons';
import Logo from '../../../assets/images/logo-white.png';

export default function Banner() {
  return (
    <>
      <div className="h-[467px] md:h-full w-full relative">
        <img
          src="public/images/banner/banner-1.png"
          className="size-full object-cover md:object-contain"
          alt="banner-home"
        />
        <div className="space-y-4 absolute top-14 left-4 md:top-1/2 md:left-[120px] md:-translate-y-1/2">
          <img src={Logo} alt="Logo" />
          <div className="mb-4 md:mb-10 text-white whitespace-pre-line font-extrabold text-[32px]">
            {` Học Không Chỉ Để Thi,
           Học Là Để Dẫn Đầu!`}
          </div>
          <button className="flex gap-1 text-sm hover:bg-red-400 items-center justify-center rounded-full bg-white px-6 py-[13px]">
            <span className="text-black">Tìm khóa học phù hợp ngay</span>
            <ChevronRightIcon className="stroke-[#0e0e0e]" />
          </button>
        </div>
      </div>
      <div className="mx-4 bg-[#FF8D0A] -top-[76px] flex-1 md:top-1/2 md:gap-x-[84px] flex-wrap md:-translate-y-1/2 md:mx-[120px] gap-4 p-6 flex flex-col md:flex-row md:items-center md:justify-between rounded-2xl md:px-10 relative">
        <div className="font-semibold text-lg leading-6 text-white md:w-[300px]">
          Tìm các khóa học phù hợp với bạn và giúp con đường học vấn của bạn thành công
        </div>
        <div className="flex flex-col md:flex-row gap-3 flex-1">
          <Button className="w-full font-normal md:w-2/3 justify-between" variant="secondary">
            Du học Úc - visa 500 (50/58/65)
            <ChevronRightIcon className="stroke-[#0e0e0e] rotate-90" />
          </Button>
          <Button className="w-full md:w-1/3" variant="orange">
            Xem khóa học phù hợp
          </Button>
        </div>
      </div>
    </>
  );
}
