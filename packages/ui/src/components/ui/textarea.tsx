import * as React from 'react';

import { cn } from 'ui/lib/utils';

export interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, ...props }, ref) => {
    return (
      <textarea
        className={cn(
          'bg-background placeholder:text-muted-foreground focus-visible:border-primary flex min-h-[80px] w-full rounded-md border px-3 py-2 text-sm hover:border-b-2 hover:border-b-black focus-visible:border-b-2 focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50',
          className,
        )}
        ref={ref}
        {...props}
      />
    );
  },
);
Textarea.displayName = 'Textarea';

export { Textarea };
