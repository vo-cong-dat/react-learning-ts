import { Link } from 'react-router-dom';
import { cn } from '../lib/utils';
import { buttonVariants } from './button';

export default function ButtonLink({ variant, size, className, ...props }: any) {
  return <Link {...props} className={cn(buttonVariants({ variant, size, className }))} />;
}
