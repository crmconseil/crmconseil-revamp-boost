import { useLanguage } from '@/contexts/LanguageContext';
import { Globe } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";

export const LanguageSelector = () => {
  const { language, setLanguage } = useLanguage();

  const handleLanguageChange = (newLang: 'fr' | 'en') => {
    setLanguage(newLang);
    const currentPath = window.location.pathname;
    
    if (newLang === 'en') {
      if (!currentPath.startsWith('/en')) {
        const newPath = currentPath === '/' ? '/en' : `/en${currentPath}`;
        window.location.href = newPath;
      }
    } else {
      if (currentPath.startsWith('/en')) {
        const newPath = currentPath.replace('/en', '') || '/';
        window.location.href = newPath;
      }
    }
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="sm" className="flex items-center gap-2">
          <Globe className="h-4 w-4" />
          <span className="uppercase text-sm font-medium">
            {language}
          </span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem 
          onClick={() => handleLanguageChange('fr')}
          className={language === 'fr' ? 'bg-accent' : ''}
        >
          🇫🇷 Français
        </DropdownMenuItem>
        <DropdownMenuItem 
          onClick={() => handleLanguageChange('en')}
          className={language === 'en' ? 'bg-accent' : ''}
        >
          🇬🇧 English
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};