import { motion } from 'framer-motion';

interface LoadingSpinnerProps {
  text?: string;
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  variant?: 'default' | 'dots' | 'pulse';
}

export function LoadingSpinner({ 
  text = 'Loading...', 
  className = '', 
  size = 'md',
  variant = 'default'
}: LoadingSpinnerProps) {
  const sizeClasses = {
    sm: 'h-4 w-4',
    md: 'h-8 w-8',
    lg: 'h-12 w-12'
  };

  const textSizeClasses = {
    sm: 'text-xs',
    md: 'text-sm',
    lg: 'text-base'
  };

  if (variant === 'dots') {
    return (
      <div className={`flex flex-col items-center justify-center space-y-4 ${className}`}>
        <div className="loading-dots">
          <div></div>
          <div></div>
          <div></div>
        </div>
        {text && <p className={`text-muted-foreground ${textSizeClasses[size]}`}>{text}</p>}
      </div>
    );
  }

  if (variant === 'pulse') {
    return (
      <div className={`flex flex-col items-center justify-center space-y-4 ${className}`}>
        <motion.div
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          className={`${sizeClasses[size]} bg-primary rounded-full`}
        />
        {text && <p className={`text-muted-foreground ${textSizeClasses[size]}`}>{text}</p>}
      </div>
    );
  }

  return (
    <div className={`flex flex-col items-center justify-center space-y-4 ${className}`}>
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
        className={`${sizeClasses[size]} border-4 border-muted border-t-primary rounded-full`}
      />
      {text && <p className={`text-muted-foreground ${textSizeClasses[size]}`}>{text}</p>}
    </div>
  );
}