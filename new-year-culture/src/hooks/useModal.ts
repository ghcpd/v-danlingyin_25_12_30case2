import { useState, useCallback, useEffect } from 'react';

/**
 * Custom hook for managing modal state
 */
export const useModal = <T = unknown>(): {
  isOpen: boolean;
  data: T | null;
  openModal: (data: T) => void;
  closeModal: () => void;
} => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [data, setData] = useState<T | null>(null);

  const openModal = useCallback((modalData: T) => {
    setData(modalData);
    setIsOpen(true);
    document.body.style.overflow = 'hidden';
  }, []);

  const closeModal = useCallback(() => {
    setIsOpen(false);
    setData(null);
    document.body.style.overflow = 'unset';
  }, []);

  // Handle escape key to close modal
  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && isOpen) {
        closeModal();
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [isOpen, closeModal]);

  return { isOpen, data, openModal, closeModal };
};
