import { Link } from 'react-router';
import {
  ChevronRightIcon,
  EmailIcon,
  FacebookIcon,
  InstagramIcon,
  MenuIcon,
  PhoneIcon,
  XIcon,
  YoutubeIcon,
} from './icons';
import { Logo } from './image-svg';

export default function Header() {
  return (
    <header>
      <div className="px-4 py-3 flex justify-between font-medium text-sm items-center bg-primary md:px-8 md:py-3">
        <div className="flex justify-between gap-5 md:justify-start items-center flex-1 md:flex-auto">
          <div className="flex items-center justify-center gap-1">
            <EmailIcon className="size-3" />
            <a href="mailto:enquire@example.com">enquire@example.com</a>
          </div>
          <div className="flex items-center justify-center gap-1">
            <PhoneIcon className="size-3" />
            <a href="tel:+4401234567891" className="whitespace-nowrap">
              +44 (0) 1234 567 891
            </a>
          </div>
        </div>
        <div className="hidden md:flex gap-3 items-center">
          <a href="/">
            <YoutubeIcon />
          </a>
          <a href="/">
            <InstagramIcon />
          </a>
          <a href="/">
            <FacebookIcon />
          </a>
          <a href="/">
            <XIcon />
          </a>
          <button className="flex items-center gap-1">
            <span>Tiếng Việt </span>
            <ChevronRightIcon className="size-5 rotate-90 stroke-[#FCFCFD]" />
          </button>
        </div>
      </div>
      <div className="bg-white px-4 py-3 flex items-center justify-between">
        <div className="flex gap-2 items-center justify-center">
          <button className="md:hidden">
            <MenuIcon />
          </button>
          <Link to="/home">
            <Logo className="w-[104px] h-auto" />
          </Link>
        </div>
        <div className="hidden text-black md:flex gap-6">
          <Link to="/" className="flex items-center gap-1">
            Giới thiệu
          </Link>
          <Link to="/" className="flex items-center gap-1">
            <span>Khoá học</span>
            <ChevronRightIcon className="size-5 rotate-90 stroke-black" />
          </Link>
          <Link to="/" className="flex items-center gap-1">
            <span>Kiến thức</span>
            <ChevronRightIcon className="size-5 rotate-90 stroke-black" />
          </Link>
          <Link to="/" className="flex items-center gap-1">
            Chính sách
          </Link>
          <Link to="/" className="flex items-center gap-1">
            Liên hệ
          </Link>
        </div>

        <Link
          to="tel:+4401234567891"
          className="flex gap-1 text-sm items-center justify-center rounded-full bg-primary px-6 py-[13px]"
        >
          <span>Tư vấn ngay</span>
          <ChevronRightIcon className="stroke-[#FCFCFD]" />
        </Link>
      </div>
    </header>
  );
}
