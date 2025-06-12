import Logo from '../../../assets/images/logo-white.png';
import { Button } from '../../../components/button';
import { ArrowEndIcon, ChevronRightIcon } from '../../../components/icons';

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
          <Button color="secondary" icon={<ArrowEndIcon className="size-5" />}>
            Tìm khóa học phù hợp ngay
          </Button>
        </div>
      </div>
      <div className="mx-4 bg-[#FF8D0A] -top-[76px] flex-1 md:top-1/2 md:gap-x-[84px] flex-wrap md:-translate-y-1/2 md:mx-[120px] gap-4 p-6 flex flex-col md:flex-row md:items-center md:justify-between rounded-2xl md:px-10 relative">
        <div className="font-semibold text-lg leading-6 text-white md:w-[300px]">
          Tìm các khóa học phù hợp với bạn và giúp con đường học vấn của bạn thành công
        </div>
        <div className="flex flex-col md:flex-row gap-3 flex-1">
          <Button
            icon={<ArrowEndIcon className="size-5 rotate-90" />}
            color="secondary"
            shape="outline"
            className="w-2/3 justify-between"
          >
            Du học Úc - visa 500 (50/58/65)
          </Button>
          <Button color="transparent" icon={<ArrowEndIcon className="size-5" />}>
            Xem khóa học phù hợp
          </Button>
        </div>
      </div>
    </>
  );
}
