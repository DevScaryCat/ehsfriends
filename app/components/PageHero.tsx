// app/components/PageHero.tsx
'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

interface PageHeroProps {
    title: string;
    subtitle: string;
}

export default function PageHero({ title, subtitle }: PageHeroProps) {
    return (
        <section className="relative bg-gray-900 text-white py-24 sm:py-32 overflow-hidden">
            <div className="absolute inset-0">
                <Image
                    src="/sub_hero.jpg"
                    alt="페이지 배경 이미지"
                    layout="fill"
                    objectFit="cover"
                    className="opacity-50"
                    unoptimized
                />
                <div className="absolute inset-0 bg-black/30" />
            </div>
            <div className="container mx-auto px-6 text-center relative z-10">
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7 }}
                    className="text-4xl font-extrabold tracking-tight sm:text-5xl"
                >
                    {title}
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, delay: 0.2 }}
                    className="mt-4 text-lg text-gray-300 max-w-2xl mx-auto"
                >
                    {subtitle}
                </motion.p>
            </div>
        </section>
    );
}