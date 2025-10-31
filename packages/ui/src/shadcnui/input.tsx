import React from 'react';

import { cn } from '../lib/utils';

export interface InputProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'> {
  label?: string;
  error?: string;
  size?: 'sm' | 'md' | 'lg';
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (({ className, type, label, error, size = 'md', ...props }: InputProps, ref: React.ForwardedRef<HTMLInputElement>): JSX.Element => {
    const sizeClasses: Record<'sm' | 'md' | 'lg', string> = {
      sm: 'h-8 px-2 py-1 text-xs',
      md: 'h-10 px-3 py-2 text-sm',
      lg: 'h-12 px-4 py-3 text-base',
    };

    return (
      <div className="w-full">
        {label && (
          <label className="block text-sm font-medium text-foreground mb-1">
            {label}
          </label>
        )}
        <input
          type={type}
          className={cn(
            'flex w-full rounded-md border border-input bg-background ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50',
            sizeClasses[size],
            error && 'border-destructive focus-visible:ring-destructive',
            className
          )}
          ref={ref}
          {...(props as any)}
        />
        {error && (
          <p className="mt-1 text-sm text-destructive">{error}</p>
        )}
      </div>
    );
  }) as any
) as any;
Input.displayName = 'Input';

export { Input };