// app/components/IconConsultingSection.tsx
"use client";

import {
    Layout, FlaskConical, Stethoscope, Users, Zap, Factory, Shield, Briefcase
} from 'lucide-react';
import Link from 'next/link';

// 1. 각 서비스에 맞는 아이콘을 포함한 데이터 정의
const consultingServices = [
    { title: "EHS 컨설팅", href: "/service/ehs", icon: Layout },
    { title: "화학물질관리", href: "/service/chemical", icon: FlaskConical },
    { title: "근골격계 유해요인조사", href: "/service/msds", icon: Stethoscope },
    { title: "보건관리 위탁대행", href: "/service/health-mgmt", icon: Users },
    { title: "위험성평가 컨설팅", href: "/service/risk-assessment", icon: Zap },
    { title: "작업환경개선", href: "/service/work-env", icon: Factory },
    { title: "공공기관 컨설팅", href: "/service/public", icon: Briefcase },
    { title: "산업보건지도사", href: "/service/health-pro", icon: Shield },
];

// 2. 아이콘 아이템을 위한 개별 컴포넌트
const IconConsultingItem = ({ title, href, icon: Icon }: typeof consultingServices[0]) => {
    return (
        <Link href={href} className="group text-center transition-transform duration-300 ease-out hover:-translate-y-2">
            <div className="mx-auto w-24 h-24 rounded-full bg-slate-100 group-hover:bg-slate-700 flex items-center justify-center transition-colors duration-300">
                <Icon className="w-12 h-12 text-slate-700 group-hover:text-white transition-colors duration-300" />
            </div>
            <p className="mt-4 font-semibold text-gray-800 text-sm">{title}</p>
        </Link>
    );
};

// 3. 메인 섹션 컴포넌트
export const IconConsultingSection = () => {
    return (
        <div className="bg-white py-16">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-8 gap-8">
                    {consultingServices.map((service, index) => (
                        <IconConsultingItem key={index} {...service} />
                    ))}
                </div>
            </div>
        </div>
    );
};