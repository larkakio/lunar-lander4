'use client';

import { useEffect } from 'react';

export function BaseAppMeta() {
  useEffect(() => {
    // Check if meta tag already exists
    const existingMeta = document.querySelector('meta[name="base:app_id"]');
    if (!existingMeta) {
      const meta = document.createElement('meta');
      meta.setAttribute('name', 'base:app_id');
      meta.setAttribute('content', '697a1e559266edba958ff4cc');
      document.head.insertBefore(meta, document.head.firstChild);
    }
  }, []);

  return null;
}
