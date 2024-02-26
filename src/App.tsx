import "./App.css";
import LanguageToggle from "./components/LanguageToggle";
import { ModeToggle } from "./components/ModeToggle";
import { useTranslation } from "react-i18next";
import TextSpin from "./components/TextSpin";
import ProjectCard from "./components/ProjectCard";

function App() {
  const { t } = useTranslation();

  return (
    <>
      <div className="flex justify-end space-x-4">
        <ModeToggle />
        <LanguageToggle />
      </div>
      <div className="flex flex-col justify-start items-start space-y-3">
        <h1 className="h1-extrabold opacity-0 animate-slidein [--slidein-delay:500ms]">
          {t("main.greeting")}
        </h1>
        <h1 className="h1-extrabold opacity-0 animate-slidein [--slidein-delay:2000ms]">
          {t("main.name")}
        </h1>
        <h1 className="h1-extrabold gap-x-1 opacity-0 animate-slidein [--slidein-delay:3500ms]">
          {t("main.rolePrefix")}
          <TextSpin
            texts={[
              t("main.role1"),
              t("main.role2"),
              t("main.role3"),
              t("main.role4"),
            ]}
          />
        </h1>
      </div>
      <div className="flex flex-wrap justify-center mt-16 space-x-4">
        <ProjectCard />
        <ProjectCard />
      </div>
    </>
  );
}

export default App;
