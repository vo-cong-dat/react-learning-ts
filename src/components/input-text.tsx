import { useId } from 'react';
import { Input } from './input';
import { Label } from './label';

interface InputTextProps {
  label: string;
  placeholder?: string;
}

export default function InputText({ label, placeholder }: InputTextProps) {
  const id = useId();

  return (
    <div className="space-y-1.5">
      <Label htmlFor={id}>{label}</Label>
      <Input id={id} placeholder={placeholder} />
    </div>
  );
}
