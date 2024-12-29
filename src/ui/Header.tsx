import React from "react";
import { useLocalization } from "../providers/LocalizationContext.tsx"; // Adjust path as needed
import { useDarkMode } from "../providers/DarkModeProvider"; // Adjust path as needed
import { FaSun, FaMoon } from "react-icons/fa"; // For dark mode toggle icons
import { MdTranslate } from "react-icons/md"; // For localization icon

const Header: React.FC = () => {
  const { language, setLanguage, translate } = useLocalization();
  const { darkMode, toggleDarkMode } = useDarkMode();

  const toggleLanguage = () => {
    setLanguage(language === "en" ? "ar" : "en");
  };

  return (
    <header
      className={`w-full ${
        darkMode ? "bg-gray-800 text-white" : "bg-gray-100 text-black"
      }`}
    >
      <div className="py-4 px-4 sm:px-6 lg:px-14 flex flex-col sm:flex-row items-center justify-between shadow-md">
        <h1 className="text-xl sm:text-2xl font-semibold">
          {translate("Welcome||أهلا بك")}
        </h1>

        {/* Controls */}
        <div className="flex items-center gap-4 mt-4 sm:mt-0">
          {/* Dark Mode Toggle */}
          <button
            onClick={toggleDarkMode}
            className="text-xl focus:outline-none hover:text-yellow-500"
            aria-label="Toggle dark mode"
          >
            {darkMode ? <FaSun /> : <FaMoon />}
          </button>

          {/* Language Toggle */}
          <button
            onClick={toggleLanguage}
            className="flex items-center gap-2 text-base focus:outline-none hover:text-blue-500"
            aria-label="Toggle language"
          >
            <MdTranslate className="text-lg" />
            {language === "en" ? "عربي" : "English"}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
