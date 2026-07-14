import type { ReactNode } from 'react';
import { cn } from '@/lib/utils';

export function Card({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        'overflow-hidden rounded-xl bg-white shadow-md transition-shadow hover:shadow-lg',
        className,
      )}
    >
      {children}
    </div>
  );
}
