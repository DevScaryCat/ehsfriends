// app/components/AnimatedStatsOverlay.tsx
"use client";

import { useState, useEffect, useRef } from 'react';
import { Briefcase, TrendingUp, Users } from 'lucide-react';

// 숫자 카운트업 애니메이션을 위한 커스텀 훅
const useCountUp = (end: number, duration: number, startOnMount: boolean, delay: number) => {
    const [count, setCount] = useState(0);
    const frameRef = useRef<number | null>(null);
    const startTimeRef = useRef<number | null>(null);

    useEffect(() => {
        if (!startOnMount) return;
        const startAnimation = () => {
            startTimeRef.current = null;
            const animate = (timestamp: number) => {
                if (!startTimeRef.current) startTimeRef.current = timestamp;
                const progress = timestamp - startTimeRef.current;
                const percentage = Math.min(progress / duration, 1);
                const currentCount = Math.floor(end * percentage);
                setCount(currentCount);
                if (progress < duration) {
                    frameRef.current = requestAnimationFrame(animate);
                }
            };
            frameRef.current = requestAnimationFrame(animate);
        };
        const timerId = setTimeout(startAnimation, delay);
        return () => {
            clearTimeout(timerId);
            if (frameRef.current) cancelAnimationFrame(frameRef.current);
        };
    }, [end, duration, startOnMount, delay]);
    return count;
};

// 통계 박스 컴포넌트
const StatBox = ({ countString, label, icon: Icon, delayIndex }: { countString: string; label: string; icon: React.ElementType; delayIndex: number }) => {
    const ref = useRef<HTMLDivElement>(null);
    const [isInView, setIsInView] = useState(false);
    const numberPart = parseInt(countString.replace(/[^0-9]/g, ''), 10) || 0;
    const suffix = countString.replace(/[0-9]/g, '');
    const animationDelay = delayIndex * 200;
    const count = useCountUp(numberPart, 1500, isInView, animationDelay);

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

    return (
        <div ref={ref} className={`p-4 text-center bg-white shadow-md border-b-4 border-slate-700 flex items-center`}>
            <div className={`p-3 mr-4 bg-slate-700/10 rounded-full`}>
                <Icon className={`h-6 w-6 text-slate-700`} />
            </div>
            <div>
                <p className={`text-2xl text-left font-bold text-slate-700`}>{count.toLocaleString()}{suffix}</p>
                <p className="text-sm text-gray-600 font-semibold">{label}</p>
            </div>
        </div>
    );
};

// 통계 섹션 컴포넌트
export const AnimatedStats = () => {
    const stats = [
        { count: "5,000+", label: "컨설팅 기업수", icon: Users },
        { count: "10년+", label: "운영 노하우", icon: Briefcase },
        { count: "1위", label: "서비스 만족도", icon: TrendingUp },
    ];

    return (
        <div className="w-full md:w-1/3 space-y-4">
            {stats.map((stat, index) => (
                <StatBox
                    key={index}
                    countString={stat.count}
                    label={stat.label}
                    icon={stat.icon}
                    delayIndex={index}
                />
            ))}
        </div>
    );
};