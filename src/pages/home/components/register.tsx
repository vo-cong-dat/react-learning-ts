import { Button } from '../../../components/button';
import { ArrowEndIcon, PhoneIcon } from '../../../components/icons';
import InputText from '../../../components/input-text';
import ButtonLink from '../../../components/link';
import SelectOption from '../../../components/select-option';

export default function Register() {
  const options = [
    {
      value: '1',
      label: 'Option 1',
    },
    {
      value: '2',
      label: 'Option 2',
    },
    {
      value: '3',
      label: 'Option 3',
    },
    {
      value: '4',
      label: 'Option 4',
    },
  ];

  return (
    <div className="px-4 pt-10 pb-8">
      <h6 className="font-bold text-2xl text-[#001524] text-center">Đăng ký nhận tư vấn ngay</h6>
      <div className="space-y-5">
        <InputText label="Họ tên" />
        <InputText label="Điện thoại" />
        <InputText label="Email" placeholder="you@company.com" />
        <SelectOption label="Bạn cần PTE làm gì?" placeholder="Chọn" options={options} />
        <SelectOption
          label="Bạn cần đạt bao nhiêu điểm PTE?"
          placeholder="Chọn"
          options={options}
        />
        <SelectOption
          label="Thời gian bạn cần đạt số điểm trên?"
          placeholder="Chọn"
          options={options}
        />
        <Button icon={<ArrowEndIcon className="size-4" />} className="w-full">
          Tư vấn ngay
        </Button>
      </div>
      <div>
        <div>Tư vấn nhanh</div>
        <div>
          <ButtonLink
            icon={<PhoneIcon className="size-4 text-[#001524]" />}
            href="tel:+61426812895"
            color="default"
            size="auto"
          >
            +61 426 812 895 (Úc - Australia)
          </ButtonLink>
        </div>
        <div>
          <ButtonLink
            icon={<PhoneIcon className="size-4 text-[#001524]" />}
            href="tel:+84888031854"
            color="default"
            size="auto"
          >
            +84 888 031 854 (Việt Nam)
          </ButtonLink>
        </div>
      </div>
    </div>
  );
}
