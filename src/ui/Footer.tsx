import React from 'react';
import { useDarkMode } from '../providers/DarkModeProvider';
import { useLocalization } from  "../providers/LocalizationContext.tsx";

const Footer = () => {
  const { darkMode } = useDarkMode();
  const { language, translate } = useLocalization();

  return (
    <footer
      className={`${
        darkMode ? "bg-gray-800 text-white" : "bg-gray-100 text-black"
      } py-6 md:py-8`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="text-sm">
            &copy; 2025 {translate('Smart Solution Support||دعم الحلول الذكية')}. {translate('All rights reserved||جميع الحقوق محفوظة')}.
          </p>
          <div className="mt-4 flex justify-center space-x-4">
            <a
              href="/"
              className="text-gray-400 hover:text-white text-sm md:text-base transition duration-200 ease-in-out"
            >
              {translate('Privacy Policy||سياسة الخصوصية')}
            </a>
            <a
              href="/"
              className="text-gray-400 hover:text-white text-sm md:text-base transition duration-200 ease-in-out"
            >
              {translate('Terms of Service||شروط الخدمة')}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
