import { ReactElement } from "react";
import { Button } from "./ui/button";
import { twMerge } from "tailwind-merge";

interface SocialMediaLinkProps {
  className?: string;
  link: string;
  icon: ReactElement;
}
const SocialMediaLink = ({ className, link, icon }: SocialMediaLinkProps) => {
  return (
    <div>
      <a
        href={link}
        target="_blank">
        <Button
          variant="link"
          size="icon"
          className={twMerge(
            "hover:shadow-lg hover:shadow-primary outline-offset-2 size-8",
            className
          )}>
          {icon}
        </Button>
      </a>
    </div>
  );
};

export default SocialMediaLink;
