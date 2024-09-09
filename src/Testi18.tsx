import { Fragment } from "react";
import { useTranslation } from "react-i18next";

const Testi18n = () => {
  const { t, i18n } = useTranslation();

  const toggleLanguage = () => {
    const newLang = i18n.language === "en" ? "ar" : "en";
    i18n.changeLanguage(newLang);
  };

  const isEnglish = i18n.language === "en";

  return (
    <Fragment>
      <div className="p-4">
        <label className="relative inline-flex items-center cursor-pointer">
          <input
            type="checkbox"
            value=""
            className="sr-only peer"
            checked={isEnglish}
            onChange={toggleLanguage}
          />
          <div className={`peer rounded-full outline-none duration-100 after:duration-500 w-28 h-14 bg-blue-300 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-500  after:content-['Ar'] after:absolute after:outline-none after:rounded-full after:h-12 after:w-12 after:bg-white after:top-1 after:left-1 after:flex after:justify-center after:items-center  after:text-sky-800 after:font-bold peer-checked:after:translate-x-14 peer-checked:after:content-['En'] peer-checked:after:border-white`}>
          </div>
        </label>
      </div>
      <div>
        <h1 className="p-3">{t("Welcome to React")}</h1>
        <h1 className="p-3">{t("Noor")}</h1>
      </div>
    </Fragment>
  );
};

export default Testi18n;
