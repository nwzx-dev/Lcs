"use client";

import React from 'react';
import { useRouter } from 'next/router';
import { usePathname } from 'next/navigation';

const LanguageSwitcher = () => {
  const router = useRouter();
  const pathname = usePathname();
  const currentLocale = router.locale || 'en'; // Fallback to 'en' if locale is undefined

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const newLocale = event.target.value;
    router.push(pathname, pathname, { locale: newLocale });
  };

  return (
    <select
      onChange={handleChange}
      value={currentLocale}
      className="select select-bordered select-xs"
    >
      <option value="en">English</option>
      <option value="ar-SA">العربية</option>
    </select>
  );
};

export default LanguageSwitcher;