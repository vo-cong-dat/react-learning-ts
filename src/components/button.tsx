export default function Button({ variant = 'primary', children, icon, className }: any) {
  const primary = 'text-black bg-white';
  const secondary = 'text-white !bg-[#FF8D0A] border-white border';

  const allClass = `flex gap-1 text-sm items-center justify-center rounded-full px-6 py-[13px]${
    className ? ` ${className}` : ''
  }${variant === 'secondary' ? ` ${secondary}` : ` ${primary}`}`;

  return (
    <button className={allClass}>
      {children}
      {icon}
    </button>
  );
}
