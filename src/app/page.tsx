import Header from '@/components/layout/header';
import Hero from '@/components/sections/hero';
import Mission from '@/components/sections/mission';
import TechShowcase from '@/components/sections/tech-showcase';
import Products from '@/components/sections/products';
import Partners from '@/components/sections/partners';
import Contact from '@/components/sections/contact';
import Footer from '@/components/layout/footer';

export default function Home() {
  return (
    <div className="flex flex-col min-h-dvh bg-background text-foreground">
      <Header />
      <main className="flex-1">
        <Hero />
        <Mission />
        <TechShowcase />
        <Products />
        <Partners />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
