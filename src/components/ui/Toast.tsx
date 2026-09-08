import React, { useEffect } from 'react';
import { CheckCircle2, X } from 'lucide-react';

interface ToastProps {
  message: string;
  isVisible: boolean;
  onClose: () => void;
}

export const Toast: React.FC<ToastProps> = ({ message, isVisible, onClose }) => {
  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => {
        onClose();
      }, 4000);
      return () => clearTimeout(timer);
    }
  }, [isVisible, onClose]);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 max-w-sm flex items-center gap-3 px-4 py-3 rounded-xl bg-bg-card border border-brand-emerald/40 text-text-primary shadow-2xl animate-slideUp">
      <CheckCircle2 className="w-5 h-5 text-brand-emerald shrink-0" />
      <p className="text-xs sm:text-sm font-medium">{message}</p>
      <button
        onClick={onClose}
        aria-label="Close notification"
        className="ml-auto text-text-muted hover:text-text-primary transition-colors"
      >
        <X className="w-4 h-4" />
      </button>
    </div>
  );
};
