// app/performance/page.tsx
'use client';

import { motion } from 'framer-motion';
import { Building, TestTube2, ShieldCheck, Factory, Briefcase, HeartPulse, UserSquare, BookUser } from 'lucide-react';
import Image from 'next/image';
import Header from '../components/Header';
import Footer from '../components/Footer';

const performanceStats = [
    { category: '환경안전보건 컨설팅', count: 122, clients: '삼성전자 등', Icon: ShieldCheck },
    { category: '근골격계 유해요인조사', count: 117, clients: '국립암센터 등', Icon: UserSquare },
    { category: '유해위험방지계획서', count: 5, clients: '코아전기 등', Icon: Factory },
    { category: '작업환경개선계획서', count: 6, clients: '금속위 등', Icon: Briefcase },
    { category: '포괄적 위험성평가', count: 27, clients: '나스텍 등', Icon: BookUser },
    { category: '화학물질 위험성평가', count: 37, clients: '서울교통공사 등', Icon: TestTube2 },
    { category: '환기 진단 및 시공', count: 15, clients: '바솔 등', Icon: Building },
    { category: '보건관리 위탁사업', count: 12, clients: '대한통운 외', Icon: HeartPulse },
];

const researchProjects = [
    {
        year: 2020,
        tasks: [
            '관리대상 유해물질 제도 개선(안) 실행력 제고 방안 연구 (공동연구원)',
            '디엘펜컨배출 노출실태 및 작업환경관리 방안 연구 (공동연구원)',
            '포괄적 작업환경평가 제도 도입을 위한 시범 사업 연구 (공동연구원)',
        ],
    },
    {
        year: 2019,
        tasks: [
            '생식독성물질의 산업안전보건법 등 관리수준 검토를 위한 유해성·위험성 평가 (공동연구원)',
        ],
    },
];

const partners = [
    { name: 'SK Hynix', logoSrc: '/logos/sk_hynix.png' },
    { name: 'Inha University Hospital', logoSrc: '/logos/inha_hospital.png' },
    { name: 'National Cancer Center', logoSrc: '/logos/cancer_center.png' },
    { name: 'Kia Motors', logoSrc: '/logos/kia.png' },
    { name: 'Samsung Electronics', logoSrc: '/logos/samsung.png' },
    { name: 'Celltrion', logoSrc: '/logos/celltrion.png' },
    { name: 'Korail', logoSrc: '/logos/korail.png' },
    { name: 'Versum Materials', logoSrc: '/logos/versum.png' },
    { name: 'Hanmi Pharm', logoSrc: '/logos/hanmi.png' },
    { name: 'Incheon Airport', logoSrc: '/logos/incheon_airport.png' },
    { name: 'Amorepacific', logoSrc: '/logos/amorepacific.png' },
    { name: 'Seoul Metro', logoSrc: '/logos/seoul_metro.png' },
    { name: 'Eastar Jet', logoSrc: '/logos/estarjet.png' },
    { name: 'Haevichi', logoSrc: '/logos/haevichi.png' },
    { name: 'Ministry of Employment and Labor', logoSrc: '/logos/moel.png' },
    { name: 'Seoul National University', logoSrc: '/logos/snu.png' },
    { name: 'Korea Occupational Safety and Health Agency', logoSrc: '/logos/kosha.png' },
    { name: 'Myongji University', logoSrc: '/logos/myongji.png' },
    { name: 'Daegu Catholic University', logoSrc: '/logos/dcu.png' },
];

const cardVariants = {
    offscreen: { y: 50, opacity: 0 },
    onscreen: {
        y: 0,
        opacity: 1,
        transition: {
            type: "spring",
            bounce: 0.4,
            duration: 0.8
        }
    }
};

export default function CompanyInfoPage() {
    return (
        <>
            <Header defaultOpaque />
            <main className="bg-white">
                <section className="bg-slate-50 py-20">
                    <div className="container mx-auto px-6 text-center">
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7 }}
                            className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl"
                        >
                            사업 실적
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7, delay: 0.2 }}
                            className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto"
                        >
                            EHS Friends는 다양한 산업 분야의 고객들과 함께하며 신뢰와 전문성을 바탕으로 성장해왔습니다.
                        </motion.p>
                    </div>
                </section>

                <section className="py-24">
                    <div className="container mx-auto px-6">
                        <h2 className="text-3xl font-bold text-center text-gray-900 mb-16">주요 사업 실적</h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                            {performanceStats.map((stat, index) => (
                                <motion.div
                                    key={stat.category}
                                    initial="offscreen"
                                    whileInView="onscreen"
                                    viewport={{ once: true, amount: 0.5 }}
                                    transition={{ staggerChildren: 0.1, delay: index * 0.05 }}
                                    className="bg-white border border-gray-100 rounded-2xl p-6 text-center shadow-lg hover:shadow-xl hover:-translate-y-2 transition-all duration-300 flex flex-col"
                                >
                                    <motion.div variants={cardVariants} className="flex-grow">
                                        <div className="mx-auto w-16 h-16 mb-4 flex items-center justify-center rounded-full bg-blue-50">
                                            <stat.Icon className="w-8 h-8 text-blue-600" />
                                        </div>
                                        <h3 className="text-lg font-semibold text-gray-800 mb-2">{stat.category}</h3>
                                        <p className="text-sm text-gray-500">{stat.clients}</p>
                                    </motion.div>
                                    <motion.p variants={cardVariants} className="text-5xl font-extrabold text-blue-600 mt-6">
                                        {stat.count}<span className="text-3xl font-semibold text-gray-500 ml-1">건</span>
                                    </motion.p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                <section className="bg-slate-50 py-24">
                    <div className="container mx-auto px-6">
                        <h2 className="text-3xl font-bold text-center text-gray-900 mb-20">연구용역 실적</h2>
                        <div className="relative max-w-3xl mx-auto">
                            <div className="absolute left-1/2 -translate-x-1/2 h-full w-0.5 bg-gray-200"></div>
                            {researchProjects.map((project, projIndex) => (
                                <div key={project.year} className="mb-16">
                                    {project.tasks.map((task, taskIndex) => (
                                        <motion.div
                                            key={taskIndex}
                                            initial={{ opacity: 0, x: taskIndex % 2 === 0 ? -50 : 50 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            viewport={{ once: true, amount: 0.5 }}
                                            transition={{ duration: 0.6, delay: taskIndex * 0.1 }}
                                            className={`relative mb-8 flex items-center ${taskIndex % 2 === 0 ? 'justify-start' : 'justify-end'}`}
                                        >
                                            <div className={`w-1/2 ${taskIndex % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                                                <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100">
                                                    <p className="text-base text-gray-700">{task}</p>
                                                </div>
                                            </div>
                                            <div className="absolute left-1/2 -translate-x-1/2 z-10">
                                                <div className="bg-white border-2 border-blue-500 rounded-full w-4 h-4"></div>
                                            </div>
                                        </motion.div>
                                    ))}
                                    <motion.div
                                        initial={{ opacity: 0, scale: 0.5 }}
                                        whileInView={{ opacity: 1, scale: 1 }}
                                        viewport={{ once: true, amount: 0.5 }}
                                        className="absolute left-1/2 -translate-x-1/2 -bottom-6 z-10"
                                    >
                                        <div className="bg-blue-600 text-white font-bold rounded-full py-2 px-5 shadow-lg">{project.year}</div>
                                    </motion.div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                <section className="py-24">
                    <div className="container mx-auto px-6">
                        <h2 className="text-3xl font-bold text-center text-gray-900 mb-16">함께하는 파트너</h2>
                        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-x-8 gap-y-12 items-center">
                            {partners.map((partner) => (
                                <motion.div
                                    key={partner.name}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, amount: 0.5 }}
                                    transition={{ duration: 0.5 }}
                                    className="flex justify-center"
                                >
                                    <div className="relative h-12 w-32 filter grayscale hover:grayscale-0 transition-all duration-300">
                                        {/* 로고 이미지는 public/logos/ 경로에 파일명으로 저장해야 합니다. */}
                                        <Image
                                            src={partner.logoSrc}
                                            alt={partner.name}
                                            layout="fill"
                                            objectFit="contain"
                                            unoptimized
                                        />
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}