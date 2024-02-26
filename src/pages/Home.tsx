import LanguageToggle from "@/components/LanguageToggle";
import { ModeToggle } from "@/components/ModeToggle";
import ProjectCard from "@/components/ProjectCard";
import TextSpin from "@/components/TextSpin";
import { Button } from "@/components/ui/button";
import { useTranslation } from "react-i18next";
import {
  Html5,
  Css3,
  Javascript,
  Mysql,
  Typescript,
  Python,
  Java,
  Php,
  Unity,
  Jquery,
  Csharp,
  Cplusplus,
  ReactLogo,
} from "styled-icons/simple-icons";
import { Github, Linkedin } from "styled-icons/remix-line";

const Home = () => {
  const { t } = useTranslation();

  return (
    <>
      <div className="flex justify-end space-x-4">
        <ModeToggle />
        <LanguageToggle />
      </div>
      <div className="pl-8 flex flex-col space-y-10">
        <img
          className="border-4 border-primary place-self-center opacity-0 rounded-full object-cover size-52 animate-slidein [--slidein-delay:200ms] "
          src="./assets/images/Profile-Picture.png"
        />
        <div className="flex gap-4 opacity-0 place-self-center animate-slidein [--slidein-delay:300ms]">
          <a
            href="https://github.com/PHNTMbandit"
            target="_blank">
            <Button
              variant="link"
              size="icon"
              className="hover:outline outline-offset-2 size-8">
              <Github />
            </Button>
          </a>
          <a
            href="https://www.linkedin.com/in/domenic-pittari-aa5911123/"
            target="_blank">
            <Button
              variant="link"
              size="icon"
              className="hover:outline outline-offset-2 size-8">
              <Linkedin />
            </Button>
          </a>
        </div>
        <div className="flex flex-col justify-start items-start space-y-3">
          <h1 className="h1-extrabold opacity-0 animate-slidein [--slidein-delay:400ms]">
            {t("main.greeting")}
          </h1>
          <h1 className="h1-extrabold opacity-0 animate-slidein [--slidein-delay:600ms]">
            {t("main.name")}
          </h1>
          <h1 className="h1-extrabold gap-x-1 opacity-0 animate-slidein [--slidein-delay:800ms]">
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
        <div className="flex space-x-3 opacity-0 animate-slidein [--slidein-delay:800ms]">
          <Html5 size={23} />
          <Css3 size={23} />
          <Python size={23} />
          <Javascript size={23} />
          <Typescript size={23} />
          <ReactLogo size={23} />
          <Jquery size={23} />
          <Java size={23} />
          <Php size={23} />
          <Mysql size={23} />
          <Csharp size={23} />
          <Cplusplus size={23} />
          <Unity size={23} />
        </div>
        <div className="flex flex-col justify-start items-start">
          <div className="flex flex-wrap gap-4 opacity-0 animate-slidein [--slidein-delay:1200ms]">
            <ProjectCard
              title={t("main.candlelightTitle")}
              description={t("main.candlelightDescription")}
              tags={["Full-Stack", "API", "MERN"]}
              content={t("main.candlelightContent")}
              link=""
              image="./assets/images/Candlelight-Logo.png"
            />
            <ProjectCard
              title={t("main.projectMVCTitle")}
              description={t("main.projectMVCDescription")}
              tags={["Unity", "3D", "C#"]}
              content={t("main.projectMVCContent")}
              link="https://phntmbandit.itch.io/mvc"
              image="./assets/images/Project-MVC-Picture.png"
            />
            <ProjectCard
              title={t("main.projectLuminaTitle")}
              description={t("main.projectLuminaDescription")}
              tags={["Unity", "2D", "C#"]}
              content={t("main.projectLuminaContent")}
              link="https://phntmbandit.itch.io/project-lumina"
              image="./assets/images/Project-Lumina-Picture.png"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
