// app/consulting/ehs/page.tsx
"use client"; // useState 훅을 사용하므로 클라이언트 컴포넌트로 유지
import { useState } from 'react';
import { ChevronRight, Home, CheckCircle, Lightbulb, UserCheck, Star, Trophy } from 'lucide-react';
import Link from 'next/link'; // Link 컴포넌트 임포트
import Image from 'next/image'; // Image 컴포넌트 임포트
// Metadata import 제거 (클라이언트 컴포넌트에서는 generateMetadata 사용 불가)

// --- 컴포넌트 정의 ---

const PageHero = () => {
    return (
        // 섹션 명확화 및 배경 이미지 alt 추가
        <section aria-label="페이지 상단 배너" className="relative w-full h-64 md:h-80 bg-gray-400">
            <Image
                src="https://picsum.photos/id/23/1600/500" // 배경 이미지 URL
                alt="EHS 컨설팅 서비스 배너 이미지"
                fill // 부모 요소 채우기
                style={{ objectFit: 'cover' }} // object-cover
                priority // LCP 요소일 수 있으므로 우선 로드
            />
            <div className="absolute inset-0 bg-black opacity-30"></div>
            {/* 필요시 배너 위에 텍스트 추가 가능 */}
        </section>
    );
};

const Breadcrumbs = () => {
    return (
        <nav aria-label="Breadcrumb" className="max-w-6xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-3 text-sm text-gray-500 border-b border-gray-200 bg-white">
            <ol className="flex items-center space-x-2">
                <li><Link href="/" className="hover:text-blue-700"><Home className="w-4 h-4 inline-block text-gray-400" /></Link></li>
                <li><ChevronRight className="w-4 h-4" /></li>
                {/* 서비스 페이지 링크 추가 */}
                <li><Link href="/service" className="hover:text-blue-700 font-semibold">업무 안내</Link></li>
                <li><ChevronRight className="w-4 h-4" /></li>
                <li className="text-slate-700 font-bold" aria-current="page">EHS 컨설팅</li>
            </ol>
        </nav>
    );
};

// 탭 콘텐츠를 렌더링하는 함수 (가독성 향상)
const TabContent = ({ activeTab }: { activeTab: string }) => {
    switch (activeTab) {
        case "서비스 개요":
            return <ServiceOverview />;
        case "영향 및 효과":
            return <ImpactAndBenefits />;
        case "주요 성공 사례":
            return <SuccessStories />;
        case "전문가 소개":
            return <ExpertIntroduction />;
        default:
            return null;
    }
};

// 각 탭별 콘텐츠 컴포넌트 분리
const ServiceOverview = () => (
    <section id="service-overview" aria-labelledby="service-overview-heading" className="space-y-6">
        <h2 id="service-overview-heading" className="text-2xl font-bold text-gray-800 border-b border-gray-200 pb-2">왜 우리의 EHS 컨설팅을 선택해야 하는가?</h2>
        <p className="text-gray-700 leading-relaxed">
            글로벌 기관과 기업들은 국제적인 **환경, 보건, 안전 (EHS)** 표준을 준수하는 데 있어 복잡성이 증가하는 현실에 직면하고 있습니다. 저희 컨설팅 서비스는 깊이 있는 규제 지식과 산업별 전문성을 활용하여, 완벽한 준수와 위험 최소화를 보장하는 전략적 로드맵을 제공합니다. 우리는 기초부터 견고하고 지속 가능한 안전 문화를 구축하는 데 중점을 둡니다.
        </p>
        <h3 className="text-xl font-bold text-slate-700 pt-4">핵심 프로그램 모듈</h3>
        <ul className="list-disc list-inside space-y-2 pl-4 text-gray-700">
            <li>**통합 관리 시스템:** ISO 14001, ISO 45001 구현 및 인증 지원.</li>
            <li>**법규 준수:** 국내외 의무 사항(예: K-REACH, OSHA)에 대한 종합 감사 및 격차 분석.</li>
            <li>**위험 평가:** 화학 물질 안전 프로토콜 및 고위험 작업에 대한 상세 위험 평가.</li>
            <li>**산업 보건:** 직원 건강 증진 프로그램 및 산업 위생 모니터링 서비스.</li>
        </ul>
    </section>
);

const ImpactAndBenefits = () => (
    <section id="impact-benefits" aria-labelledby="impact-benefits-heading" className="space-y-6">
        <h2 id="impact-benefits-heading" className="text-2xl font-bold text-gray-800 border-b border-gray-200 pb-2 flex items-center">
            <Lightbulb className="w-6 h-6 mr-2 text-slate-700" /> EHS 컨설팅의 핵심 영향 및 기대 효과
        </h2>
        <p className="text-gray-700 leading-relaxed">
            저희 EHS 컨설팅은 단순히 규제 준수를 넘어, 기업의 지속 가능한 성장과 경쟁력 강화에 기여하는 실질적인 가치를 제공합니다. 체계적인 접근 방식을 통해 다음과 같은 긍정적인 변화를 기대할 수 있습니다.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4">
            <article className="space-y-4"> {/* article 태그 사용 */}
                <h3 className="text-xl font-bold text-slate-700 flex items-center">
                    <CheckCircle className="w-5 h-5 mr-2 text-green-600" /> 법규 준수 및 위험 감소
                </h3>
                <ul className="list-disc list-inside space-y-2 pl-4 text-gray-700">
                    <li>**법적 리스크 최소화:** 최신 국내외 EHS 법규에 완벽히 부합하는 체계 구축.</li>
                    <li>**사고율 감소:** 잠재적 위험 요소를 사전에 식별하고 효과적인 예방 대책 수립.</li>
                    <li>**보험료 절감:** 안전한 사업장 환경 조성을 통한 산재 보험료 인하 효과.</li>
                </ul>
            </article>
            <article className="space-y-4">
                <h3 className="text-xl font-bold text-slate-700 flex items-center">
                    <Trophy className="w-5 h-5 mr-2 text-yellow-600" /> 운영 효율성 및 기업 가치 향상
                </h3>
                <ul className="list-disc list-inside space-y-2 pl-4 text-gray-700">
                    <li>**생산성 증대:** 안전하고 쾌적한 작업 환경 조성으로 직원 만족도 및 업무 효율 향상.</li>
                    <li>**기업 이미지 제고:** ESG 경영 강화 및 사회적 책임 이행을 통한 브랜드 가치 상승.</li>
                    <li>**비용 절감:** 폐기물 감소, 에너지 효율 개선 등을 통한 운영 비용 최적화.</li>
                </ul>
            </article>
        </div>
        {/* ... (하단 CTA 블록은 유지) ... */}
    </section>
);

const SuccessStories = () => (
    <section id="success-stories" aria-labelledby="success-stories-heading" className="space-y-8">
        <h2 id="success-stories-heading" className="text-2xl font-bold text-gray-800 border-b border-gray-200 pb-2 flex items-center">
            <Star className="w-6 h-6 mr-2 text-slate-700" /> 주요 성공 사례 및 고객 평가
        </h2>
        <p className="text-gray-700 leading-relaxed">
            EHS 프렌즈는 다양한 산업 분야에서 성공적인 컨설팅 프로젝트를 수행하며 고객사의 EHS 역량 강화에 기여해왔습니다. 다음은 주요 성공 사례들입니다.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <article className="border border-gray-200 p-6 space-y-4 bg-white shadow-sm rounded-lg"> {/* 스타일 추가 */}
                <Image src="https://picsum.photos/id/400/300/200" alt="대규모 제조업체 통합 EHS 시스템 구축 성공 사례" width={300} height={200} className="w-full h-40 object-cover mb-4 rounded" />
                <h3 className="text-xl font-bold text-slate-700">대규모 제조업체: 통합 EHS 시스템 구축</h3>
                <p className="text-gray-700 text-sm">기존 분산된 환경/안전/보건 관리 시스템을 ISO 14001 및 ISO 45001 기반의 통합 시스템으로 전환 지원. **결과: 6개월 내 인증 획득, 1년 내 중대재해율 30% 감소.**</p>
                <Link href="#" className="text-slate-700 hover:underline text-sm font-semibold flex items-center">사례 상세 보기 <ChevronRight className="w-4 h-4 ml-1" /></Link>
            </article>
            <article className="border border-gray-200 p-6 space-y-4 bg-white shadow-sm rounded-lg">
                <Image src="https://picsum.photos/id/401/300/200" alt="IT 기업 사무 환경 근골격계 질환 예방 성공 사례" width={300} height={200} className="w-full h-40 object-cover mb-4 rounded" />
                <h3 className="text-xl font-bold text-slate-700">IT 기업: 사무 환경 근골격계 질환 예방</h3>
                <p className="text-gray-700 text-sm">장시간 컴퓨터 사용 직원의 근골격계 부담작업 유해요인 조사 및 인체공학적 사무 환경 개선 컨설팅. **결과: 관련 질환 발생률 20% 감소, 직원 만족도 대폭 향상.**</p>
                <Link href="#" className="text-slate-700 hover:underline text-sm font-semibold flex items-center">사례 상세 보기 <ChevronRight className="w-4 h-4 ml-1" /></Link>
            </article>
        </div>
        {/* ... (하단 CTA 블록은 유지) ... */}
    </section>
);

const ExpertIntroduction = () => (
    <section id="expert-introduction" aria-labelledby="expert-introduction-heading" className="space-y-8">
        <h2 id="expert-introduction-heading" className="text-2xl font-bold text-gray-800 border-b border-gray-200 pb-2 flex items-center">
            <UserCheck className="w-6 h-6 mr-2 text-slate-700" /> EHS 프렌즈 전문 컨설턴트 팀
        </h2>
        <p className="text-gray-700 leading-relaxed">
            저희 EHS 프렌즈는 각 분야 최고의 전문가들로 구성된 팀이 고객사의 복잡한 EHS 과제를 해결합니다. 깊이 있는 지식과 풍부한 현장 경험을 바탕으로 최적의 솔루션을 제공합니다.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <article className="border border-gray-200 p-6 text-center bg-white shadow-sm rounded-lg space-y-3">
                <Image src="https://picsum.photos/id/1005/150/150" alt="김철수 팀장 프로필 사진" width={150} height={150} className="w-24 h-24 rounded-full mx-auto object-cover border-2 border-gray-100" />
                <h3 className="text-xl font-bold text-slate-700">김철수 팀장</h3>
                <p className="text-sm text-gray-600 font-semibold">산업위생기술사, 산업보건지도사</p>
                <p className="text-gray-700 text-sm">20년 경력의 산업위생 전문가로, 작업 환경 개선 및 유해요인 평가 분야를 총괄합니다.</p>
                <Link href="#" className="text-slate-700 hover:underline text-sm font-semibold">자세히 보기</Link>
            </article>
            <article className="border border-gray-200 p-6 text-center bg-white shadow-sm rounded-lg space-y-3">
                <Image src="https://picsum.photos/id/1011/150/150" alt="이영희 수석 컨설턴트 프로필 사진" width={150} height={150} className="w-24 h-24 rounded-full mx-auto object-cover border-2 border-gray-100" />
                <h3 className="text-xl font-bold text-slate-700">이영희 수석 컨설턴트</h3>
                <p className="text-sm text-gray-600 font-semibold">ISO 14001/45001 선임심사원</p>
                <p className="text-gray-700 text-sm">환경 및 안전 경영 시스템 구축 및 인증 전문. 다수의 기업의 성공적인 인증을 이끌었습니다.</p>
                <Link href="#" className="text-slate-700 hover:underline text-sm font-semibold">자세히 보기</Link>
            </article>
            <article className="border border-gray-200 p-6 text-center bg-white shadow-sm rounded-lg space-y-3">
                <Image src="https://picsum.photos/id/1025/150/150" alt="박준영 컨설턴트 프로필 사진" width={150} height={150} className="w-24 h-24 rounded-full mx-auto object-cover border-2 border-gray-100" />
                <h3 className="text-xl font-bold text-slate-700">박준영 컨설턴트</h3>
                <p className="text-sm text-gray-600 font-semibold">화학물질관리 전문</p>
                <p className="text-gray-700 text-sm">화학물질 관련 법규 준수 및 유해성 평가에 특화된 젊은 인재입니다.</p>
                <Link href="#" className="text-slate-700 hover:underline text-sm font-semibold">자세히 보기</Link>
            </article>
        </div>
        {/* ... (하단 CTA 블록은 유지) ... */}
    </section>
);


// --- 메인 페이지 컴포넌트 ---
export default function EHSConsultingPage() {
    const [activeTab, setActiveTab] = useState("서비스 개요");
    const tabs = ["서비스 개요", "영향 및 효과", "주요 성공 사례", "전문가 소개"]; // 탭 ID 단순화

    return (
        // Header/Footer 제거, main 태그 사용
        <main className='bg-white'>
            <PageHero />
            <Breadcrumbs />

            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
                {/* 페이지 소개 섹션 */}
                <section aria-labelledby="page-title" className="pb-8 mb-8 border-b border-gray-200"> {/* 마진 추가 */}
                    <h1 id="page-title" className="text-3xl md:text-4xl font-extrabold text-gray-800 tracking-tight">통합 EHS 관리 시스템</h1>
                    <p className="mt-2 text-lg text-gray-600">법규 준수와 지속 가능한 성장을 위한 맞춤형 접근 방식.</p>
                </section>

                {/* 탭 네비게이션 */}
                <div className="border-b border-gray-300 mb-8 sticky top-[81px] bg-white z-10"> {/* 스티키 헤더 높이 고려 */}
                    <nav className="flex whitespace-nowrap space-x-6 md:space-x-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 overflow-x-auto -mb-px"> {/* 네거티브 마진으로 경계선 맞춤 */}
                        {tabs.map((tabTitle) => (
                            <button
                                key={tabTitle}
                                onClick={() => setActiveTab(tabTitle)}
                                className={`py-3 px-1 md:px-0 text-base font-semibold transition duration-200 ease-in-out whitespace-nowrap ${activeTab === tabTitle
                                    ? `text-slate-700 border-b-4 border-slate-700`
                                    : 'text-gray-500 hover:text-gray-700 border-b-4 border-transparent hover:border-gray-400'
                                    }`}
                                role="tab"
                                aria-selected={activeTab === tabTitle}
                                aria-controls={`tab-content-${tabTitle.replace(/\s+/g, '-')}`} // 접근성 속성 추가
                            >
                                {tabTitle}
                            </button>
                        ))}
                    </nav>
                </div>

                {/* 탭 콘텐츠 */}
                <div className="w-full space-y-10 pt-4" role="tabpanel" id={`tab-content-${activeTab.replace(/\s+/g, '-')}`}>
                    <TabContent activeTab={activeTab} />
                </div>

                {/* ... (하단 공통 CTA 및 추가 정보 블록은 이전 코드 유지 가능) ... */}
                {/* 하단 공통 CTA 블록 */}
                <hr className="border-gray-200 mt-12 mb-8" />
                <aside className="bg-gray-50 p-6 border border-gray-200 text-center space-y-4 rounded-lg"> {/* aside 태그, 스타일 추가 */}
                    <h2 className="text-2xl font-bold text-gray-800">귀사의 안전 표준을 높일 준비가 되셨나요?</h2>
                    <p className="text-lg text-gray-600">
                        인증된 EHS 전문가에게 기밀 상담을 요청하십시오.
                    </p>
                    <Link href="/contact" className="inline-block px-6 py-3 bg-white border-2 border-slate-700 text-slate-700 font-semibold rounded hover:bg-slate-700 hover:text-white transition">
                        상담 요청
                    </Link>
                </aside>

                <hr className="border-gray-200 mt-8 mb-4" />

                {/* 추가 정보 블록 */}
                <section aria-labelledby="additional-info-heading" className="space-y-4 text-sm text-gray-700">
                    <h2 id="additional-info-heading" className="text-xl font-bold text-gray-800">추가 자료 및 고지 사항</h2>
                    <p className="italic">
                        제공되는 모든 자료는 최신 규제 업데이트 및 국제 모범 사례를 반영합니다. 고객 기밀은 최우선으로 보장됩니다.
                    </p>
                    <ul className="list-disc list-inside space-y-1 pl-4">
                        <li><strong className="text-slate-700">프로그램 기간:</strong> 감사는 일반적으로 4-6주 내에 완료되며, 전체 시스템 구현은 3-6개월이 소요됩니다.</li>
                        <li><strong className="text-slate-700">환불 정책:</strong> 계약 체결 후 7일 이내 해지 시, 행정 수수료를 제외한 전액 환불이 가능합니다. (상세 내용은 계약서 참조)</li>
                    </ul>
                </section>
            </div>
        </main>
    );
}