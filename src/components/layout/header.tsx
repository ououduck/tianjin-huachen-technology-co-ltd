'use client';

import { useState, useEffect } from 'react';
import { CodeXml } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useLanguage } from '@/hooks/use-language';
import { LanguageSwitcher } from '@/components/language-switcher';
import { ThemeSwitcher } from '@/components/theme-switcher';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';
import { Menu } from 'lucide-react';

export default function Header() {
  const { t } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#overview', label: t('nav_overview') },
    { href: '#technology', label: t('nav_technology') },
    { href: '#products', label: t('nav_products') },
    { href: '#partners', label: t('nav_partners') },
    { href: '#contact', label: t('nav_contact') },
  ];

  const NavItems = () => (
    <>
      {navLinks.map((link) => (
        <a
          key={link.href}
          href={link.href}
          onClick={() => setIsMenuOpen(false)}
          className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
        >
          {link.label}
        </a>
      ))}
    </>
  );

  return (
    <header
      className={cn(
        'sticky top-0 z-50 w-full border-b border-transparent transition-all duration-300',
        isScrolled ? 'border-border/40 bg-background/80 backdrop-blur-lg' : ''
      )}
    >
      <div className="container flex h-16 items-center px-4 md:px-6">
        <a href="#" className="mr-6 flex items-center gap-2">
          <CodeXml className="h-6 w-6 text-primary" />
          <span className="font-semibold font-headline">天津欢晨科技</span>
        </a>

        <nav className="hidden flex-1 items-center gap-6 md:flex">
          <NavItems />
        </nav>

        <div className="flex flex-1 items-center justify-end gap-2">
          <LanguageSwitcher />
          <ThemeSwitcher />
          <div className="md:hidden">
            <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Toggle menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right">
                <div className="flex flex-col gap-6 p-6">
                   <a href="#" className="mr-6 flex items-center gap-2" onClick={() => setIsMenuOpen(false)}>
                      <CodeXml className="h-6 w-6 text-primary" />
                      <span className="font-semibold font-headline">Huanchen Tech</span>
                    </a>
                  <nav className="flex flex-col gap-4">
                    <NavItems />
                  </nav>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
