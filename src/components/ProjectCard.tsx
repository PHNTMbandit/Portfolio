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
  link: string;
  image: string;
}

const ProjectCard = ({
  title,
  description,
  tags,
  content,
  link,
  image,
}: ProjectCardProps) => {
  return (
    <Card className="overflow-hidden w-[89mm] h-[35mm] outline-inherit transition-all hover:outline hover:animate-grow">
      <CardHeader>
        <CardTitle className="text-primary hover:underline hover:cursor-pointer">
          <a
            target="_blank"
            href={link}>
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
      <CardContent className="h-[200px] text-left">
        <p>{content}</p>
      </CardContent>
      <img
        src={image}
        alt="project logo"
        className="h-64 object-cover"></img>
    </Card>
  );
};

export default ProjectCard;
