// app/page.tsx
import { Briefcase, Search, ChevronRight, TrendingUp, Users } from 'lucide-react';
import { Header, Footer, PRIMARY_COLOR, FOOTER_BG } from './components/CommonLayout';

/**
 * @component StatBox: Hero Section 오른쪽 통계 박스
 */
const StatBox = ({ count, label, icon: Icon }: { count: string; label: string; icon: React.ElementType }) => (
  <div className={`p-4 text-center bg-white shadow-md border-b-4 border-${PRIMARY_COLOR} flex items-center`}>
    <div className={`p-3 mr-4 bg-${PRIMARY_COLOR}/10 rounded-full`}>
      <Icon className={`h-6 w-6 text-${PRIMARY_COLOR}`} />
    </div>
    <div>
      <p className={`text-2xl text-left font-bold text-${PRIMARY_COLOR}`}>{count}</p>
      <p className="text-sm text-gray-600 font-semibold">{label}</p>
    </div>
  </div>
);


/**
 * @component HeroSection: 메인 비주얼 및 통계/실적 강조 영역 (반응형 적용)
 */
const HeroSection = () => {
  const stats = [
    { count: "5000+", label: "컨설팅 기업수", icon: Users },
    { count: "10년+", label: "운영 노하우", icon: Briefcase },
    { count: "1위", label: "서비스 만족도", icon: TrendingUp },
  ];

  return (
    <div className={`bg-gray-100 border-b border-gray-300`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-16 flex flex-col md:flex-row items-center">
        {/* 이미지/비주얼 영역 */}
        <div className="w-full md:w-2/3 md:pr-10 mb-8 md:mb-0">
          <div className="h-64 md:h-96 bg-gray-300 flex items-center justify-center text-xl text-gray-700 border border-gray-400">
            [슬라이드 쇼] EHS 분야별 주요 사진 및 메시지
          </div>
        </div>
        {/* 핵심 통계 박스 영역 */}
        <div className="w-full md:w-1/3 space-y-4">
          {stats.map((stat, index) => (
            <StatBox key={index} {...stat} />
          ))}
        </div>
      </div>
    </div>
  );
};


/**
 * @component ConsultingItem: 컨설팅 서비스 박스 (이미지 호버 효과)
 */
const ConsultingItem = ({ title, description, href, imageUrl }: { title: string; description: string; href: string; imageUrl: string }) => {
  return (
    <a
      href={href}
      className={`relative h-48 block group overflow-hidden border border-gray-300 shadow-sm hover:shadow-xl transition duration-300 ease-in-out`}
      style={{ backgroundImage: `url(${imageUrl})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
    >
      {/* 1. 이미지 어둡게 만드는 오버레이 */}
      <div className="absolute inset-0 bg-black opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-40"></div>

      {/* 2. 기본 상태: 하단 그라데이션과 타이틀만 표시 */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent flex flex-col justify-end p-4 text-white transition-opacity duration-300 ease-in-out pointer-events-none">
        <h3 className="text-lg font-bold mb-1 transition-opacity duration-300 ease-in-out group-hover:opacity-0">{title}</h3>
      </div>

      {/* 3. 호버 상태: 남색 오버레이 + 상세 정보 + 버튼 */}
      <div className={`absolute inset-0 bg-black bg-opacity-20 flex flex-col items-center justify-center p-4 text-white opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100`}>
        <h3 className="text-xl font-bold mb-2 text-center">{title}</h3>
        <p className="text-sm text-center mb-4 font-light line-clamp-3">{description}</p>
        <div
          className="flex items-center text-white border border-white py-2 px-4 text-sm font-semibold hover:bg-white hover:text-blue-800 transition"
        >
          상세 보기 <ChevronRight className="w-4 h-4 ml-1" />
        </div>
      </div>
    </a>
  );
};


/**
 * @component ContentBlock: 뉴스/공지사항/자료실 등 주요 정보 블록
 */
const ContentBlock = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <div className="border border-gray-300 p-6 shadow-sm">
    <h2 className={`text-xl font-bold border-b-2 border-${PRIMARY_COLOR}/50 pb-2 mb-4 text-${PRIMARY_COLOR}`}>
      {title}
      <a href="#" className={`float-right text-sm font-normal text-gray-500 hover:text-${PRIMARY_COLOR}`}>+ 더보기</a>
    </h2>
    {children}
  </div>
);

// --- Main Page ---

/**
 * @page HomePage: EHS 메인 페이지
 */
export default function EHSPage() {
  const consultingServices = [
    { title: "EHS 컨설팅", desc: "전반적인 EHS 시스템 구축 및 운영 자문", href: "/consulting/ehs", imageUrl: "https://picsum.photos/id/20/400/300" },
    { title: "근골격계부담작업 유해요인조사", desc: "근골격계 질환 예방을 위한 유해요인 정밀 조사 및 개선", href: "/consulting/msds", imageUrl: "https://picsum.photos/id/21/400/300" },
    { title: "화학물질관리 컨설팅", desc: "화평법, 화관법 준수를 위한 전문적인 대응 및 교육", href: "/consulting/chemical", imageUrl: "https://picsum.photos/id/22/400/300" },
    { title: "보건관리 위탁대행", desc: "사업장 보건관리자 업무 아웃소싱 및 전문 인력 지원", href: "/consulting/health-mgmt", imageUrl: "https://picsum.photos/id/23/400/300" },
    { title: "위험성평가 컨설팅", desc: "사업장 위험요소 도출 및 저감 대책 수립", href: "/consulting/risk-assessment", imageUrl: "https://picsum.photos/id/24/400/300" },
    { title: "작업환경개선 컨설팅", desc: "쾌적하고 안전한 작업 환경 조성을 위한 종합 개선 방안", href: "/consulting/work-env", imageUrl: "https://picsum.photos/id/25/400/300" },
    { title: "공공기관 안전보건 컨설팅", desc: "공공 부문의 특화된 안전보건 관리 시스템 구축 지원", href: "/consulting/public", imageUrl: "https://picsum.photos/id/26/400/300" },
    { title: "산업보건지도사 컨설팅", desc: "산업보건지도사 자격 기준의 전문 지도 및 컨설팅", href: "/consulting/health-pro", imageUrl: "https://picsum.photos/id/27/400/300" },
  ];

  return (
    <div className="font-sans bg-white min-h-screen">
      <Header /> {/* 컴포넌트 적용 */}
      <main>
        <HeroSection />

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-12">

          {/* EHS 컨설팅 메뉴 섹션 */}
          <div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5">
              {consultingServices.map((service, index) => (
                <ConsultingItem
                  key={index}
                  title={service.title}
                  description={service.desc}
                  href={service.href}
                  imageUrl={service.imageUrl}
                />
              ))}
            </div>
          </div>

          {/* 뉴스, 공지사항, 자료실 섹션 */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-4">
            <ContentBlock title="공지사항">
              <ul className="space-y-2 text-sm text-gray-700">
                <li><a href="/detail/1" className={`hover:text-${PRIMARY_COLOR} block truncate py-1`}>중요] 2025년 하반기 안전 점검 의무 사항 안내</a></li>
                <li><a href="/detail/2" className={`hover:text-${PRIMARY_COLOR} block truncate py-1`}>웹사이트 리뉴얼 관련 시스템 점검 일시 공지</a></li>
                <li><a href="/detail/3" className={`hover:text-${PRIMARY_COLOR} block truncate py-1`}>2026년 환경보건안전 전문가 포럼 개최</a></li>
                <li><a href="/detail/4" className={`hover:text-${PRIMARY_COLOR} block truncate py-1`}>자료실 개편에 따른 일부 서비스 일시 중단</a></li>
              </ul>
            </ContentBlock>

            <ContentBlock title="주요 뉴스">
              <ul className="space-y-2 text-sm text-gray-700">
                <li><a href="/detail/5" className={`hover:text-${PRIMARY_COLOR} block truncate py-1`}>정부, 산업재해 예방 위한 '고위험 사업장' 집중 관리</a></li>
                <li><a href="/detail/6" className="hover:text-gray-700 block truncate py-1">기후 변화 대응을 위한 기업의 환경 경영 전략</a></li>
                <li><a href="/detail/7" className="hover:text-gray-700 block truncate py-1">미세먼지 저감 기술, EHS 산업의 새로운 동력</a></li>
                <li><a href="/detail/8" className="hover:text-gray-700 block truncate py-1">직장인 정신 건강 증진을 위한 보건 프로그램</a></li>
              </ul>
            </ContentBlock>

            <ContentBlock title="자료실">
              <ul className="space-y-2 text-sm text-gray-700">
                <li><a href="/detail/9" className={`hover:text-${PRIMARY_COLOR} block truncate py-1`}>2025 EHS 법규 해설집 (PDF)</a></li>
                <li><a href="/detail/10" className={`hover:text-${PRIMARY_COLOR} block truncate py-1`}>안전보건 관리 매뉴얼 개정판</a></li>
                <li><a href="/detail/11" className={`hover:text-${PRIMARY_COLOR} block truncate py-1`}>주요 환경 분석 보고서 요약</a></li>
                <li><a href="/detail/12" className={`hover:text-${PRIMARY_COLOR} block truncate py-1`}>산업안전보건 기준에 관한 규칙</a></li>
              </ul>
            </ContentBlock>
          </div>

        </div>
      </main>
      <Footer /> {/* 컴포넌트 적용 */}
    </div>
  );
}