'use client';
import { useLanguage } from '@/hooks/use-language';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { AnimatedWrapper } from '@/components/ui/animated-wrapper';
import { BrainCircuit, Cloud, DatabaseZap } from 'lucide-react';
import { Progress } from '@/components/ui/progress';

export default function TechShowcase() {
  const { t } = useLanguage();

  const technologies = [
    {
      icon: <Cloud className="h-8 w-8 text-primary" />,
      title: t('tech_1_title'),
      description: t('tech_1_desc'),
      metric: t('tech_1_metric'),
      value: 99.9,
    },
    {
      icon: <BrainCircuit className="h-8 w-8 text-primary" />,
      title: t('tech_2_title'),
      description: t('tech_2_desc'),
      metric: t('tech_2_metric'),
      value: 95,
    },
    {
      icon: <DatabaseZap className="h-8 w-8 text-primary" />,
      title: t('tech_3_title'),
      description: t('tech_3_desc'),
      metric: t('tech_3_metric'),
      value: 98,
    },
  ];

  return (
    <section id="technology" className="py-16 md:py-24 bg-secondary/50">
      <div className="container px-4 md:px-6">
        <AnimatedWrapper>
          <h2 className="text-3xl font-extrabold text-center font-headline tracking-tight sm:text-4xl">
            {t('tech_title')}
          </h2>
        </AnimatedWrapper>
        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {technologies.map((tech, index) => (
            <AnimatedWrapper key={tech.title} delay={index * 200}>
              <Card className="h-full rounded-2xl shadow-sm hover:shadow-xl transition-shadow duration-300 flex flex-col">
                <CardHeader>
                  <div className="bg-primary/10 p-4 rounded-lg self-start">
                    {tech.icon}
                  </div>
                  <CardTitle className="pt-4 font-headline">{tech.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex-grow flex flex-col">
                  <p className="text-muted-foreground flex-grow">{tech.description}</p>
                  <div className="mt-6">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium text-muted-foreground">{tech.metric}</span>
                      <span className="text-sm font-bold text-primary">{tech.value}{tech.metric.includes('Uptime') ? '%' : ''}</span>
                    </div>
                    <Progress value={tech.value} />
                  </div>
                </CardContent>
              </Card>
            </AnimatedWrapper>
          ))}
        </div>
      </div>
    </section>
  );
}
