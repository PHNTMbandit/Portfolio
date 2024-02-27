import { twMerge } from "tailwind-merge";

interface ProfilePictureProps {
  className?: string;
}

const ProfilePicture = ({ className }: ProfilePictureProps) => {
  return (
    <img
      className={twMerge(
        "shadow-lg shadow-primary border-4 border-primary place-self-center opacity-0 rounded-full object-cover size-52  ",
        className
      )}
      src="./assets/images/Profile-Picture.png"
    />
  );
};

export default ProfilePicture;
