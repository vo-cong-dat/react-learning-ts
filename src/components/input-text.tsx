import { useId, type ChangeEvent } from 'react';
import { Input } from './input';
import { Label } from './label';

interface InputTextProps extends Omit<React.ComponentProps<'input'>, 'onChange'> {
  label: string;
  placeholder?: string;
  onChange?: (value: string) => void;
}

export default function InputText({ label, disabled, onChange, ...props }: InputTextProps) {
  const id = useId();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (disabled) {
      return;
    }

    const value = e.target.value;

    onChange?.(value);
  };

  return (
    <div className="space-y-1.5">
      <Label htmlFor={id}>{label}</Label>
      <Input id={id} onChange={handleChange} disabled={disabled} {...props} />
    </div>
  );
}
