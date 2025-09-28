import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Link } from 'lucide-react';

// =================================================================
// 1. 데이터 정의
// =================================================================
const consultingData = {
    // Left Navigation Structure
    navigation: [
        { title: "환경 안전 보건", slug: "ehs" },
        { title: "근골격계 유해요인조사", slug: "musculoskeletal-survey" },
        { title: "화학물질관리 컨설팅", slug: "chemical-management" },
        { title: "보건관리 위탁대행", slug: "health-outsourcing" },
        { title: "위험성평가 컨설팅", slug: "risk-assessment" },
        { title: "작업환경개선 컨설팅", slug: "work-environment-improvement" },
        { title: "공공기관 안전보건 컨설팅", slug: "public-safety" },
        { title: "산업보건지도사 컨설팅", slug: "industrial-health-consulting" },
    ],

    // Content for each service slug (Simplified for length, but structure maintained)
    content: {
        "musculoskeletal-survey": {
            title: "근골격계 유해요인조사",
            imageSrc: "https://placehold.co/800x400/2563EB/FFFFFF/png?text=근골격계+유해요인조사",
            summary: "작업장 내 근골격계 질환을 유발하는 유해요인을 파악하고 개선 대책을 제시하여 근로자의 건강과 생산성을 동시에 향상시킵니다.",
            details: [
                {
                    heading: "조사 개요",
                    description: "산업안전보건법에 따라 사업주는 3년 주기로 유해요인 조사를 실시해야 합니다. 저희는 전문가의 인체공학적 분석 기법을 활용하여 정밀하게 진단합니다.",
                    list: [
                        "사업장 근골격계 부담 작업 확인",
                        "인체부위별 증상 설문 및 면담",
                        "작업 자세 및 작업 도구 분석 (RULA, REBA 등)",
                    ],
                },
                {
                    heading: "개선 대책 수립",
                    description: "조사 결과를 바탕으로 즉각적인 효과가 있는 공학적, 관리적 개선 방안을 맞춤형으로 제공합니다.",
                    list: [
                        "작업 방법 및 작업 순서 변경 지도",
                        "보호구 및 보조 장비 사용 가이드",
                        "스트레칭 및 건강 증진 프로그램 도입 지원",
                    ],
                },
            ],
            contactTitle: "근골격계 유해요인 조사 문의",
            contactText: "선제적인 유해요인 관리를 통해 사업장의 리스크를 줄이세요."
        },
        "chemical-management": {
            title: "화학물질관리 컨설팅",
            imageSrc: "https://placehold.co/800x400/059669/FFFFFF/png?text=화학물질관리+컨설팅",
            summary: "화학물질관리법(화관법), 산업안전보건법 등 복잡한 규제 환경 속에서 효율적인 화학물질 취급 및 보고 시스템을 구축하도록 지원합니다.",
            details: [
                {
                    heading: "법규 컴플라이언스",
                    description: "화학물질의 등록, 신고, 허가 등 복잡한 행정 절차를 대행하고, 최신 법규 개정 사항을 반영하여 줍니다.",
                    list: [
                        "화학물질 인벤토리 구축 및 유지",
                        "유해화학물질 취급시설 기술검토 및 장외영향평가서 작성",
                        "MSDS(물질안전보건자료) 작성 및 비치 지원",
                    ],
                },
                {
                    heading: "취급시설 안전 관리",
                    description: "화학물질 취급시설의 설계, 설치, 운영 단계에서의 안전성을 확보하기 위한 전문적인 기술 자문을 제공합니다.",
                    list: [
                        "시설 안전 점검 및 위험도 평가",
                        "비상 조치 계획 및 훈련 컨설팅",
                        "화학물질 누출 방지 및 방재 시스템 구축 지원",
                    ],
                },
            ],
            contactTitle: "화학물질관리 전문 컨설팅 문의",
            contactText: "복잡한 화학물질 규제, 이제 전문가에게 맡기세요."
        },
        "health-outsourcing": {
            title: "보건관리 위탁대행",
            imageSrc: "https://placehold.co/800x400/F97316/FFFFFF/png?text=보건관리+위탁대행",
            summary: "사업장의 보건관리자 선임 부담을 덜고, 전문 보건 관리 시스템을 통해 근로자의 건강을 체계적으로 관리합니다.",
            details: [
                {
                    heading: "보건관리 업무 대행",
                    description: "법적 의무 사항인 보건관리 업무를 전문적으로 수행하며, 근로자의 건강 보호 및 증진을 위한 다양한 프로그램을 운영합니다.",
                    list: [
                        "작업환경측정 및 특수건강진단 결과 관리",
                        "직업병 예방 및 건강 상담 실시",
                        "보건교육 및 건강 증진 프로그램 운영",
                    ],
                },
                {
                    heading: "응급상황 대비 및 대응",
                    description: "응급상황 발생 시 신속하고 체계적인 대응이 가능하도록 매뉴얼 구축 및 훈련을 지원합니다.",
                    list: [
                        "응급 처치 교육 및 응급 구호 장비 점검",
                        "스트레스 관리 및 심리 상담 지원",
                        "보건 관련 정부 지원 사업 안내 및 신청 지원",
                    ],
                },
            ],
            contactTitle: "보건관리 위탁대행 서비스 문의",
            contactText: "전문적인 보건 관리를 통해 직원 만족도를 높이고 생산성을 극대화하세요."
        },
        "risk-assessment": {
            title: "위험성평가 컨설팅",
            imageSrc: "https://placehold.co/800x400/DC2626/FFFFFF/png?text=위험성평가+컨설팅",
            summary: "사업장 내 잠재된 유해·위험요인을 파악하고 위험성을 추정·결정하여, 효율적이고 실행 가능한 감소 대책을 수립하도록 지도합니다.",
            details: [
                {
                    heading: "위험성 평가 절차",
                    description: "안전보건관리체계 구축의 핵심인 위험성평가를 체계적인 절차에 따라 진행하여 법규 준수 및 안전 문화 정착을 돕습니다.",
                    list: [
                        "평가 대상 선정 및 사전 준비",
                        "유해·위험요인 파악 (현장 조사 및 자료 분석)",
                        "위험성 추정 및 결정 (빈도, 강도 기반)",
                        "위험 감소 대책 수립 및 실행 계획 마련",
                    ],
                },
                {
                    heading: "지속적 개선 관리",
                    description: "위험성평가가 일회성 이벤트가 아닌 지속적인 안전 관리 활동이 되도록 시스템 구축을 지원합니다.",
                    list: [
                        "평가 결과 공유 및 근로자 의견 반영",
                        "위험성평가 인정 심사 준비 지원",
                        "정기 및 수시 평가 프로세스 확립",
                    ],
                },
            ],
            contactTitle: "위험성평가 전문가 컨설팅 문의",
            contactText: "실질적인 위험 감소 대책으로 안전 경영을 실현하세요."
        },
        "work-environment-improvement": {
            title: "작업환경개선 컨설팅",
            imageSrc: "https://placehold.co/800x400/8B5CF6/FFFFFF/png?text=작업환경개선+컨설팅",
            summary: "소음, 분진, 유해물질 등 작업 환경 유해요인을 측정 및 분석하고, 근본적인 개선 대책을 제시하여 쾌적한 작업 환경을 조성합니다.",
            details: [
                {
                    heading: "정밀 진단 및 평가",
                    description: "최신 측정 장비를 활용하여 유해요인을 정밀하게 진단하고, 법적 기준 및 국제 기준에 따른 평가를 수행합니다.",
                    list: [
                        "작업 환경 측정 및 분석 (소음, 분진, 화학물질)",
                        "환기 및 국소 배기 장치 성능 평가",
                        "유해요인 노출 수준 분석 및 건강 영향 평가",
                    ],
                },
                {
                    heading: "공학적/관리적 개선",
                    description: "진단 결과를 바탕으로 효과적인 공학적 설계 변경 및 관리적 통제 방안을 제시합니다.",
                    list: [
                        "소음 저감 시설 및 방진 설비 설계 자문",
                        "국소 배기 장치 최적화 및 개선 공사 감리",
                        "작업자 보호구 지급 및 교육 프로그램 운영 지원",
                    ],
                },
            ],
            contactTitle: "작업환경개선 솔루션 문의",
            contactText: "쾌적한 환경은 생산성과 근로자 만족도의 시작입니다."
        },
        "public-safety": {
            title: "공공기관 안전보건 컨설팅",
            imageSrc: "https://placehold.co/800x400/9CA3AF/FFFFFF/png?text=공공기관+안전보건+컨설팅",
            summary: "공공기관 특성에 맞는 안전보건 경영체계 구축 및 이행을 지원하여, 안전한 공공서비스 제공 환경을 조성하도록 돕습니다.",
            details: [
                {
                    heading: "안전보건 경영체계 구축 지원",
                    description: "공공기관 경영 평가 및 중대재해처벌법 대응을 위한 체계적인 안전보건 관리 시스템 구축을 지원합니다.",
                    list: [
                        "안전보건 목표 및 방침 설정 지원",
                        "경영 책임자 및 관리감독자 역할 교육",
                        "안전보건 예산 및 인력 운용 자문",
                    ],
                },
                {
                    heading: "중대재해 예방 및 대응",
                    description: "공공 분야에서 발생 가능한 중대재해 유형을 분석하고, 선제적 예방 및 위기 대응 시스템을 구축합니다.",
                    list: [
                        "주요 사업장 위험성 평가 및 개선",
                        "협력업체 및 위탁 사업 안전 관리 방안 제시",
                        "비상 상황 발생 시 보고 및 대응 매뉴얼 개발",
                    ],
                },
            ],
            contactTitle: "공공기관 안전보건 전문가 문의",
            contactText: "공공의 안전 가치를 높이는 데 EHS Friends가 함께합니다."
        },
        "industrial-health-consulting": {
            title: "산업보건지도사 컨설팅",
            imageSrc: "https://placehold.co/800x400/1D4ED8/FFFFFF/png?text=산업보건지도사+컨설팅",
            summary: "최고 수준의 산업보건 전문가(산업보건지도사)가 사업장의 보건 문제 전반에 대한 심층 진단과 종합적인 솔루션을 제공합니다.",
            details: [
                {
                    heading: "심층 보건 진단",
                    description: "단순 법규 준수를 넘어, 사업장의 고유한 위험 요인과 건강 문제를 심층적으로 분석하고 근본 원인을 찾아냅니다.",
                    list: [
                        "보건관리 시스템 효율성 감사",
                        "직업병 발생 이력 및 잠재 위험 분석",
                        "산업보건 관련 법적 분쟁 및 행정 처리 자문",
                    ],
                },
                {
                    heading: "종합 솔루션 제공",
                    description: "경영진 및 근로자 모두에게 만족도 높은 종합적인 보건 솔루션을 제공하며, 지속적인 개선을 위한 로드맵을 제시합니다.",
                    list: [
                        "맞춤형 건강 증진 및 웰니스 프로그램 개발",
                        "유해물질 대체 및 공정 개선 방안 자문",
                        "최신 보건 기술 및 관리 기법 도입 지원",
                    ],
                },
            ],
            contactTitle: "산업보건지도사와의 1:1 상담",
            contactText: "산업보건 분야 최고의 전문가와 함께 사업장 보건 수준을 한 단계 높이세요."
        },
    }
};

// =================================================================
// 2. 메인 컴포넌트
// =================================================================
export default function ConsultingDetail({ initialSlug = 'musculoskeletal-survey' }) {
    const [activeSlug, setActiveSlug] = useState(initialSlug);
    const activeContent = consultingData.content[activeSlug];
    const pageTitle = consultingData.navigation.find(nav => nav.slug === activeSlug)?.title || "EHS 컨설팅";

    // 템플릿의 Year/Award 구조를 가져와서 더미 데이터로 활용
    const awards = [
        { year: 2024, items: ["최우수 EHS 컨설팅 기관 선정", "혁신 안전 솔루션 특허 획득"] },
        { year: 2023, items: ["화학물질 관리 모범 사례 기관 지정", "ESG 경영 우수 파트너 선정"] },
        { year: 2022, items: ["위험성 평가 시스템 구축 유공 표창", "KOSHA-MS 인증 컨설팅 성공"] },
    ];

    // 첫 번째 항목("환경 안전 보건")은 타이틀 역할이므로 건너뜁니다.
    const navigationLinks = consultingData.navigation.slice(1);

    // URL slug을 변경하여 페이지 이동을 시뮬레이션
    const handleNavigation = (slug) => {
        setActiveSlug(slug);
        // 실제 Next.js 환경에서는 useRouter를 사용하여 URL을 업데이트합니다.
    };

    const isEHSLink = activeSlug === 'ehs';

    return (
        <div className="min-h-screen bg-white">
            {/* Header: 단순 네비게이션을 위해 임시로 추가 */}
            <div className="bg-gray-800 text-white p-4 sticky top-0 z-50 shadow-lg">
                <div className="container mx-auto px-6 lg:px-8">
                    <span className="text-xl font-bold">EHS Friends</span> / <span className="text-sm">EHS 컨설팅</span>
                </div>
            </div>

            {/* Main Content Area */}
            <div className="container mx-auto px-6 lg:px-8 mt-12 mb-20">
                {/* 메인 타이틀은 '환경 안전 보건' 탭을 누르면 'EHS 컨설팅'으로 표시 */}
                <h1 className="text-4xl font-extrabold text-gray-900 mb-10">{isEHSLink ? 'EHS 컨설팅 서비스' : pageTitle}</h1>

                <div className="flex flex-col lg:flex-row gap-12">
                    {/* Left Navigation (Side Bar) */}
                    <div className="lg:w-1/4 flex-shrink-0">
                        <div className="sticky top-[88px]"> {/* Header 높이만큼 조정 */}
                            <ul className="bg-gray-50 rounded-xl p-4 space-y-1 shadow-md">
                                {consultingData.navigation.map((nav) => (
                                    <li key={nav.slug}>
                                        <button
                                            onClick={() => handleNavigation(nav.slug)}
                                            className={`
                                                w-full text-left py-2 px-3 rounded-lg transition-all duration-200
                                                ${nav.slug === 'ehs'
                                                    ? 'font-bold text-gray-900 cursor-default hover:bg-gray-50' // Main title style
                                                    : nav.slug === activeSlug
                                                        ? 'bg-blue-600 text-white font-semibold shadow-md'
                                                        : 'text-gray-700 hover:bg-gray-200'
                                                }
                                            `}
                                            disabled={nav.slug === 'ehs'}
                                        >
                                            {nav.title}
                                        </button>
                                    </li>
                                ))}
                            </ul>

                            {/* Contact Box (Always Visible) */}
                            <div className="mt-8 p-6 bg-orange-50 rounded-xl border border-orange-200 shadow-md">
                                <h4 className="text-lg font-bold text-orange-600 mb-3">상담이 필요하신가요?</h4>
                                <p className="text-sm text-gray-700 mb-4">지금 바로 EHS 전문가와 1:1 상담을 신청하세요. 귀사에 최적화된 솔루션을 제공합니다.</p>
                                <a href="#" className="flex items-center justify-center bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 rounded-full transition-colors text-sm">
                                    상담 신청하기 <ArrowRight size={16} className="ml-1" />
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Right Content Area */}
                    <div className="lg:w-3/4 min-h-screen">
                        {isEHSLink ? (
                            // EHS Main Title Placeholder
                            <div className="p-8 bg-blue-50 rounded-xl">
                                <h2 className="text-2xl font-bold text-blue-800">EHS 컨설팅 서비스 전체 개요</h2>
                                <p className="mt-2 text-gray-600">EHS Friends는 환경, 안전, 보건 전 분야에 걸쳐 통합적인 솔루션을 제공합니다. 왼쪽 메뉴를 선택하여 각 서비스의 상세 내용을 확인해 주세요.</p>
                                <p className="mt-4 text-blue-500 font-medium">환경 (E), 안전 (H), 보건 (S) 통합 솔루션을 통해 지속 가능한 경영을 실현하세요.</p>
                            </div>
                        ) : (
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={activeSlug}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -10 }}
                                    transition={{ duration: 0.3 }}
                                    className="space-y-16"
                                >
                                    {/* 1. Main Visual & Summary */}
                                    <div className="space-y-6">
                                        <div className="w-full h-80 rounded-xl overflow-hidden shadow-lg">
                                            <img
                                                src={activeContent.imageSrc}
                                                alt={activeContent.title}
                                                className="w-full h-full object-cover"
                                                onError={(e) => { e.currentTarget.onerror = null; e.currentTarget.src = 'https://placehold.co/800x400/CCCCCC/666666?text=Image+Not+Found'; }}
                                            />
                                        </div>
                                        <p className="text-xl font-medium text-gray-700 leading-relaxed border-l-4 border-blue-600 pl-4 bg-blue-50 p-4 rounded-md">
                                            {activeContent.summary}
                                        </p>
                                    </div>

                                    {/* 2. Detailed Content Sections */}
                                    <div className="space-y-10">
                                        {activeContent.details.map((detail, index) => (
                                            <div key={index} className="border-b pb-8">
                                                <h3 className="text-3xl font-bold text-gray-900 mb-4 flex items-center">
                                                    <span className="text-blue-600 mr-3 font-extrabold text-4xl leading-none">{String(index + 1).padStart(2, '0')}</span>
                                                    {detail.heading}
                                                </h3>
                                                <p className="text-gray-600 mb-6 leading-relaxed">{detail.description}</p>

                                                {/* Check List (Image Template Style) */}
                                                <div className="bg-gray-100 p-6 rounded-lg shadow-inner">
                                                    <ul className="space-y-3">
                                                        {detail.list.map((item, i) => (
                                                            <li key={i} className="flex items-start text-gray-700">
                                                                <svg className="w-5 h-5 text-blue-500 mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                                                                {item}
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </div>
                                            </div>
                                        ))}
                                    </div>

                                    {/* 3. Timeline/Award Section (Based on Image Template) */}
                                    <div className="space-y-10">
                                        <h2 className="text-3xl font-bold text-gray-900 border-l-4 border-blue-600 pl-4">주요 성과 및 수상 내역</h2>

                                        <div className="relative border-l-2 border-gray-200 ml-4 pl-4 space-y-12">
                                            {awards.map((award) => (
                                                <div key={award.year} className="relative">
                                                    <div className="absolute -left-6 top-0 w-4 h-4 rounded-full bg-blue-600 border-4 border-white shadow-md"></div>
                                                    <h3 className="text-2xl font-extrabold text-gray-900 mb-3">{award.year}</h3>
                                                    <ul className="space-y-2">
                                                        {award.items.map((item, i) => (
                                                            <li key={i} className="flex items-start text-gray-700">
                                                                <span className="text-blue-500 text-xl leading-none mr-2">&bull;</span>
                                                                {item}
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    {/* 4. Contact Block (Section Specific) */}
                                    <div className="p-8 bg-blue-600 rounded-xl shadow-2xl text-white mt-12">
                                        <h4 className="text-2xl font-bold mb-2">{activeContent.contactTitle}</h4>
                                        <p className="mb-6 text-blue-100">{activeContent.contactText}</p>
                                        <a
                                            href="#"
                                            className="inline-flex items-center px-6 py-3 bg-white text-blue-600 font-bold rounded-full shadow-lg hover:bg-gray-100 transition-colors"
                                        >
                                            자세히 상담하기 <ArrowRight size={18} className="ml-2" />
                                        </a>
                                    </div>

                                </motion.div>
                            </AnimatePresence>
                        )}
                    </div>
                </div>
            </div>

            {/* Footer (Simple Placeholder) */}
            <div className="bg-gray-800 text-gray-400 p-8 mt-12">
                <div className="container mx-auto text-center text-sm">© 2024 EHS Friends Co., Ltd.</div>
            </div>
        </div>
    );
}
