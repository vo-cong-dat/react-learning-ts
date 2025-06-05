import { Button } from './button';
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
import ButtonLink from './link';

export default function Header() {
  return (
    <header>
      <div className="px-4 py-3 flex justify-between font-medium text-sm items-center bg-primary md:px-8 md:py-3">
        <div className="flex justify-between gap-5 md:justify-start items-center flex-1 md:flex-auto">
          <ButtonLink href="mailto:enquire@example.com" size="auto">
            <EmailIcon className="size-3" /> enquire@example.com
          </ButtonLink>
          <ButtonLink href="tel:+4401234567891" size="auto">
            <PhoneIcon className="size-3" />
          </ButtonLink>
        </div>
        <div className="hidden md:flex gap-3 items-center">
          <ButtonLink href="/" variant="transparent" size="auto">
            <YoutubeIcon />
          </ButtonLink>
          <ButtonLink href="/" variant="transparent" size="auto">
            <InstagramIcon />
          </ButtonLink>
          <ButtonLink href="/" variant="transparent" size="auto">
            <FacebookIcon />
          </ButtonLink>
          <ButtonLink href="/" variant="transparent" size="auto">
            <XIcon />
          </ButtonLink>
          <Button>
            Tiếng Việt
            <ChevronRightIcon className="size-5 rotate-90 stroke-[#FCFCFD]" />
          </Button>
        </div>
      </div>
      <div className="bg-white px-4 py-3 flex items-center justify-between">
        <div className="flex gap-2 items-center justify-center">
          <Button className="md:hidden" variant="transparent">
            <MenuIcon />
          </Button>
          <ButtonLink href="/home" variant="transparent" size="auto">
            <Logo className="w-[104px] h-auto" />
          </ButtonLink>
        </div>
        <div className="hidden text-black md:flex gap-6">
          <ButtonLink to="/" size="auto" variant="transparent">
            Giới thiệu
          </ButtonLink>
          <ButtonLink to="/" size="auto" variant="transparent">
            <span>Khoá học</span>
            <ChevronRightIcon className="size-5 rotate-90 stroke-black" />
          </ButtonLink>
          <ButtonLink to="/" size="auto" variant="transparent">
            <span>Kiến thức</span>
            <ChevronRightIcon className="size-5 rotate-90 stroke-black" />
          </ButtonLink>
          <ButtonLink to="/" size="auto" variant="transparent">
            Chính sách
          </ButtonLink>
          <ButtonLink to="/" size="auto" variant="transparent">
            Liên hệ
          </ButtonLink>
        </div>

        <ButtonLink href="tel:+4401234567891">
          Tư vấn ngay <ChevronRightIcon className="stroke-[#FCFCFD]" />
        </ButtonLink>
      </div>
    </header>
  );
}
