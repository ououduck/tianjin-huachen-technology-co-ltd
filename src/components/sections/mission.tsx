'use client';
import { useLanguage } from '@/hooks/use-language';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { AnimatedWrapper } from '@/components/ui/animated-wrapper';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import Autoplay from 'embla-carousel-autoplay';
import {
  Rocket,
  Target,
  Lightbulb,
  HeartHandshake,
  ShieldCheck,
  Users,
  Award,
  Heart,
  Leaf,
  Globe,
} from 'lucide-react';

export default function Mission() {
  const { t } = useLanguage();

  const values = [
    {
      icon: <Target className="h-6 w-6 text-primary" />,
      title: t('mission_mission_title'),
      text: t('mission_mission_text'),
    },
    {
      icon: <Rocket className="h-6 w-6 text-primary" />,
      title: t('mission_vision_title'),
      text: t('mission_vision_text'),
    },
    {
      icon: <Lightbulb className="h-6 w-6 text-primary" />,
      title: t('values_innovation_title'),
      text: t('values_innovation_text'),
    },
    {
      icon: <HeartHandshake className="h-6 w-6 text-primary" />,
      title: t('values_customer_first_title'),
      text: t('values_customer_first_text'),
    },
    {
      icon: <ShieldCheck className="h-6 w-6 text-primary" />,
      title: t('values_integrity_title'),
      text: t('values_integrity_text'),
    },
    {
      icon: <Users className="h-6 w-6 text-primary" />,
      title: t('values_teamwork_title'),
      text: t('values_teamwork_text'),
    },
    {
      icon: <Award className="h-6 w-6 text-primary" />,
      title: t('values_excellence_title'),
      text: t('values_excellence_text'),
    },
    {
      icon: <Heart className="h-6 w-6 text-primary" />,
      title: t('values_responsibility_title'),
      text: t('values_responsibility_text'),
    },
    {
      icon: <Leaf className="h-6 w-6 text-primary" />,
      title: t('values_sustainability_title'),
      text: t('values_sustainability_text'),
    },
    {
      icon: <Globe className="h-6 w-6 text-primary" />,
      title: t('values_global_outlook_title'),
      text: t('values_global_outlook_text'),
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container px-4 md:px-6">
        <AnimatedWrapper>
          <h2 className="text-3xl font-extrabold text-center font-headline tracking-tight sm:text-4xl">
            {t('mission_title')}
          </h2>
        </AnimatedWrapper>
        <AnimatedWrapper delay={200}>
          <div className="mt-12">
            <Carousel
              plugins={[
                Autoplay({
                  delay: 3000,
                  stopOnInteraction: true,
                  stopOnMouseEnter: true,
                }),
              ]}
              opts={{
                align: 'start',
                loop: true,
              }}
              className="w-full"
            >
              <CarouselContent className="-ml-4">
                {values.map((value, index) => (
                  <CarouselItem
                    key={index}
                    className="md:basis-1/2 lg:basis-1/3 pl-4"
                  >
                    <div className="p-1 h-full">
                      <Card className="h-full rounded-2xl shadow-sm hover:shadow-lg transition-shadow duration-300">
                        <CardHeader>
                          <div className="flex items-center gap-4">
                            <div className="bg-primary/10 p-3 rounded-lg">
                              {value.icon}
                            </div>
                            <CardTitle className="font-headline text-lg">
                              {value.title}
                            </CardTitle>
                          </div>
                        </CardHeader>
                        <CardContent>
                          <p className="text-muted-foreground">{value.text}</p>
                        </CardContent>
                      </Card>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="hidden lg:flex" />
              <CarouselNext className="hidden lg:flex" />
            </Carousel>
          </div>
        </AnimatedWrapper>
      </div>
    </section>
  );
}
