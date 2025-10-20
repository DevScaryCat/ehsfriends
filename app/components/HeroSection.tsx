// app/components/HeroSection.tsx
"use client";

import { useState, useEffect, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade, Navigation } from 'swiper/modules';
import { ChevronLeft, ChevronRight, Briefcase, TrendingUp, Users, HeartHandshake } from 'lucide-react';
import { Cloudinary } from "@cloudinary/url-gen";
import { AdvancedVideo } from "@cloudinary/react";

import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';

const videoPublicIDs = [
    "banna1_cq5bjm",
    "banna2_uyzxit",
    "banna3_tzu0ki",
];

const useCountUp = (end: number, duration: number, startOnMount: boolean, delay: number) => {
    const [count, setCount] = useState(0);
    const frameRef = useRef<number | null>(null);
    useEffect(() => {
        if (!startOnMount) return;
        let startTime: number | null = null;
        const animate = (timestamp: number) => {
            if (!startTime) startTime = timestamp;
            const progress = timestamp - startTime;
            const percentage = Math.min(progress / duration, 1);
            setCount(Math.floor(end * percentage));
            if (progress < duration) frameRef.current = requestAnimationFrame(animate);
        };
        const timerId = setTimeout(() => requestAnimationFrame(animate), delay);
        return () => {
            clearTimeout(timerId);
            if (frameRef.current) cancelAnimationFrame(frameRef.current);
        };
    }, [end, duration, startOnMount, delay]);
    return count;
};

const StatBox = ({ count, label, icon: Icon, delayIndex }: { count: string; label: string; icon: React.ElementType; delayIndex: number }) => {
    const ref = useRef<HTMLDivElement>(null);
    const [isInView, setIsInView] = useState(false);
    const numberPart = parseInt(count.replace(/[^0-9]/g, ''), 10) || 0;
    const suffix = count.replace(/[0-9]/g, '');
    const animatedCount = useCountUp(numberPart, 1500, isInView, delayIndex * 200);
    useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) {
                setIsInView(true);
                observer.unobserve(entry.target);
            }
        }, { threshold: 0.5 });
        if (ref.current) observer.observe(ref.current);
        return () => { if (ref.current) observer.unobserve(ref.current); };
    }, []);

    // 2. StatBox 자체에 flex-1을 추가하여 세로 공간을 채우도록 합니다.
    return (
        <div ref={ref} className="p-4 text-center bg-white shadow-md border-b-4 border-slate-700 flex items-center flex-1">
            <div className="p-3 mr-4 bg-slate-700/10 rounded-full">
                <Icon className="h-6 w-6 text-slate-700" />
            </div>
            <div>
                <p className="text-2xl text-left font-bold text-slate-700">{animatedCount.toLocaleString()}{suffix}</p>
                <p className="text-sm text-gray-600 font-semibold">{label}</p>
            </div>
        </div>
    );
};

const AnimatedStats = () => {
    const stats = [
        { count: "5,000+", label: "컨설팅 기업수", icon: Users },
        { count: "10년+", label: "운영 노하우", icon: Briefcase },
        { count: "99%", label: "고객 만족도", icon: HeartHandshake },
        { count: "1위", label: "서비스 만족도", icon: TrendingUp },
    ];
    return (
        <div className="w-full md:w-1/3 h-full flex flex-col space-y-3">
            {stats.map((stat, index) => (
                <StatBox key={index} {...stat} delayIndex={index} />
            ))}
        </div>
    );
};

export const HeroSection = () => {
    const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);
    const cld = new Cloudinary({ cloud: { cloudName: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME } });
    const handleSlideChange = (swiper: any) => {
        videoRefs.current.forEach(video => { if (video) { video.pause(); video.currentTime = 0; } });
        const activeVideo = videoRefs.current[swiper.realIndex];
        if (activeVideo) {
            const playPromise = activeVideo.play();
            if (playPromise !== undefined) {
                playPromise.catch(error => { if (error.name !== 'AbortError') console.error("Video play failed:", error); });
            }
        }
    };
    return (
        <div className="bg-gray-100 border-b border-gray-300">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-16 flex flex-col md:flex-row md:items-stretch gap-4">
                <div className="w-full md:w-2/3 mb-8 md:mb-0">
                    <div className="relative h-64 md:h-96 w-full overflow-hidden bg-black">
                        <Swiper
                            modules={[Autoplay, EffectFade, Navigation]}
                            effect="fade" loop={true}
                            autoplay={{ delay: 15000, disableOnInteraction: false }}
                            navigation={{ nextEl: '.swiper-button-next-custom', prevEl: '.swiper-button-prev-custom' }}
                            onSlideChange={handleSlideChange} onSwiper={handleSlideChange}
                            className="h-full w-full"
                        >
                            {videoPublicIDs.map((publicID, index) => (
                                <SwiperSlide key={publicID}>
                                    <AdvancedVideo
                                        cldVid={cld.video(publicID)} autoPlay={index === 0} muted playsInline
                                        className="w-full h-full object-cover"
                                        innerRef={el => videoRefs.current[index] = el}
                                    />
                                </SwiperSlide>
                            ))}
                        </Swiper>
                        <button className="swiper-button-prev-custom absolute top-1/2 left-4 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-white/30 hover:bg-white/50 text-white flex items-center justify-center transition">
                            <ChevronLeft size={24} />
                        </button>
                        <button className="swiper-button-next-custom absolute top-1/2 right-4 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-white/30 hover:bg-white/50 text-white flex items-center justify-center transition">
                            <ChevronRight size={24} />
                        </button>
                    </div>
                </div>
                <AnimatedStats />
            </div>
        </div>
    );
};