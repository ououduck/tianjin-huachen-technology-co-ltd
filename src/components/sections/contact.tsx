'use client';

import { useLanguage } from '@/hooks/use-language';
import { AnimatedWrapper } from '@/components/ui/animated-wrapper';
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useToast } from "@/hooks/use-toast"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"
import { useState } from 'react';
import Image from 'next/image';

export default function Contact() {
  const { t } = useLanguage();
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const FormSchema = z.object({
    name: z.string().min(2, {
      message: "Name must be at least 2 characters.",
    }),
    email: z.string().email({
        message: "Please enter a valid email address.",
    }),
    message: z.string().min(10, {
        message: "Message must be at least 10 characters.",
    }),
  })

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  })

  async function onSubmit(data: z.infer<typeof FormSchema>) {
    setIsSubmitting(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // On a real app, you would send the data to your backend here.
    // For this demo, we'll just show a success toast.
    
    console.log(data);
    
    toast({
      title: t('contact_success_title'),
      description: t('contact_success_desc'),
    })
    form.reset();
    setIsSubmitting(false);
  }

  return (
    <section id="contact" className="py-16 md:py-24 bg-secondary/50">
      <div className="container px-4 md:px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
            <AnimatedWrapper>
                <div className="pr-8">
                    <div className="max-w-md">
                        <h2 className="text-3xl font-extrabold font-headline tracking-tight sm:text-4xl">
                        {t('contact_title')}
                        </h2>
                        <p className="mt-4 text-lg text-muted-foreground">
                        {t('contact_subtitle')}
                        </p>
                    </div>
                    <div className="mt-8 relative aspect-[4/3] rounded-2xl overflow-hidden shadow-lg">
                        <Image 
                        src="/img/call.png"
                        alt="Contact us illustration"
                            fill
                            className="object-cover"
                        />
                    </div>
                </div>
            </AnimatedWrapper>
          
            <AnimatedWrapper delay={200}>
                <div className="bg-background p-8 rounded-2xl shadow-lg mt-8 md:mt-0">
                    <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                        <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                            <FormItem>
                            <FormLabel>{t('contact_name_label')}</FormLabel>
                            <FormControl>
                                <Input placeholder={t('contact_name_placeholder')} {...field} />
                            </FormControl>
                            <FormMessage />
                            </FormItem>
                        )}
                        />
                        <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                            <FormItem>
                            <FormLabel>{t('contact_email_label')}</FormLabel>
                            <FormControl>
                                <Input type="email" placeholder={t('contact_email_placeholder')} {...field} />
                            </FormControl>
                            <FormMessage />
                            </FormItem>
                        )}
                        />
                        <FormField
                        control={form.control}
                        name="message"
                        render={({ field }) => (
                            <FormItem>
                            <FormLabel>{t('contact_message_label')}</FormLabel>
                            <FormControl>
                                <Textarea
                                placeholder={t('contact_message_placeholder')}
                                className="min-h-[120px]"
                                {...field}
                                />
                            </FormControl>
                            <FormMessage />
                            </FormItem>
                        )}
                        />
                        <Button 
                        type="submit" 
                        className="w-full bg-gradient-to-r from-primary to-accent text-primary-foreground hover:opacity-90 transition-opacity"
                        disabled={isSubmitting}
                        >
                        {isSubmitting ? 'Sending...' : t('contact_submit_button')}
                        </Button>
                    </form>
                    </Form>
                </div>
            </AnimatedWrapper>
        </div>
      </div>
    </section>
  );
}
