import { useTranslation } from "react-i18next";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { Button } from "./ui/button";
import { useState } from "react";
import { Globe } from "styled-icons/boxicons-regular";

const locales: Record<string, { title: string }> = {
  en: { title: "English" },
  jp: { title: "Japanese" },
};

const LanguageToggle = () => {
  const { i18n } = useTranslation();
  const [position, setPosition] = useState(i18n.language);

  return (
    <div>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            variant="outline"
            size="icon">
            <Globe className="h-[1.6rem] w-[1.6rem]" />
            <span className="sr-only">Toggle language</span>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuRadioGroup
            value={position}
            onValueChange={setPosition}>
            {Object.keys(locales).map((locale) => (
              <DropdownMenuRadioItem
                key={locale}
                value={locale}
                onClick={() => i18n.changeLanguage(locale)}>
                {locales[locale].title}
              </DropdownMenuRadioItem>
            ))}
          </DropdownMenuRadioGroup>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default LanguageToggle;
