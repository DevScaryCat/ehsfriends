// app/service/page.tsx
import { ChevronRight, Home, Layout, Zap, Users, Shield, Factory, FlaskConical, Stethoscope } from 'lucide-react';
import { Header, Footer, PRIMARY_COLOR } from '../components/CommonLayout';

// 서비스 목록 (Header의 드롭다운 메뉴와 일치)
const serviceItems = [
    { title: "EHS컨설팅", href: "/service/ehs", icon: Layout, color: "blue-500", description: "통합 환경, 보건, 안전 시스템 구축" },
    { title: "화학물질관리 컨설팅", href: "/service/chemical", icon: FlaskConical, color: "green-500", description: "화평법, 화관법 등 화학물질 규제 대응" },
    { title: "근골격계 유해요인조사", href: "/service/msds", icon: Stethoscope, color: "red-500", description: "근골격계 질환 예방 및 환경 개선" },
    { title: "보건관리위탁", href: "/service/health-mgmt", icon: Users, color: "yellow-500", description: "보건 관리 업무 전문 아웃소싱" },
    { title: "위험성평가", href: "/service/risk-assessment", icon: Zap, color: "indigo-500", description: "사업장 위험 요소를 진단하고 평가" },
    { title: "작업환경개선 컨설팅", href: "/service/work-env", icon: Factory, color: "teal-500", description: "쾌적하고 안전한 작업 환경 조성" },
    { title: "산업보건지도사 컨설팅", href: "/service/health-pro", icon: Shield, color: "purple-500", description: "자격 기준에 따른 전문 지도 제공" },
];


/**
 * @component Breadcrumbs: 서브 페이지 경로 표시
 */
const Breadcrumbs = () => {
    return (
        <nav className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-3 text-sm text-gray-500 border-b border-gray-200 bg-white">
            <ol className="flex items-center space-x-2">
                <li><a href="/" className="hover:text-blue-700"><Home className="w-4 h-4 inline-block text-gray-400" /></a></li>
                <ChevronRight className="w-4 h-4" />
                <li className={`text-${PRIMARY_COLOR} font-bold`}>서비스</li>
            </ol>
        </nav>
    );
};

/**
 * @component ServiceTile: HSS Vendor Management 스타일의 서비스 타일
 */
const ServiceTile = ({ title, href, icon: Icon, color, description }: typeof serviceItems[0] & { icon: React.ElementType }) => (
    <a
        href={href}
        className="block p-4 border border-gray-300 shadow-sm hover:shadow-lg transition duration-200 ease-in-out bg-white text-center space-y-3"
    >
        <div className="flex justify-center items-center">
            <Icon className={`h-8 w-8 text-${color}`} />
        </div>
        <h3 className={`text-lg font-bold text-${PRIMARY_COLOR}`}>{title}</h3>
        <p className="text-sm text-gray-600">{description}</p>
    </a>
);


// --- Main Page ---

/**
 * @page ServiceHubPage: 서비스 허브 페이지
 */
export default function ServiceHubPage() {
    return (
        <div className="font-sans bg-white min-h-screen">
            <Header />
            <Breadcrumbs />

            <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10">

                {/* 1. 페이지 제목 및 소개 (HSS 스타일) */}
                <div className="mb-10 border-b border-gray-200 pb-6 space-y-3">
                    <h1 className="text-4xl md:text-5xl font-extrabold text-gray-800 tracking-tight">
                        EHS 컨설팅 서비스
                    </h1>
                    <p className="text-lg text-gray-600">
                        고객의 특성과 요구에 맞춘 전문화된 EHS 솔루션을 통해 위험을 최소화하고 안전 문화를 구축하세요.
                    </p>
                </div>

                {/* 2. 주요 서비스 타일 영역 (HSS Vendor Management 스타일) */}
                <div className="space-y-8">
                    <h2 className={`text-2xl font-bold text-${PRIMARY_COLOR}`}>서비스 항목 선택</h2>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {serviceItems.map((item, index) => (
                            <ServiceTile key={index} {...item} icon={item.icon} />
                        ))}
                    </div>
                </div>

                {/* 3. 추가 CTA 블록 */}
                <section className={`mt-12 p-8 text-center bg-${PRIMARY_COLOR} text-white`}>
                    <h3 className="text-2xl font-bold mb-2">무엇을 도와드릴까요?</h3>
                    <p className="text-lg mb-4">어떤 컨설팅이 필요한지 잘 모르겠다면, 전문가에게 문의하세요.</p>
                    <a
                        href="/contact"
                        className="inline-block px-8 py-3 text-lg font-bold bg-white text-blue-800 hover:bg-gray-100 transition duration-150 ease-in-out"
                    >
                        전문가 상담 바로가기
                    </a>
                </section>

            </main>
            <Footer />
        </div>
    );
}