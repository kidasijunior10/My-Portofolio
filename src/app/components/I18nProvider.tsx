'use client';

import { useEffect } from 'react';

interface I18nProviderProps {
  children: React.ReactNode;
}

export default function I18nProvider({ children }: I18nProviderProps) {
  useEffect(() => {
    // Only import and initialize i18n on the client side
    import('../i18n');
  }, []);

  return <>{children}</>;
}
