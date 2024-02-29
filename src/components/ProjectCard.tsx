import SocialMediaLink from "./SocialMediaLink";
import { Github } from "@styled-icons/boxicons-logos/Github";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "./ui/card";
import { Badge } from "@/components/ui/badge";

interface ProjectCardProps {
  title: string;
  description: string;
  tags: string[];
  content: string;
  siteLink: string;
  githubLink: string;
  image: string;
}

const ProjectCard = ({
  title,
  description,
  tags,
  content,
  siteLink,
  githubLink,
  image,
}: ProjectCardProps) => {
  return (
    <Card className="hover:shadow-lg hover:shadow-primary overflow-hidden w-[89mm] outline-primary transition-all hover:outline animate-grow">
      <CardHeader>
        <SocialMediaLink
          link={githubLink}
          icon={<Github />}
          className="fixed left-72"
        />
        <CardTitle className="text-primary">
          <a
            className="hover:underline hover:cursor-pointer"
            target="_blank"
            href={siteLink}>
            {title}
          </a>
        </CardTitle>
        <CardDescription>{description}</CardDescription>
        <div className="flex-row space-x-2">
          {tags.map((tag, index) => (
            <Badge
              key={index}
              variant="outline">
              {tag}
            </Badge>
          ))}
        </div>
      </CardHeader>
      <CardContent className="xl:h-52 h-40 text-left">
        <p>{content}</p>
      </CardContent>
      <img
        src={image}
        alt="project logo"
        className="xl:h-56 h-72 w-full object-cover"></img>
    </Card>
  );
};

export default ProjectCard;
