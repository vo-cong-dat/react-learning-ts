import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import z from 'zod';
import { Button } from '../../../components/button';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '../../../components/form';
import { ArrowEndIcon, PhoneIcon } from '../../../components/icons';
import ButtonLink from '../../../components/link';
import SelectOption from '../../../components/select-option';
import { RadioGroup, RadioGroupItem } from '../../../components/radio-group';
import { Checkbox } from '../../../components/checkbox';
import { Switch } from '../../../components/switch';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../../../components/select';
import { Link } from 'react-router-dom';

const items = [
  {
    id: 'recents',
    label: 'Recents',
  },
  {
    id: 'home',
    label: 'Home',
  },
  {
    id: 'applications',
    label: 'Applications',
  },
  {
    id: 'desktop',
    label: 'Desktop',
  },
  {
    id: 'downloads',
    label: 'Downloads',
  },
  {
    id: 'documents',
    label: 'Documents',
  },
] as const;

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

  const formSchema = z.object({
    // username: z
    //   .string()
    //   .min(5, {
    //     message: 'Username must be at least 5 characters.',
    //   })
    //   .optional(),
    // phoneNumber: z
    //   .string()
    //   .trim()
    //   .regex(/(84|0[3|5|7|8|9])+([0-9]{8})\b/g, 'Số điện thoại không hợp lệ')
    //   .optional(),
    // email: z.string().email('Email không hợp lệ').optional(),
    // amount: z
    //   .object({
    //     from: z
    //       .number()
    //       .nonnegative({ message: 'Số tiền từ phải lớn hơn hoặc bằng 0' })
    //       .optional(),
    //     to: z
    //       .number()
    //       .nonnegative({ message: 'Số tiền đến phải lớn hơn hoặc bằng 0' })
    //       .optional(),
    //   })
    //   .optional(),
    note: z
      .string()
      .max(10, {
        message: 'Username must be at least 5 characters.',
      })
      .optional(),
    type: z.enum(['all', 'mentions', 'note'], {
      required_error: 'Vui lòng chọn phương thức thanh toán',
    }),
    items: z.array(
      z.enum(['recents', 'home', 'applications', 'desktop', 'downloads', 'documents'], {
        required_error: 'Vui lòng chọn phương thức thanh toán',
      })
    ),
    marketing_emails: z.boolean().default(false).optional(),
    isAgree: z.boolean().default(false),
    email: z.string(),
  });
  // .refine((data) => data.amount.from <= data.amount.to, {
  //   message: 'Số tiền từ phải nhỏ hơn hoặc bằng số tiền đến',
  //   path: ['fromAmount'], // gán lỗi vào trường fromAmount (có thể đổi sang toAmount hoặc chung)
  // });

  const allMethods = useForm({
    defaultValues: {
      // username: '',
      // phoneNumber: '',
      // email: '',
      // amount: {
      //   from: '' as unknown as number,
      //   to: '' as unknown as number,
      // },
      type: 'all',
      items: [],
      marketing_emails: false,
      isAgree: false,
    },
    mode: 'onChange',
    resolver: zodResolver(formSchema),
  });
  const { control, handleSubmit, trigger, setValue, watch } = allMethods;
  const handleRegister = (form: z.infer<typeof formSchema>) => {
    console.log(form);

    // setTimeout(() => {
    //   (errorsMessage as []).map((error) => {
    //     const keyError = Object.keys(error)?.[0] as any;
    //     const message = error?.[keyError];
    //     setError(keyError, message);
    //   });
    // }, 500);
  };

  return (
    <div className="px-4 pt-10 pb-8">
      <h6 className="font-bold text-2xl text-[#001524] text-center">Đăng ký nhận tư vấn ngay</h6>

      <div className="space-y-5">
        <Form {...allMethods}>
          <form
            onSubmit={handleSubmit(handleRegister, (errors) => {
              console.log(errors, 'invalid');
            })}
            className="space-y-8"
          >
            <FormField
              name="type"
              render={({ field }) => (
                <FormItem className="space-y-3">
                  <FormLabel>Notify me about...</FormLabel>
                  <FormControl>
                    <RadioGroup
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                      className="flex flex-col"
                    >
                      <FormItem className="flex items-center gap-3">
                        <FormControl>
                          <RadioGroupItem value="all" />
                        </FormControl>
                        <FormLabel className="font-normal">All new messages</FormLabel>
                      </FormItem>
                      <FormItem className="flex items-center gap-3">
                        <FormControl>
                          <RadioGroupItem value="mentions" />
                        </FormControl>
                        <FormLabel className="font-normal">Direct messages and mentions</FormLabel>
                      </FormItem>
                      <FormItem className="flex items-center gap-3">
                        <FormControl>
                          <RadioGroupItem value="12321" />
                        </FormControl>
                        <FormLabel className="font-normal">Nothing</FormLabel>
                      </FormItem>
                    </RadioGroup>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              name="marketing_emails"
              render={({ field }) => (
                <FormItem className="flex flex-row items-center justify-between rounded-lg border p-3 shadow-sm">
                  <div className="space-y-0.5">
                    <FormLabel>Marketing emails</FormLabel>
                    <FormDescription>
                      Receive emails about new products, features, and more.
                    </FormDescription>
                  </div>
                  <FormControl>
                    <Switch checked={field.value} onCheckedChange={field.onChange} />
                  </FormControl>
                </FormItem>
              )}
            />
            <FormField
              name="items"
              render={() => (
                <FormItem>
                  <div className="mb-4">
                    <FormLabel className="text-base">Sidebar</FormLabel>
                    <FormDescription>
                      Select the items you want to display in the sidebar.
                    </FormDescription>
                  </div>
                  <FormField
                    key={items[0].id}
                    name="isAgree"
                    render={({ field }) => {
                      return (
                        <FormItem key={items[0].id} className="flex flex-row items-center gap-2">
                          <FormControl>
                            <Checkbox checked={field?.value} onCheckedChange={field.onChange} />
                          </FormControl>
                          <FormLabel className="text-sm font-normal">{items[0].label}</FormLabel>
                        </FormItem>
                      );
                    }}
                  />
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select a verified email to display" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="m@example.com">m@example.com</SelectItem>
                      <SelectItem value="m@google.com">m@google.com</SelectItem>
                      <SelectItem value="m@support.com">m@support.com</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormDescription>
                    You can manage email addresses in your{' '}
                    <Link to="/examples/forms">email settings</Link>.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              name="items"
              render={() => (
                <FormItem>
                  <div className="mb-4">
                    <FormLabel className="text-base">Sidebar</FormLabel>
                    <FormDescription>
                      Select the items you want to display in the sidebar.
                    </FormDescription>
                  </div>
                  {items.map((item) => (
                    <FormField
                      key={item.id}
                      name="items"
                      render={({ field }) => {
                        return (
                          <FormItem key={item.id} className="flex flex-row items-center gap-2">
                            <FormControl>
                              <Checkbox
                                checked={field?.value?.includes(item.id)}
                                onCheckedChange={(checked) => {
                                  return checked
                                    ? field.onChange([...field.value, item.id])
                                    : field.onChange(
                                        field.value?.filter((value) => value !== item.id)
                                      );
                                }}
                              />
                            </FormControl>
                            <FormLabel className="text-sm font-normal">{item.label}</FormLabel>
                          </FormItem>
                        );
                      }}
                    />
                  ))}
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* <FormField
              control={control}
              name="username"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Họ tên</FormLabel>
                  <FormControl>
                    <Input maxLength={10} placeholder="shadcn" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={control}
              name="phoneNumber"
              render={({ field: { onChange, ...props } }) => (
                <FormItem>
                  <FormLabel>Điện thoại</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="shadcn"
                      onChange={(e) => {
                        onChange(e);
                        setValue('email', 'asdsad');
                      }}
                      {...props}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input placeholder="you@company.com" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={control}
              name="note"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Note</FormLabel>
                  <FormControl>
                    <textarea
                      maxLength={10}
                      className="border"
                      rows={6}
                      placeholder="Type note..."
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <p className="whitespace-pre-line">{note}</p>
            <span>{note?.length}</span>
            <FormField
              control={control}
              name="amount.from"
              render={({ field: { onChange, ...props } }) => (
                <FormItem>
                  <FormLabel>fromAmount</FormLabel>
                  <FormControl>
                    <Input
                      type="number"
                      onChange={(e) => {
                        const value = e.target.value;
                        const isNumber = typeof Number(value) === 'number';
                        onChange(isNumber ? Number(value) : value);
                      }}
                      {...props}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={control}
              name="amount.to"
              render={({ field: { onChange, ...props } }) => (
                <FormItem>
                  <FormLabel>toAmount</FormLabel>
                  <FormControl>
                    <Input
                      type="number"
                      onChange={(e) => {
                        const value = e.target.value;
                        const isNumber = typeof Number(value) === 'number';
                        onChange(isNumber ? Number(value) : value);
                        trigger('amount.to');
                      }}
                      {...props}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            /> */}
            <Button type="submit" icon={<ArrowEndIcon className="size-4" />} className="w-full">
              Tư vấn ngay
            </Button>
          </form>
        </Form>

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
        <Button
          type="button"
          icon={<ArrowEndIcon className="size-4" />}
          onClick={handleRegister}
          className="w-full"
        >
          Tư vấn ngay
        </Button>
      </div>
      <div className="mt-8 space-y-4">
        <div className="font-semibold">Tư vấn nhanh</div>
        <ButtonLink
          icon={<PhoneIcon className="size-4" />}
          href="tel:+61426812895"
          color="default"
          size="auto"
          className="text-[#001524] text-sm font-medium"
        >
          +61 426 812 895 (Úc - Australia)
        </ButtonLink>
        <ButtonLink
          icon={<PhoneIcon className="size-4" />}
          href="tel:+84888031854"
          color="default"
          size="auto"
          className="text-[#001524] text-sm font-medium"
        >
          +84 888 031 854 (Việt Nam)
        </ButtonLink>
      </div>
    </div>
  );
}
