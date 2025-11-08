'use client';
import { useLanguage } from '@/hooks/use-language';
import { CodeXml, Heart } from 'lucide-react';
import { Button } from '../ui/button';

export default function Footer() {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();

  const footerSections = [
    {
      title: t('footer_services_title'),
      links: [
        { label: t('footer_services_1') },
        { label: t('footer_services_2') },
        { label: t('footer_services_3') },
        { label: t('footer_services_4') },
        { label: t('footer_services_5') },
      ],
    },
    {
      title: t('footer_company_title'),
      links: [
        { label: t('footer_company_1') },
        { label: t('footer_company_2') },
        { label: t('footer_company_3') },
        { label: t('footer_company_4') },
        { label: t('footer_company_5') },
      ],
    },
    {
      title: t('footer_support_title'),
      links: [
        { label: t('footer_support_1') },
        { label: t('footer_support_2') },
        { label: t('footer_support_3') },
        { label: t('footer_support_4') },
        { label: t('footer_support_5') },
      ],
    },
  ];

  return (
    <footer className="relative mt-24 bg-secondary/30 text-secondary-foreground/80 rounded-t-[4rem] shadow-[0_-10px_30px_-5px_hsl(var(--primary)/0.2)]">
      <div className="container mx-auto py-32 px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Column 1: Company Info */}
          <div className="flex flex-col gap-4">
            <a href="#" className="flex items-center gap-2 text-foreground font-semibold text-lg">
              <div className="bg-primary rounded-md p-2">
                <CodeXml className="h-5 w-5 text-primary-foreground" />
              </div>
              <span>{t('hero_title')}</span>
            </a>
            <p className="text-sm">
              {t('footer_description')}
            </p>
            <div className="flex gap-2 mt-2">
                <Button variant="outline" size="icon" className="bg-background/50">微</Button>
                <Button variant="outline" size="icon" className="bg-background/50">微</Button>
                <Button variant="outline" size="icon" className="bg-background/50">知</Button>
                <Button variant="outline" size="icon" className="bg-background/50">B</Button>
            </div>
          </div>

          {/* Columns 2, 3, 4: Links */}
          {footerSections.map((section) => (
            <div key={section.title}>
              <h3 className="font-semibold text-foreground mb-4">{section.title}</h3>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <a href="#" className="text-sm hover:text-primary transition-colors">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 pt-8 border-t border-border/50 flex flex-col md:flex-row justify-between items-center text-sm gap-4">
            <div className='text-center md:text-left'>
                <p>&copy; {currentYear} {t('footer_company_name')}. {t('footer_rights')}</p>
                <p className="mt-1 flex items-center justify-center md:justify-start gap-1.5">
                    Made with <Heart className="w-4 h-4 text-red-500 fill-current" /> in Tianjin, China
                </p>
                <p className="mt-1"><a href="https://beian.miit.gov.cn" className="hover:text-primary transition-colors">{t('footer_icp')}</a></p>
            </div>
          <div className="flex gap-4">
            <a href="#" className="hover:text-primary transition-colors">{t('footer_policy')}</a>
            <a href="#" className="hover:text-primary transition-colors">{t('footer_terms')}</a>
            <a href="#" className="hover:text-primary transition-colors">{t('footer_cookie')}</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
