import Logo from '../../../assets/images/logo-white.png';
import { ChevronRightIcon } from '../../../components/icons';
import Button from '../../../components/button';

export default function Banner() {
  return (
    <div className="relative max-h-[476px] min-h-full md:max-h-full h-full md:h-auto md:w-full">
      <div className="h-full w-full">
        <img
          src="public/images/banner/banner-1.png"
          className="object-cover h-full w-auto md:h-auto md:w-full md:object-contain"
          alt="banner-home"
        />
      </div>
      <div className="space-y-4 absolute top-14 left-4 md:top-[108px] md:left-8">
        <img src={Logo} alt="Logo" />
        <div className="mb-4 md:mb-10 text-white whitespace-pre-line font-extrabold text-[32px]">
          {` Học Không Chỉ Để Thi,
           Học Là Để Dẫn Đầu!`}
        </div>
        <button className="flex gap-1 text-sm items-center justify-center rounded-full bg-white px-6 py-[13px]">
          <span className="text-black">Tìm khóa học phù hợp ngay</span>
          <ChevronRightIcon className="stroke-[#0e0e0e]" />
        </button>
      </div>
      <div className="mx-4 bg-[#FF8D0A] space-y-4 p-6 rounded-2xl absolute top-[calc(100%-72px)]">
        <div className="font-semibold text-lg leading-6">
          Tìm các khóa học phù hợp với bạn và giúp con đường học vấn của bạn thành công
        </div>
        <div className="space-y-3">
          <Button
            className="w-full"
            icon={<ChevronRightIcon className="stroke-[#0e0e0e] rotate-90" />}
          >
            Du học Úc - visa 500 (50/58/65)
          </Button>
          <Button
            className="w-full"
            variant="secondary"
            icon={<ChevronRightIcon className="stroke-[#0e0e0e]" />}
          >
            Xem khóa học phù hợp
          </Button>
        </div>
      </div>
    </div>
  );
}
