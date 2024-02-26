import "./App.css";
import LanguageToggle from "./components/LanguageToggle";
import { ModeToggle } from "./components/ModeToggle";
import { useTranslation } from "react-i18next";

function App() {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col">
      <div className="flex justify-end space-x-4">
        <ModeToggle />
        <LanguageToggle />
      </div>
      <h1 className="h1-extrabold">{t("main.header")}</h1>
    </div>
  );
}

export default App;
