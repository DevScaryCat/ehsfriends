'use client';

import { Aperture, Zap, Shield, TrendingUp, ArrowRight } from 'lucide-react';

/**
 * WORK RULES 섹션의 데이터
 */
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

/**
 * 메인 페이지 컴포넌트입니다. (이미지 디자인과 동일하게 구현)
 */
export default function HomePage() {
    return (
        <div className="bg-white min-h-screen">

            {/* 1. 메인 배너/헤더 섹션 */}
            <header className="relative h-[600px] overflow-hidden bg-gray-900 flex items-center justify-center">
                {/* 배경 이미지/애니메이션 Placeholder (실제 이미지 대신 검은 배경에 점선 효과를 흉내냅니다) */}
                <div className="absolute inset-0 z-0 bg-cover bg-center opacity-80"
                    style={{
                        backgroundImage: `url('https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-plain.svg')`, // 실제 이미지 경로로 대체 필요
                        backgroundColor: '#1f2937', // 어두운 배경색
                        // 이미지의 복잡한 네트워크 패턴을 시뮬레이션
                        maskImage: 'radial-gradient(ellipse at center, transparent 0%, rgba(0,0,0,0.5) 100%)',
                        WebkitMaskImage: 'radial-gradient(ellipse at center, transparent 0%, rgba(0,0,0,0.5) 100%)',
                    }}
                >
                    {/* 네트워크 데이터 흐름 시뮬레이션 */}
                    <div className="absolute inset-0 bg-grid-white/[0.05] [mask-image:linear-gradient(to_bottom,black,transparent)]" />
                </div>

                {/* 텍스트 콘텐츠 */}
                <div className="relative z-10 text-center text-white p-8">
                    <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight mb-4">
                        디지털 경험으로 고객 가치 창출
                    </h1>
                    <p className="text-lg text-gray-300 max-w-xl mx-auto">
                        데이터와 기술 기반의 온라인 서비스를 성공적으로 제공해 고객의 성장을 돕습니다.
                    </p>
                </div>
            </header>

            {/* 2. 회사 소개 및 통계 섹션 */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-6 text-center">
                    <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4">
                        디지털 기술과 데이터를 기반으로
                    </h2>
                    <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto">
                        공간과 일상의 변화를 선도하는 라이프 스타일 혁신 기업
                    </p>

                    <div className="flex justify-center space-x-12 sm:space-x-20 border-t border-b border-gray-200 py-8">
                        <div className="text-center">
                            <p className="text-2xl font-bold text-gray-900">1995년</p>
                            <p className="text-sm text-gray-500 mt-1">설립연도</p>
                        </div>
                        <div className="text-center">
                            <p className="text-2xl font-bold text-gray-900">휴먼성</p>
                            <p className="text-sm text-gray-500 mt-1">핵심가치</p>
                        </div>
                        <div className="text-center">
                            <p className="text-2xl font-bold text-gray-900">7,762억+</p>
                            <p className="text-sm text-gray-500 mt-1">매출액</p>
                        </div>
                        <div className="text-center">
                            <p className="text-2xl font-bold text-gray-900">1,500+</p>
                            <p className="text-sm text-gray-500 mt-1">협력사</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* 3. 핵심 가치/업무 규칙 (WORK RULES) 섹션 */}
            <section className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-6">
                    <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
                        WORK RULES
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {workRules.map((rule, index) => (
                            <div
                                key={index}
                                className="bg-white p-8 rounded-xl shadow-md border border-gray-100 flex flex-col items-center text-center transition duration-300 hover:shadow-lg hover:border-blue-200"
                            >
                                {/* 아이콘 */}
                                <div className="w-16 h-16 mb-4 flex items-center justify-center rounded-full bg-blue-50">
                                    <rule.icon className="w-8 h-8 text-blue-600" />
                                </div>

                                {/* 제목 */}
                                <h3 className="text-xl font-bold text-gray-900 mb-3">{rule.title}</h3>

                                {/* 설명 */}
                                <p className="text-gray-600 text-sm leading-relaxed flex-grow">
                                    {rule.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 4. 파트너 네트워크 (COMPANY IDENTITY) 섹션 */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-6">
                    <h2 className="text-3xl font-bold text-gray-900 mb-10 text-center">
                        COMPANY IDENTITY
                    </h2>

                    <div className="max-w-4xl mx-auto text-center mb-16">
                        <p className="text-gray-700 leading-7">
                            CJ가 세가지(즐긴다, 돕는다, 변혁을 선도한다)를 실현함으로써 최고의 비즈니스 파트너로서 고객의 성장에 기여합니다.
                        </p>
                    </div>

                    <div className="flex flex-col md:flex-row justify-center space-y-8 md:space-y-0 md:space-x-12">

                        {/* 파트너 카드 1 */}
                        <div className="w-full md:w-1/2 p-6 border rounded-xl shadow-sm text-center">
                            {/* 로고 영역 (플레이스홀더) */}
                            <div className="h-16 flex items-center justify-center mb-4 border-b pb-4">
                                <span className="text-xl font-extrabold text-blue-600">CJ콜라보네트웍스</span>
                            </div>
                            <div className="flex justify-center space-x-6 text-sm">
                                <button className="flex items-center text-gray-700 hover:text-blue-600 transition">
                                    <ArrowRight className="w-4 h-4 mr-1" />
                                    <span>브랜드 소개</span>
                                </button>
                                <button className="flex items-center text-gray-700 hover:text-blue-600 transition">
                                    <ArrowRight className="w-4 h-4 mr-1" />
                                    <span>KPI 목표</span>
                                </button>
                            </div>
                        </div>

                        {/* 파트너 카드 2 */}
                        <div className="w-full md:w-1/2 p-6 border rounded-xl shadow-sm text-center">
                            {/* 로고 영역 (플레이스홀더) */}
                            <div className="h-16 flex items-center justify-center mb-4 border-b pb-4">
                                <span className="text-xl font-extrabold text-gray-700">CJN-NETWORK</span>
                            </div>
                            <div className="flex justify-center space-x-6 text-sm">
                                <button className="flex items-center text-gray-700 hover:text-blue-600 transition">
                                    <ArrowRight className="w-4 h-4 mr-1" />
                                    <span>브랜드 소개</span>
                                </button>
                                <button className="flex items-center text-gray-700 hover:text-blue-600 transition">
                                    <ArrowRight className="w-4 h-4 mr-1" />
                                    <span>KPI 목표</span>
                                </button>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* 5. CTA 배너 섹션 */}
            <section className="bg-gray-900 py-16">
                <div className="max-w-7xl mx-auto px-6 text-center">
                    <div className="bg-gradient-to-r from-blue-700 to-indigo-700 p-10 rounded-xl shadow-2xl">
                        <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2">
                            CJ콜라보네트웍스와 함께 비즈니스의 변화와 혁신을 시작하세요
                        </h2>
                        <button className="mt-6 px-8 py-3 bg-white text-blue-700 font-semibold rounded-full shadow-lg hover:bg-gray-100 transition duration-300">
                            문의하기
                        </button>
                    </div>
                </div>
            </section>
        </div>
    );
}