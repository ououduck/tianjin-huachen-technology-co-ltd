'use client';
import React, { useEffect, useRef } from 'react';
import { useLanguage } from '@/hooks/use-language';
import { Card, CardContent } from '@/components/ui/card';
import { AnimatedWrapper } from '@/components/ui/animated-wrapper';
import { cn } from '@/lib/utils';
import Image from 'next/image';

const PartnerLogo = ({ src, alt, className }: { src: string; alt: string; className?: string }) => {
  return (
    <div className={cn("relative h-10 w-32", className)}>
      <Image
        src={src}
        alt={alt}
        fill
        sizes="(max-width: 768px) 100vw, 33vw"
        className="object-contain"
      />
    </div>
  );
};

const PartnerCard = ({ partner }: { partner: { id: string; name: string; logo: string } }) => (
    <Card className="flex-shrink-0 w-64 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
      <CardContent className="p-6 flex flex-col items-center justify-center text-center gap-4 h-full">
        <PartnerLogo src={partner.logo} alt={partner.name} />
        <h3 className="font-semibold text-foreground">{partner.name}</h3>
      </CardContent>
    </Card>
);

export default function Partners() {
  const { t } = useLanguage();
  const scrollerRef = useRef<HTMLDivElement>(null);

  const partnerList = [
    { id: 'google_cloud', name: t('partner_google_cloud'), logo: '/img/googlecloud-color.png' },
    { id: 'microsoft', name: t('partner_microsoft'), logo: '/img/microsoft-color.png' },
    { id: 'aliyun', name: t('partner_aliyun'), logo: '/img/alibabacloud-color.png' },
    { id: 'huaweicloud', name: t('partner_huaweicloud'), logo: '/img/huaweicloud-color.png' },
    { id: 'aws', name: t('partner_aws'), logo: '/img/aws-color.svg' },
    { id: 'tencentcloud', name: t('partner_tencentcloud'), logo: '/img/tencentcloud-color.png' },
    { id: 'cloudflare', name: t('partner_cloudflare'), logo: '/img/cloudflare-color.png' },
    { id: 'baiducloud', name: t('partner_baiducloud'), logo: '/img/baiducloud-color.png' },
    { id: 'burncloud', name: t('partner_burncloud'), logo: '/img/burncloud-color.png' },
    { id: 'tianyi_cloud', name: t('partner_tianyi_cloud'), logo: '/img/statecloud-color.png' },
    { id: 'siliconcloud', name: t('partner_siliconcloud'), logo: '/img/siliconcloud-color.png' },
  ];

  const firstRow = partnerList.slice(0, Math.ceil(partnerList.length / 2));
  const secondRow = partnerList.slice(Math.ceil(partnerList.length / 2));

  useEffect(() => {
    const handleScroll = () => {
      const scroller = scrollerRef.current;
      if (scroller) {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        // Start speeding up after 200px scroll, max speedup factor of 5
        const speedUpFactor = Math.max(1, Math.min(5, (scrollTop - 200) / 100)); 
        const baseDuration = 4; // seconds
        const newDuration = baseDuration / speedUpFactor;
        scroller.style.setProperty('--animation-duration', `${newDuration}s`);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const Scroller = ({ children, direction = 'left' }: { children: React.ReactNode; direction?: 'left' | 'right' }) => (
    <div className="[mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]">
      <div
        className={cn(
          'flex min-w-full shrink-0 gap-4 py-4 w-max flex-nowrap',
          'animate-scroll',
          direction === 'right' ? 'flex-row-reverse' : ''
        )}
        style={{ '--animation-duration': '40s' } as React.CSSProperties}
      >
        {children}
        {children}
      </div>
    </div>
  );

  return (
    <section id="partners" className="py-16 md:py-24 bg-secondary/50">
      <div className="container px-4 md:px-6">
        <AnimatedWrapper>
          <h2 className="text-3xl font-extrabold text-center font-headline tracking-tight sm:text-4xl">
            {t('partners_title')}
          </h2>
        </AnimatedWrapper>
      </div>
      <div className="mt-12 relative flex flex-col gap-4 overflow-hidden" ref={scrollerRef}>
         <Scroller>
            {firstRow.map((partner) => (
                <PartnerCard partner={partner} key={partner.id} />
            ))}
        </Scroller>
        <Scroller direction="right">
            {secondRow.map((partner) => (
                <PartnerCard partner={partner} key={partner.id} />
            ))}
        </Scroller>
      </div>
    </section>
  );
}
