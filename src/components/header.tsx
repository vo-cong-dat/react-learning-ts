import { Button } from './button';
import {
  ArrowEndIcon,
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
          <ButtonLink
            href="tel:+4401234567891"
            size="auto"
            icon={<PhoneIcon className="size-3" />}
          />
        </div>
        <div className="hidden md:flex gap-3 items-center">
          <ButtonLink href="/" color="default" size="auto" icon={<YoutubeIcon />} />
          <ButtonLink href="/" color="default" size="auto" icon={<InstagramIcon />} />
          <ButtonLink href="/" color="default" size="auto" icon={<FacebookIcon />} />
          <ButtonLink href="/" color="default" size="auto" icon={<XIcon />} />
          <ButtonLink
            href="/"
            color="default"
            size="auto"
            className="text-white"
            icon={<ArrowEndIcon className="size-5 rotate-90" />}
          >
            Tiếng Việt
          </ButtonLink>
        </div>
      </div>
      <div className="bg-white px-4 py-3 flex items-center justify-between">
        <div className="flex gap-2 items-center justify-center">
          <Button className="md:hidden" color="default" icon={<MenuIcon />} size="auto" />
          <ButtonLink
            href="/home"
            color="default"
            size="auto"
            icon={<Logo className="w-[104px] h-auto" />}
          />
        </div>
        <div className="hidden text-black md:flex gap-6">
          <ButtonLink to="/home" size="auto" color="default">
            Giới thiệu
          </ButtonLink>
          <ButtonLink
            to="/"
            size="auto"
            color="default"
            icon={<ArrowEndIcon className="size-5 rotate-90" />}
          >
            Khoá học
          </ButtonLink>
          <ButtonLink
            to="/"
            size="auto"
            color="default"
            icon={<ArrowEndIcon className="size-5 rotate-90" />}
          >
            Kiến thức
          </ButtonLink>
          <ButtonLink to="/" size="auto" color="default">
            Chính sách
          </ButtonLink>
          <ButtonLink to="/" size="auto" color="default">
            Liên hệ
          </ButtonLink>
        </div>
        <ButtonLink href="tel:+4401234567891" icon={<ArrowEndIcon className="size-5" />}>
          Tư vấn ngay
        </ButtonLink>
      </div>
    </header>
  );
}
