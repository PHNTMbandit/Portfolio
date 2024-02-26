import { useEffect, useState } from "react";
import TextTransition, { presets } from "react-text-transition";

interface TextSpinProps {
  texts: string[];
}

const TextSpin = ({ texts }: TextSpinProps) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => setIndex((index) => index + 1), 3000);
    return () => clearTimeout(intervalId);
  }, []);

  return (
    <TextTransition
      direction="down"
      inline={true}
      springConfig={presets.stiff}>
      {texts[index % texts.length]}
    </TextTransition>
  );
};

export default TextSpin;
