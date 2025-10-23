// app/service/page.tsx
import { ChevronRight, Home, Layout, Zap, Users, Shield, Factory, FlaskConical, Stethoscope, Briefcase } from 'lucide-react';
import Link from 'next/link'; // Link 컴포넌트 임포트
import type { Metadata } from 'next'; // Metadata 타입 임포트

// --- 서비스 데이터 ---
const serviceItems = [
    { title: "EHS컨설팅", href: "/service/ehs", icon: Layout, description: "통합 환경, 보건, 안전 시스템 구축" },
    { title: "화학물질관리 컨설팅", href: "/service/chemical", icon: FlaskConical, description: "화평법, 화관법 등 화학물질 규제 대응" },
    { title: "근골격계 유해요인조사", href: "/service/msds", icon: Stethoscope, description: "근골격계 질환 예방 및 환경 개선" },
    { title: "보건관리위탁", href: "/service/health-mgmt", icon: Users, description: "보건 관리 업무 전문 아웃소싱" },
    { title: "위험성평가", href: "/service/risk-assessment", icon: Zap, description: "사업장 위험 요소를 진단하고 평가" },
    { title: "작업환경개선 컨설팅", href: "/service/work-env", icon: Factory, description: "쾌적하고 안전한 작업 환경 조성" },
    { title: "산업보건지도사 컨설팅", href: "/service/health-pro", icon: Shield, description: "자격 기준에 따른 전문 지도 제공" },
    // 공공기관 컨설팅 항목 추가 (메인 페이지 IconConsultingSection과 일치시키기 위해)
    { title: "공공기관 컨설팅", href: "/service/public", icon: Briefcase, description: "공공 부문 특화 안전보건 관리 지원" },
];

// --- 페이지 Metadata ---
export const metadata: Metadata = {
    title: "업무 안내", // 페이지 제목
    description: "EHS Friends가 제공하는 EHS컨설팅, 화학물질 관리, 근골격계 유해요인조사, 보건관리 위탁 등 다양한 전문 컨설팅 서비스를 확인하세요.", // 페이지 설명
    alternates: {
        canonical: '/service', // 표준 URL
    },
};


// --- 컴포넌트 정의 ---
const Breadcrumbs = () => {
    return (
        <nav className="max-w-6xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-3 text-sm text-gray-500 border-b border-gray-200 bg-white">
            <ol className="flex items-center space-x-2">
                <li><Link href="/" className="hover:text-blue-700"><Home className="w-4 h-4 inline-block text-gray-400" /></Link></li>
                <ChevronRight className="w-4 h-4" />
                <li className="text-slate-700 font-bold">업무 안내</li> {/* 텍스트 수정 */}
            </ol>
        </nav>
    );
};

// ServiceTile 내부의 a 태그를 Link 컴포넌트로 변경
const ServiceTile = ({ title, href, icon: Icon, description }: typeof serviceItems[0] & { icon: React.ElementType }) => (
    <Link
        href={href}
        className="block p-4 border border-gray-300 shadow-sm hover:shadow-lg transition duration-200 ease-in-out bg-white text-center space-y-3 rounded-lg" // 스타일 약간 수정
    >
        <div className="flex justify-center items-center mb-2"> {/* 마진 추가 */}
            <Icon className="h-10 w-10 text-slate-700" />
        </div>
        <h3 className="text-lg font-bold text-slate-700">{title}</h3>
        <p className="text-sm text-gray-600">{description}</p>
    </Link>
);


// --- 메인 페이지 컴포넌트 ---
export default function ServiceHubPage() {
    return (
        // Header/Footer 제거, main 태그 사용
        <main className='bg-white'>
            <Breadcrumbs />

            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
                {/* 페이지 제목 및 소개 */}
                <section className="mb-12 border-b border-gray-200 pb-8 space-y-3"> {/* 패딩/마진 조정 */}
                    <h1 className="text-4xl md:text-5xl font-extrabold text-gray-800 tracking-tight">
                        EHS 컨설팅 서비스
                    </h1>
                    <p className="text-lg text-gray-600">
                        고객의 특성과 요구에 맞춘 전문화된 EHS 솔루션을 통해 위험을 최소화하고 안전 문화를 구축하세요.
                    </p>
                </section>

                {/* 주요 서비스 타일 영역 */}
                <section className="space-y-8"> {/* section 태그 사용 */}
                    <h2 className="text-2xl font-bold text-slate-700">서비스 항목 선택</h2>
                    {/* 서비스 항목 수를 고려하여 grid-cols 조정 (8개 항목) */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {serviceItems.map((item, index) => (
                            <ServiceTile key={index} {...item} icon={item.icon} />
                        ))}
                    </div>
                </section>

                {/* 추가 CTA 블록 */}
                <section className="mt-16 p-8 text-center bg-slate-700 text-white rounded-lg"> {/* mt 조정, 라운드 추가 */}
                    <h2 className="text-2xl font-bold mb-2">무엇을 도와드릴까요?</h2> {/* h3 -> h2 */}
                    <p className="text-lg mb-4">어떤 컨설팅이 필요한지 잘 모르겠다면, 전문가에게 문의하세요.</p>
                    <Link
                        href="/contact"
                        className="inline-block px-8 py-3 text-lg font-bold bg-white text-slate-700 rounded hover:bg-gray-100 transition duration-150 ease-in-out" // 색상 변경, 라운드 추가
                    >
                        전문가 상담 바로가기
                    </Link>
                </section>
            </div>
        </main>
    );
}