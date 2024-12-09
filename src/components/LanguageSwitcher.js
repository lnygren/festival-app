import React from 'react';
import { useTranslation } from 'react-i18next';

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const handleChangeLanguage = (language) => {
    i18n.changeLanguage(language);
  };

  return (
    <div className="p-5 space-x-2 font-bold">
      <button onClick={() => handleChangeLanguage('en')}>En</button>
      <button onClick={() => handleChangeLanguage('no')}>No</button>
    </div>
  );
};

export default LanguageSwitcher;