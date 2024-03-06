import LanguageToggle from "@/components/LanguageToggle";
import { ModeToggle } from "@/components/ModeToggle";
import ProjectCard from "@/components/ProjectCard";
import TextSpin from "@/components/TextSpin";
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
import ProfilePicture from "@/components/ProfilePicture";
import SocialMediaLink from "@/components/SocialMediaLink";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { ArrowBarUp } from "@styled-icons/bootstrap/ArrowBarUp";

const Home = () => {
  const { t } = useTranslation();
  const handleClickScroll = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
      });
    }
  };

  return (
    <>
      <div
        id="top"
        className="flex space-x-4">
        <ModeToggle />
        <LanguageToggle />
      </div>

      <>
        <Button
          variant={"link"}
          onClick={() => handleClickScroll("top")}
          className="h4">
          {t("main.homeHeader")}
        </Button>
        <Button
          variant={"link"}
          onClick={() => handleClickScroll("projects")}
          className="h4">
          {t("main.projectsHeader")}
        </Button>
        <Button
          variant={"link"}
          onClick={() => handleClickScroll("about")}
          className="h4">
          {t("main.aboutHeader")}
        </Button>
      </>

      <div className="flex flex-col mt-20 mb-20">
        <ProfilePicture className="mt-6 animate-slidein [--slidein-delay:200ms]" />

        <div className="flex gap-4 mt-10 opacity-0 justify-center animate-slidein [--slidein-delay:400ms]">
          <SocialMediaLink
            link="https://github.com/PHNTMbandit"
            icon={<Github />}
          />
          <SocialMediaLink
            link="https://www.linkedin.com/in/domenic-pittari-aa5911123"
            icon={<Linkedin />}
          />
        </div>

        <div className="flex flex-col mt-14 items-center space-y-3">
          <h1 className="h1-extrabold opacity-0 animate-slidein [--slidein-delay:600ms]">
            {t("main.greeting")}
          </h1>
          <h1 className="h1-extrabold opacity-0 animate-slidein [--slidein-delay:800ms]">
            {t("main.name")}
          </h1>
          <h1 className="h1-extrabold gap-x-1 opacity-0 animate-slidein [--slidein-delay:1000ms]">
            {t("main.rolePrefix")}
            <TextSpin
              texts={[
                t("main.role1"),
                t("main.role2"),
                t("main.role3"),
                t("main.role4"),
                t("main.role5"),
                t("main.role6"),
              ]}
            />
          </h1>
        </div>

        <div className="flex flex-wrap mt-14 gap-5 justify-center opacity-0 animate-slidein [--slidein-delay:1200ms]">
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

        <div className="flex flex-col mt-36 gap-10 justify-center items-center">
          <img
            id="projects"
            src="./assets/images/Projects-Graphic.png"
            alt="Projects Graphic"
            className="w-72 opacity-0 animate-slidein [--slidein-delay:2400ms]"
          />
          <h2 className="h2-bold opacity-0 animate-slidein [--slidein-delay:2400ms]">
            {t("main.projectsHeader")}
          </h2>
          <Separator className="opacity-0 animate-slidein [--slidein-delay:2400ms]" />
          <div className="flex flex-wrap gap-8 place-content-center opacity-0 animate-slidein [--slidein-delay:2400ms]">
            <ProjectCard
              title={t("main.candlelightTitle")}
              description={t("main.candlelightDescription")}
              tags={["Full-Stack", "API", "MERN"]}
              content={t("main.candlelightContent")}
              siteLink="https://candlelightdb.vercel.app/signup"
              githubLink="https://github.com/PHNTMbandit/Project-Candlelight"
              image="./assets/images/Candlelight-Logo.png"
            />

            <ProjectCard
              title={t("main.projectMVCTitle")}
              description={t("main.projectMVCDescription")}
              tags={["Unity", "3D", "C#"]}
              content={t("main.projectMVCContent")}
              siteLink="https://phntmbandit.itch.io/mvc"
              githubLink="https://github.com/PHNTMbandit/Project-MVC"
              image="./assets/images/Project-MVC-Picture.png"
            />

            <ProjectCard
              title={t("main.projectLuminaTitle")}
              description={t("main.projectLuminaDescription")}
              tags={["Unity", "2D", "C#"]}
              content={t("main.projectLuminaContent")}
              siteLink="https://phntmbandit.itch.io/project-lumina"
              githubLink="https://github.com/PHNTMbandit/Project-Lumina"
              image="./assets/images/Project-Lumina-Picture.png"
            />
          </div>
        </div>

        <div className="flex flex-col mt-36 gap-10 justify-center items-center">
          <img
            id="about"
            src="./assets/images/About-Graphic.png"
            alt="Projects Graphic"
            className="w-72 opacity-0 animate-slidein [--slidein-delay:2400ms]"
          />
          <h2 className="h2-bold opacity-0 animate-slidein [--slidein-delay:2400ms]">
            {t("main.aboutHeader")}
          </h2>
          <Separator className="opacity-0 animate-slidein [--slidein-delay:2400ms]" />
          <div className="p text-left opacity-0 animate-slidein [--slidein-delay:2400ms]">
            <div className="w-[650px]">{t("main.about")}</div>
          </div>
        </div>
      </div>
      <Button
        onClick={() => handleClickScroll("top")}
        variant={"outline"}
        asChild>
        <ArrowBarUp className="hover:cursor-pointer" />
      </Button>
    </>
  );
};

export default Home;
