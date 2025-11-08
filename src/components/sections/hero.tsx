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
    <section id="overview" className="relative w-full py-20 md:py-28 lg:py-32 flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIxMCIgaGVpZ2h0PSI4NzQiIHZpZXdCb3g9IjAgMCAxMjEwIDg3NCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGcgb3BhY2l0eT0iMC43Ij4KPGcgb3BhY2l0eT0iMC40IiBmaWx0ZXI9InVybCgjZmlsdGVyMF9mXzEwN18xMTAzNikiPgo8cGF0aCBkPSJNNjQ0LjY3IDI0Mi4xMDVMODQ4LjUyNiAxNjAuMDY5TDc0Ni41OTggMzI0LjE0TDM2NC4zNjkgNjMxLjc3NUwxNjAuNTEzIDcxMy44MTFMMjYyLjQ0MSA1NDkuNzM5TDY0NC42NyAyNDIuMTA1WiIgZmlsbD0idXJsKCNwYWludDBfbGluZWFyXzEwN18xMTAzNikiLz4KPC9nPgo8ZyBvcGFjaXR5PSIwLjMiIGZpbHRlcj0idXJsKCNmaWx0ZXIxX2ZfMTA3XzExMDM2KSI+CjxwYXRoIGQ9Ik0yMjkuMjkyIDQxMi4zNTVMMTM3LjU3MyAyODkuMjY4TDI5MC40MzggMzYzLjEyTDU5Ni4xNjggNjA5LjI5NUw2ODcuODg3IDczMi4zODJMNTM1LjAyMiA2NTguNTNMMjI5LjI5MiA0MTIuMzU1WiIgZmlsbD0idXJsKCNwYWludDFfbGluZWFyXzEwN18xMTAzNikiLz4KPC9nPgo8ZyBvcGFjaXR5PSIwLjMiIGZpbHRlcj0idXJsKCNmaWx0ZXIyX2ZfMTA3XzExMDM2KSI+CjxwYXRoIGQ9Ik03NzkuNzI1IDQ2MS41NTFMODcxLjQ2IDU4NC42MDRMNzE4LjU2OCA1MTAuNzcyTDQxMi43ODQgMjY0LjY2NUwzMjEuMDQ5IDE0MS42MTFMNDczLjk0MSAyMTUuNDQzTDc3OS43MjUgNDYxLjU1MVoiIGZpbGw9InVybCgjcGFpbnQyX2xpbmVhcl8xMDdfMTEwMzYpIi8+CjwvZz4KPC9nPgo8ZyBvcGFjaXR5PSIwLjciPgo8ZyBvcGFjaXR5PSIwLjQiIGZpbHRlcj0idXJsKCNmaWx0ZXIzX2ZfMTA3XzExMDM2KSI+CjxwYXRoIGQ9Ik04NDUuNjMyIDI0Mi4xMDVMMTA0OS40OSAxNjAuMDY5TDk0Ny41NiAzMjQuMTRMNTY1LjMzIDYzMS43NzVMMzYxLjQ3NSA3MTMuODExTDQ2My40MDIgNTQ5LjczOUw4NDUuNjMyIDI0Mi4xMDVaIiBmaWxsPSJ1cmwoI3BhaW50M19saW5lYXJfMTA3XzExMDM2KSIvPgo8L2c+CjxnIG9wYWNpdHk9IjAuMyIgZmlsdGVyPSJ1cmwoI2ZpbHRlcjRfZl8xMDdfMTEwMzYpIj4KPHBhdGggZD0iTTQzMC4yNTQgNDEyLjM1NUwzMzguNTM1IDI4OS4yNjhMNDkxLjQgMzYzLjEyTDc5Ny4xMyA2MDkuMjk1TDg4OC44NDkgNzMyLjM4Mkw3MzUuOTg0IDY1OC41M0w0MzAuMjU0IDQxMi4zNTVaIiBmaWxsPSJ1cmwoI3BhaW50NF9saW5lYXJfMTA3XzExMDM2KSIvPgo8L2c+CjxnIG9wYWNpdHk9IjAuMyIgZmlsdGVyPSJ1cmwoI2ZpbHRlcjVfZl8xMDdfMTEwMzYpIj4KPHBhdGggZD0iTTk4MC42ODcgNDYxLjU1MUwxMDcyLjQyIDU4NC42MDRMOTE5LjUzIDUxMC43NzJMNjEzLjc0NiAyNjQuNjY1TDUyMi4wMTEgMTQxLjYxMUw2NzQuOTAzIDIxNS40NDNMOTgwLjY4NyA0NjEuNTUxWiIgZmlsbD0idXJsKCNwYWludDVfbGluZWFyXzEwN18xMTAzNikiLz4KPC9nPgo8L2c+CjxkZWZzPgo8ZmlsdGVyIGlkPSJmaWx0ZXIwX2ZfMTA3XzExMDM2IiB4PSIwLjUxMjcyNiIgeT0iMC4wNjg4NDc3IiB3aWR0aD0iMTAwOC4wMSIgaGVpZ2h0PSI4NzMuNzQyIiBmaWx0ZXJVbml0cz0idXNlclNwYWNlT25Vc2UiIGNvbG9yLWludGVycG9sYXRpb24tZmlsdGVycz0ic1JHQiI+CjxmZUZsb29kIGZsb29kLW9wYWNpdHk9IjAiIHJlc3VsdD0iQmFja2dyb3VuZEltYWdlRml4Ii8+CjxmZUJsZW5kIG1vZGU9Im5vcm1hbCIgaW49IlNvdXJjZUdyYXBoaWMiIGluMj0iQmFja2dyb3VuZEltYWdlRml4IiByZXN1bHQ9InNoYXBlIi8+CjxmZUdhdXNzaWFuQmx1ciBzdGREZXZpYXRpb249IjgwIiByZXN1bHQ9ImVmZmVjdDFfZm9yZWdyb3VuZEJsdXJfMTA3XzExMDM2Ii8+CjwvZmlsdGVyPgo8ZmlsdGVyIGlkPSJmaWx0ZXIxX2ZfMTA3XzExMDM2IiB4PSIyNS41NzMyIiB5PSIxNzcuMjY4IiB3aWR0aD0iNzc0LjMxMyIgaGVpZ2h0PSI2NjcuMTE1IiBmaWx0ZXJVbml0cz0idXNlclNwYWNlT25Vc2UiIGNvbG9yLWludGVycG9sYXRpb24tZmlsdGVycz0ic1JHQiI+CjxmZUZsb29kIGZsb29kLW9wYWNpdHk9IjAiIHJlc3VsdD0iQmFja2dyb3VuZEltYWdlRml4Ii8+CjxmZUJsZW5kIG1vZGU9Im5vcm1hbCIgaW49IlNvdXJjZUdyYXBoaWMiIGluMj0iQmFja2dyb3VuZEltYWdlRml4IiByZXN1bHQ9InNoYXBlIi8+CjxmZUdhdXNzaWFuQmx1ciBzdGREZXZpYXRpb249IjU2IiByZXN1bHQ9ImVmZmVjdDFfZm9yZWdyb3VuZEJsdXJfMTA3XzExMDM2Ii8+CjwvZmlsdGVyPgo8ZmlsdGVyIGlkPSJmaWx0ZXIyX2ZfMTA3XzExMDM2IiB4PSIyMDkuMDQ5IiB5PSIyOS42MTA4IiB3aWR0aD0iNzc0LjQxMSIgaGVpZ2h0PSI2NjYuOTk0IiBmaWx0ZXJVbml0cz0idXNlclNwYWNlT25Vc2UiIGNvbG9yLWludGVycG9sYXRpb24tZmlsdGVycz0ic1JHQiI+CjxmZUZsb29kIGZsb29kLW9wYWNpdHk9IjAiIHJlc3VsdD0iQmFja2dyb3VuZEltYWdlRml4Ii8+CjxmZUJsZW5kIG1vZGU9Im5vcm1hbCIgaW49IlNvdXJjZUdyYXBoaWMiIGluMj0iQmFja2dyb3VuZEltYWdlRml4IiByZXN1bHQ9InNoYXBlIi8+CjxmZUdhdXNzaWFuQmx1ciBzdGREZXZpYXRpb249IjU2IiByZXN1bHQ9ImVmZmVjdDFfZm9yZWdyb3VuZEJsdXJfMTA3XzExMDM2Ii8+CjwvZmlsdGVyPgo8ZmlsdGVyIGlkPSJmaWx0ZXIzX2ZfMTA3XzExMDM2IiB4PSIyMDEuNDc1IiB5PSIwLjA2ODg0NzciIHdpZHRoPSIxMDA4LjAxIiBoZWlnaHQ9Ijg3My43NDIiIGZpbHRlclVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgY29sb3ItaW50ZXJwb2xhdGlvbi1maWx0ZXJzPSJzUkdCIj4KPGZlRmxvb2QgZmxvb2Qtb3BhY2l0eT0iMCIgcmVzdWx0PSJCYWNrZ3JvdW5kSW1hZ2VGaXgiLz4KPGZlQmxlbmQgbW9kZT0ibm9ybWFsIiBpbj0iU291cmNlR3JhcGhpYyIgaW4yPSJCYWNrZ3JvdW5kSW1hZ2VGaXgiIHJlc3VsdD0ic2hhcGUiLz4KPGZlR2F1c3NpYW5CbHVyIHN0ZERldmlhdGlvbj0iODAiIHJlc3VsdD0iZWZmZWN0MV9mb3JlZ3JvdW5kQmx1cl8xMDdfMTEwMzYiLz4KPC9maWx0ZXI+CjxmaWx0ZXIgaWQ9ImZpbHRlcjRfZl8xMDdfMTEwMzYiIHg9IjIyNi41MzUiIHk9IjE3Ny4yNjgiIHdpZHRoPSI3NzQuMzE0IiBoZWlnaHQ9IjY2Ny4xMTUiIGZpbHRlclVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgY29sb3ItaW50ZXJwb2xhdGlvbi1maWx0ZXJzPSJzUkdCIj4KPGZlRmxvb2QgZmxvb2Qtb3BhY2l0eT0iMCIgcmVzdWx0PSJCYWNrZ3JvdW5kSW1hZ2VGaXgiLz4KPGZlQmxlbmQgbW9kZT0ibm9ybWFsIiBpbj0iU291cmNlR3JhcGhpYyIgaW4yPSJCYWNrZ3JvdW5kSW1hZ2VGaXgiIHJlc3VsdD0ic2hhcGUiLz4KPGZlR2F1c3NpYW5CbHVyIHN0ZERldmlhdGlvbj0iNTYiIHJlc3VsdD0iZWZmZWN0MV9mb3JlZ3JvdW5kQmx1cl8xMDdfMTEwMzYiLz4KPC9maWx0ZXI+CjxmaWx0ZXIgaWQ9ImZpbHRlcjVfZl8xMDdfMTEwMzYiIHg9IjQxMC4wMTEiIHk9IjI5LjYxMDgiIHdpZHRoPSI3NzQuNDExIiBoZWlnaHQ9IjY2Ni45OTQiIGZpbHRlclVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgY29sb3ItaW50ZXJwb2xhdGlvbi1maWx0ZXJzPSJzUkdCIj4KPGZlRmxvb2QgZmxvb2Qtb3BhY2l0eT0iMCIgcmVzdWx0PSJCYWNrZ3JvdW5kSW1hZ2VGaXgiLz4KPGZlQmxlbmQgbW9kZT0ibm9ybWFsIiBpbj0iU291cmNlR3JhcGhpYyIgaW4yPSJCYWNrZ3JvdW5kSW1hZ2VGaXgiIHJlc3VsdD0ic2hhcGUiLz4KPGZlR2F1c3NpYW5CbHVyIHN0ZERldmlhdGlvbj0iNTYiIHJlc3VsdD0iZWZmZWN0MV9mb3JlZ3JvdW5kQmx1cl8xMDdfMTEwMzYiLz4KPC9maWx0ZXI+CjxsaW5lYXJHcmFkaWVudCBpZD0icGFpbnQwX2xpbmVhcl8xMDdfMTEwMzYiIHgxPSIyNjIuNDQiIHkxPSI1NDkuNzM5IiB4Mj0iNjM3LjQ3OSIgeTI9IjIwNS4zMiIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiPgo8c3RvcCBzdG9wLWNvbG9yPSIjNjk0M0ZGIi8+CjxzdG9wIG9mZnNldD0iMC41IiBzdG9wLWNvbG9yPSIjNUZBOEZGIi8+CjxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iIzZGRTVGRiIvPgo8L2xpbmVhckdyYWRpZW50Pgo8bGluZWFyR3JhZGllbnQgaWQ9InBhaW50MV9saW5lYXJfMTA3XzExMDM2IiB4MT0iNTM1LjAyMiIgeTE9IjY1OC41MyIgeDI9IjM1Ny4yMDYiIHkyPSIzMjcuMjc5IiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+CjxzdG9wIHN0b3AtY29sb3I9IiM2OTQzRkYiLz4KPHN0b3Agb2Zmc2V0PSIwLjUiIHN0b3AtY29sb3I9IiM1RkE4RkYiLz4KPHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjNkZFNUZGIi8+CjwvbGluZWFyR3JhZGllbnQ+CjxsaW5lYXJHcmFkaWVudCBpZD0icGFpbnQyX2xpbmVhcl8xMDdfMTEwMzYiIHgxPSI0NzMuOTQxIiB5MT0iMjE1LjQ0MyIgeDI9IjY1MS42NjUiIHkyPSI1NDYuNjciIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIj4KPHN0b3Agc3RvcC1jb2xvcj0iIzY5NDNGRiIvPgo8c3RvcCBvZmZzZXQ9IjAuNSIgc3RvcC1jb2xvcj0iIzVGQThGRiIvPgo8c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiM2RkU1RkYiLz4KPC9saW5lYXJHcmFkaWVudD4KPGxpbmVhckdyYWRpZW50IGlkPSJwYWludDNfbGluZWFyXzEwN18xMTAzNiIgeDE9IjQ2My40MDIiIHkxPSI1NDkuNzM5IiB4Mj0iODM4LjQ0MSIgeTI9IjIwNS4zMiIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiPgo8c3RvcCBzdG9wLWNvbG9yPSIjNjk0M0ZGIi8+CjxzdG9wIG9mZnNldD0iMC41IiBzdG9wLWNvbG9yPSIjNUZBOEZGIi8+CjxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iIzZGRTVGRiIvPgo8L2xpbmVhckdyYWRpZW50Pgo8bGluZWFyR3JhZGllbnQgaWQ9InBhaW50NF9saW5lYXJfMTA3XzExMDM2IiB4MT0iNzM1Ljk4NCIgeTE9IjY1OC41MyIgeDI9IjU1OC4xNjciIHkyPSIzMjcuMjc5IiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+CjxzdG9wIHN0b3AtY29sb3I9IiM2OTQzRkYiLz4KPHN0b3Agb2Zmc2V0PSIwLjUiIHN0b3AtY29sb3I9IiM1RkE4RkYiLz4KPHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjNkZFNUZGIi8+CjwvbGluZWFyR3JhZGllbnQ+CjxsaW5lYXJHcmFkaWVudCBpZD0icGFpbnQ1X2xpbmVhcl8xMDdfMTEwMzYiIHgxPSI2NzQuOTAzIiB5MT0iMjE1LjQ0MyIgeDI9Ijg1Mi42MjYiIHkyPSI1NDYuNjciIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIj4KPHN0b3Agc3RvcC1jb2xvcj0iIzY5NDNGRiIvPgo8c3RvcCBvZmZzZXQ9IjAuNSIgc3RvcC1jb2xvcj0iIzVGQThGRiIvPgo8c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiM2RkU1RkYiLz4KPC9saW5lYXJHcmFkaWVudD4KPC9kZWZzPgo8L3N2Zz4K"
          alt="Background"
          fill
          className="object-cover"
          priority
        />
      </div>
      <div className="container px-4 md:px-6 z-10">
        <div className="flex flex-col items-center justify-center text-center gap-10">
          <AnimatedWrapper>
            <div className="inline-flex items-center rounded-full bg-primary/10 px-4 py-2 text-sm text-foreground">
              <div className="bg-primary/20 rounded-full p-1 mr-2">
                <PlayCircle className="w-5 h-5 text-primary" />
              </div>
              <span className="text-foreground font-medium">{t('hero_tagline')}</span>
            </div>
          </AnimatedWrapper>
          
          <AnimatedWrapper delay={100}>
            <h1 className="text-4xl font-extrabold font-headline tracking-tight sm:text-5xl md:text-6xl lg:text-7xl text-foreground">
              {t('hero_main_title_1')}
              <br />
              {t('hero_main_title_2')}
            </h1>
          </AnimatedWrapper>

          <AnimatedWrapper delay={200}>
            <p className="max-w-3xl mx-auto text-lg text-foreground md:text-xl">
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
                     <span className="text-3xl md:text-4xl font-bold text-foreground">{stat.value}</span>
                     <span className="text-sm text-foreground mt-1">{stat.label}</span>
                   </div>
                 ))}
            </div>
          </AnimatedWrapper>
        </div>
      </div>
    </section>
  );
}
