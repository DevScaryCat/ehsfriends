// app/specialist-network/page.tsx
'use client';

import { Aperture, Zap, Shield, TrendingUp, ArrowRight } from 'lucide-react';
import Image from 'next/image';
import Header from '../components/Header';
import Footer from '../components/Footer';

const workRules = [
    {
        icon: Zap,
        title: '최고 전문성',
        description: '오랜 기간 축적된 최고의 경험과 노하우를 바탕으로, 고객의 기대를 뛰어넘는 가치를 제공합니다.',
    },
    {
        icon: Aperture,
        title: '시너지 창출',
        description: '다양한 전문가 그룹과의 유기적인 협업을 통해 강력한 시너지를 창출합니다.',
    },
    {
        icon: Shield,
        title: '신뢰 형성',
        description: '정직과 책임을 바탕으로 모든 업무를 투명하게 진행하며 고객과의 두터운 신뢰를 형성합니다.',
    },
    {
        icon: TrendingUp,
        title: '트렌드 선도',
        description: '시장과 기술의 변화를 선도하며, 고객에게 최적화된 미래 지향적 솔루션을 제공합니다.',
    },
];

export default function SpecialistNetworkPage() {
    return (
        <>
            <Header defaultOpaque />
            <main className="bg-white min-h-screen">
                <div className="relative h-[600px] overflow-hidden bg-gray-900 flex items-center justify-center">
                    <div className="absolute inset-0 z-0 bg-cover bg-center opacity-80"
                        style={{
                            backgroundImage: `url('https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-plain.svg')`,
                            backgroundColor: '#1f2937',
                            maskImage: 'radial-gradient(ellipse at center, transparent 0%, rgba(0,0,0,0.5) 100%)',
                            WebkitMaskImage: 'radial-gradient(ellipse at center, transparent 0%, rgba(0,0,0,0.5) 100%)',
                        }}
                    >
                        <div className="absolute inset-0 bg-grid-white/[0.05] [mask-image:linear-gradient(to_bottom,black,transparent)]" />
                    </div>

                    <div className="relative z-10 text-center text-white p-8">
                        <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight mb-4">
                            디지털 경험으로 고객 가치 창출
                        </h1>
                        <p className="text-lg text-gray-300 max-w-xl mx-auto">
                            데이터와 기술 기반의 온라인 서비스를 성공적으로 제공해 고객의 성장을 돕습니다.
                        </p>
                    </div>
                </div>

                <section className="py-20 bg-white">
                    <div className="max-w-7xl mx-auto px-6 text-center">
                        <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4">
                            우리의 사명은
                        </h2>
                        <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto">
                            '고객에게 가치있는 EHS서비스를 제공하는 것'입니다.
                        </p>

                        <div className="flex justify-center space-x-12 sm:space-x-20  py-8">
                            <div className="text-center">
                                <p className="text-3xl font-bold text-gray-900">2013년</p>
                                <p className="text-xl text-gray-500 mt-1">설립연도</p>
                            </div>
                            <div className="text-center">
                                <p className="text-3xl font-bold text-gray-900">쉽고 간편하게</p>
                                <p className="text-xl text-gray-500 mt-1">핵심가치</p>
                            </div>
                            <div className="text-center">
                                <p className="text-3xl font-bold text-gray-900">7,762억+</p>
                                <p className="text-xl text-gray-500 mt-1">보유 인력</p>
                            </div>
                            <div className="text-center">
                                <p className="text-3xl font-bold text-gray-900">1,500+</p>
                                <p className="text-xl text-gray-500 mt-1">업무 분야</p>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="py-20 bg-gray-50">
                    <div className="max-w-7xl mx-auto px-6">
                        <h2 className="text-3xl font-bold text-gray-900 mb-12">
                            WORK RULES
                        </h2>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                            {workRules.map((rule, index) => (
                                <div
                                    key={index}
                                    className="bg-white p-8 rounded-xl shadow-md border border-gray-100 flex flex-col items-center text-center transition duration-300 hover:shadow-lg hover:border-blue-200"
                                >
                                    <div className="w-16 h-16 mb-4 flex items-center justify-center rounded-full bg-blue-50">
                                        <rule.icon className="w-8 h-8 text-blue-600" />
                                    </div>
                                    <h3 className="text-xl font-bold text-gray-900 mb-3">{rule.title}</h3>
                                    <p className="text-gray-600 text-sm leading-relaxed flex-grow">
                                        {rule.description}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                <section className="py-20 bg-white">
                    <div className="max-w-7xl mx-auto px-6">
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">
                            COMPANY IDENTITY
                        </h2>
                        <p className="text-gray-700 mb-16">
                            세가지(즐긴다, 돕는다, 변혁을 선도한다)를 실현함으로써 최고의 비즈니스 파트너로서 고객의 성장에 기여합니다.
                        </p>
                        <div className="flex flex-col md:flex-row justify-center space-y-8 md:space-y-0 md:space-x-12">
                            <div className="w-full md:w-1/2 p-8 bg-gray-100 text-center">
                                <div className="flex items-center justify-center">
                                    <div>
                                        <Image
                                            src={"/t.png"}
                                            alt={"톡스프리"}
                                            width={400}
                                            height={300}
                                            unoptimized
                                            className="block transition-transform duration-300 hover:scale-105"
                                        />
                                    </div>
                                </div>
                                <div className="flex justify-center space-x-6 text-sm mt-4">
                                    <button className="flex items-center border px-5 py-3 border-gray-300 rounded-full text-gray-700 hover:text-blue-600 transition">
                                        <ArrowRight className="w-4 h-4 mr-1" />
                                        <span>브랜드 소개</span>
                                    </button>
                                    <button className="flex items-center border px-5 py-3 border-gray-300 rounded-full text-gray-700 hover:text-blue-600 transition">
                                        <ArrowRight className="w-4 h-4 mr-1" />
                                        <span>KPI 목표</span>
                                    </button>
                                </div>
                            </div>
                            <div className="w-full md:w-1/2 p-8 bg-gray-100 text-center">
                                <div className="flex items-center justify-center">
                                    <div>
                                        <Image
                                            src={"/t.png"}
                                            alt={"톡스프리"}
                                            width={400}
                                            height={300}
                                            unoptimized
                                            className="block transition-transform duration-300 hover:scale-105"
                                        />
                                    </div>
                                </div>
                                <div className="flex justify-center space-x-6 text-sm mt-4">
                                    <button className="flex items-center border px-5 py-3 border-gray-300 rounded-full text-gray-700 hover:text-blue-600 transition">
                                        <ArrowRight className="w-4 h-4 mr-1" />
                                        <span>브랜드 소개</span>
                                    </button>
                                    <button className="flex items-center border px-5 py-3 border-gray-300 rounded-full text-gray-700 hover:text-blue-600 transition">
                                        <ArrowRight className="w-4 h-4 mr-1" />
                                        <span>KPI 목표</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}