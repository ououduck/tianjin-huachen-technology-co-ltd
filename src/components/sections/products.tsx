'use client';
import { useLanguage } from '@/hooks/use-language';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { AnimatedWrapper } from '@/components/ui/animated-wrapper';
import { BarChartBig, Code, Cuboid, ServerCog } from 'lucide-react';

export default function Products() {
  const { t } = useLanguage();
  
  const productList = [
    { icon: <Cuboid className="h-6 w-6 text-primary" />, title: t('product_1_title'), desc: t('product_1_desc') },
    { icon: <BarChartBig className="h-6 w-6 text-primary" />, title: t('product_2_title'), desc: t('product_2_desc') },
    { icon: <ServerCog className="h-6 w-6 text-primary" />, title: t('product_3_title'), desc: t('product_3_desc') },
    { icon: <Code className="h-6 w-6 text-primary" />, title: t('product_4_title'), desc: t('product_4_desc') },
  ];

  return (
    <section id="products" className="py-16 md:py-24 bg-background">
      <div className="container px-4 md:px-6">
        <AnimatedWrapper>
          <h2 className="text-3xl font-extrabold text-center font-headline tracking-tight sm:text-4xl">
            {t('products_title')}
          </h2>
        </AnimatedWrapper>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {productList.map((product, index) => (
            <AnimatedWrapper key={product.title} delay={index * 150}>
              <Card className="h-full rounded-2xl shadow-sm hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <div className="bg-primary/10 p-3 rounded-lg">
                      {product.icon}
                    </div>
                    <CardTitle className="font-headline text-lg">{product.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{product.desc}</p>
                </CardContent>
              </Card>
            </AnimatedWrapper>
          ))}
        </div>
      </div>
    </section>
  );
}
