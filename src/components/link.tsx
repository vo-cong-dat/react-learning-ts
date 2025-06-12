import { Link } from 'react-router-dom';
import { cn } from '../lib/utils';
import { buttonVariants } from './button';

export default function ButtonLink({
  color,
  size,
  className,
  shape,
  children,
  icon,
  ...props
}: any) {
  return (
    <Link
      {...props}
      className={cn('text-white', buttonVariants({ color, size, shape, className }))}
    >
      {children}
      {icon}
    </Link>
  );
}
