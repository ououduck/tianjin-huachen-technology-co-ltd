'use client';

import { useLanguage } from '@/hooks/use-language';
import { AnimatedWrapper } from '@/components/ui/animated-wrapper';
import { Button } from '@/components/ui/button';
import { ArrowDown, PlayCircle } from 'lucide-react';
import Image from 'next/image';

export default function Hero() {
  const { t } = useLanguage();

  const stats = [
    { value: '50+', label: t('hero_stat_projects') },
    { value: '100+', label: t('hero_stat_clients') },
    { value: '5', label: t('hero_stat_experience') },
    { value: '24/7', label: t('hero_stat_support') },
  ];

  return (
    <section id="overview" className="relative w-full py-20 md:py-28 lg:py-32 flex items-center justify-center overflow-hidden bg-primary/80">
      <div className="container px-4 md:px-6 z-10">
        <div className="flex flex-col items-center justify-center text-center gap-10">
          <AnimatedWrapper>
            <div className="inline-flex items-center rounded-full bg-primary/10 px-4 py-2 text-sm text-primary-foreground">
              <div className="bg-primary/20 rounded-full p-1 mr-2">
                <PlayCircle className="w-5 h-5 text-primary" />
              </div>
              <span className="text-primary-foreground font-medium">{t('hero_tagline')}</span>
            </div>
          </AnimatedWrapper>
          
          <AnimatedWrapper delay={100}>
            <h1 className="text-4xl font-extrabold font-headline tracking-tight sm:text-5xl md:text-6xl lg:text-7xl text-primary-foreground">
              {t('hero_main_title_1')}
              <br />
              {t('hero_main_title_2')}
            </h1>
          </AnimatedWrapper>

          <AnimatedWrapper delay={200}>
            <p className="max-w-3xl mx-auto text-lg text-primary-foreground md:text-xl">
              {t('hero_subtitle_new')}
            </p>
          </AnimatedWrapper>
          
          <AnimatedWrapper delay={300}>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                {t('hero_cta_primary')}
              </Button>
              <Button size="lg" variant="outline" className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10">
                {t('hero_cta_secondary')}
              </Button>
            </div>
          </AnimatedWrapper>

          <AnimatedWrapper delay={400}>
             <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-6 text-center md:gap-x-16">
                 {stats.map((stat, index) => (
                   <div key={index} className="flex flex-col items-center">
                     <span className="text-3xl md:text-4xl font-bold text-primary-foreground">{stat.value}</span>
                     <span className="text-sm text-primary-foreground mt-1">{stat.label}</span>
                   </div>
                 ))}
            </div>
          </AnimatedWrapper>
        </div>
      </div>
    </section>
  );
}
