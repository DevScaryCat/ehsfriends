// app/about/page.tsx
import { ChevronRight, Home } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from 'next'; // Metadata 타입 임포트

// --- 컴포넌트 정의 ---

const Breadcrumbs = () => {
    return (
        <nav className="max-w-6xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-3 text-sm text-gray-500 border-b border-gray-200 bg-white">
            <ol className="flex items-center space-x-2">
                <li><Link href="/" className="hover:text-blue-700"><Home className="w-4 h-4 inline-block text-gray-400" /></Link></li>
                <ChevronRight className="w-4 h-4" />
                <li className="text-slate-700 font-bold">회사 소개</li>
            </ol>
        </nav>
    );
};

const ImageTextBlock = ({
    title,
    content,
    imageSrc,
    imageAlt,
    imageLeft = true
}: {
    title: string;
    content: React.ReactNode;
    imageSrc: string;
    imageAlt: string;
    imageLeft?: boolean
}) => {
    const layoutClasses = imageLeft ? "flex-col md:flex-row" : "flex-col md:flex-row-reverse";
    return (
        <section className={`flex ${layoutClasses} gap-8 items-start md:items-center py-6 md:py-10 border-b border-gray-100 last:border-b-0`}>
            <div className="w-full md:w-1/3">
                <Image
                    src={imageSrc}
                    alt={imageAlt}
                    width={600}
                    height={400} // 이미지 비율에 맞게 조정
                    className="w-full h-auto object-cover border border-gray-200 rounded shadow-sm" // 스타일 추가
                />
            </div>
            <div className="w-full md:w-2/3 space-y-4">
                <h2 className="text-2xl font-bold text-gray-800">{title}</h2> {/* h3 -> h2로 변경 */}
                {content}
            </div>
        </section>
    );
};

// --- 페이지 Metadata ---
export const metadata: Metadata = {
    title: "회사 소개", // 페이지 제목
    description: "EHS Friends의 사명, 전문성, 리더십을 소개합니다. 고객 가치 중심의 EHS 컨설팅 서비스를 제공하는 믿음직한 파트너입니다.", // 페이지 설명
    alternates: {
        canonical: '/about', // 표준 URL
    },
};

// --- 메인 페이지 컴포넌트 ---
export default function AboutPage() {
    // 섹션별 내용 정의
    const missionContent = (
        <div className="space-y-4 text-gray-700 leading-relaxed">
            <p>
                우리는 고객의 요구사항을 정확히 파악하고, 우리의 서비스가 그들에게 가치가 있어야 함을 사명으로 여기고 있습니다. 그 가치는 **사업주, 환경 그리고 무엇보다 근로자**에게 좋은 것이어야 합니다.
            </p>
            <ul className="list-disc list-inside space-y-1 pl-4">
                <li>숙련된 전문가들과 다양한 전문가 네트워크를 활용하여 고객 위험 진단 및 관리 솔루션을 제공합니다.</li>
                <li>임직원 모두는 고객의 목소리에 항상 귀 기울여 듬직한 친구 같은 기업이 되도록 최선을 다합니다.</li>
            </ul>
        </div>
    );
    const expertiseContent = (
        <div className="space-y-4 text-gray-700 leading-relaxed">
            <p>
                EHS프렌즈는 2013년 창사 이래 포괄적인 EHS 컨설팅 서비스를 제공하는 기업으로 성장했습니다. 복잡하고 다양한 프로젝트들을 수행하며, 학회 등 전문가와의 지속적인 교류를 통해 최신 검증된 EHS 관리 전략을 적용하고 있습니다.
            </p>
            <ul className="list-disc list-inside space-y-1 pl-4">
                <li>**보유 인력:** 환경보건, 산업안전, 산업위생, 인간공학, 간호, 의학, 환경공학 등 다양한 분야의 전문가로 구성.</li>
                <li>**핵심 업무 분야:** EHS 컨설팅, 작업환경개선, 보건관리대행, 근골격계 유해요인조사, 유해위험방지계획서 작성.</li>
            </ul>
        </div>
    );
    const leadershipContent = (
        <div className="space-y-4 text-gray-700 leading-relaxed">
            <h3 className="text-xl font-bold text-slate-700">㈜EHS프렌즈 대표이사</h3> {/* h4 -> h3 */}
            <ul className="list-disc list-inside space-y-1 pl-4">
                <li>한국산업보건학회 재무이사</li>
                <li>산업위생기술사, 산업보건지도사 자격 보유</li>
            </ul>
            <p className="pt-2">
                창사 이래 포괄적인 EHS 컨설팅 서비스를 제공하는 기업으로 발전하기 위해 끊임없이 노력하고 있습니다. 고객의 규모, 산업 및 리스크 특성에 맞는 최적의 솔루션을 제공하는 것을 사명으로 합니다.
            </p>
        </div>
    );

    return (
        // Header/Footer 제거, main 태그 사용
        <main>
            <Breadcrumbs />
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
                {/* 상단 소개 및 CTA */}
                <section className="mb-16 flex flex-col md:flex-row gap-8"> {/* mb-10 -> mb-16 */}
                    <div className="w-full md:w-3/4 space-y-6">
                        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-800 tracking-tight mb-4">
                            EHS Friends, 우리는 누구인가?
                        </h1>
                        <p className="text-lg text-gray-700 font-semibold leading-relaxed">
                            포괄적인 EHS 컨설팅 서비스를 제공하는, 귀사의 가장 믿음직한 파트너입니다.
                        </p>
                        <ul className="list-disc list-inside space-y-1 pl-4 text-gray-700">
                            <li>**최신 전략:** 학회 및 전문가 교류를 통해 최신화되고 검증된 관리 전략을 적용합니다.</li>
                            <li>**맞춤형 솔루션:** 고객의 규모, 산업 및 리스크 특성에 맞는 최적의 솔루션을 제공합니다.</li>
                        </ul>
                    </div>
                    <aside className="w-full md:w-1/4 mt-2 md:mt-0"> {/* aside 태그 사용 */}
                        <div className="p-4 border border-gray-300 bg-gray-50 shadow-md rounded"> {/* 스타일 추가 */}
                            <h2 className="text-xl font-bold mb-3 text-slate-700">상담 문의</h2> {/* h3 -> h2 */}
                            <p className="text-sm text-gray-600 mb-4">
                                EHS 전문가와 지금 바로 상담을 시작하세요.
                            </p>
                            <Link href="/contact" className="w-full block text-center py-2 bg-slate-700 text-white font-semibold rounded hover:bg-slate-800 transition">
                                상담 요청하기
                            </Link>
                        </div>
                    </aside>
                </section>

                {/* 하단 상세 내용 */}
                <div className="space-y-12"> {/* space-y-10 -> space-y-12 */}
                    <ImageTextBlock
                        title="우리의 사명: 가치 중심의 서비스"
                        content={missionContent}
                        imageSrc="/about1.jpeg"
                        imageAlt="전문가가 고객과 상담하는 이미지"
                        imageLeft={true}
                    />
                    <ImageTextBlock
                        title="숙련된 인력과 협력 네트워크"
                        content={expertiseContent}
                        imageSrc="/about2.jpeg"
                        imageAlt="연구 및 교육 이미지"
                        imageLeft={false}
                    />
                    <ImageTextBlock
                        title="리더십과 신뢰"
                        content={leadershipContent}
                        imageSrc="/about3.jpeg"
                        imageAlt="경영진 이미지"
                        imageLeft={true}
                    />
                </div>
            </div>
        </main>
    );
}