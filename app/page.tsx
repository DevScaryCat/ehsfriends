// app/page.tsx
import { Briefcase, ChevronRight, TrendingUp, Users } from 'lucide-react';
import { Header, Footer } from './components/CommonLayout';
import Link from 'next/link';
// 애니메이션 통계 컴포넌트를 임포트합니다.
import { AnimatedStats } from './components/AnimatedStatsOverlay';

// --- 타입 정의 및 데이터 Fetching (이전과 동일) ---
interface Notice {
  id: number;
  documentId: string;
  title: string;
}

async function getRecentNoticesByCategory(category: '공지' | '자료실', limit: number = 4) {
  const url = `${process.env.NEXT_PUBLIC_STRAPI_API_URL}/api/notices?filters[category][$eq]=${category}&sort=date:desc&pagination[pageSize]=${limit}&pagination[page]=1`;
  try {
    const res = await fetch(url, { next: { revalidate: 300 } });
    if (!res.ok) {
      console.error(`Failed to fetch ${category}:`, res.statusText);
      return [];
    }
    const json = await res.json();
    return json.data as Notice[];
  } catch (error) {
    console.error(`Error fetching ${category}:`, error);
    return [];
  }
}


// --- HeroSection 컴포넌트 수정 ---
const HeroSection = () => {
  const videoUrl = "https://res.cloudinary.com/doyzaetry/video/upload/v1760662732/ehs_rj460p.mp4";

  return (
    <div>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-16 flex flex-col md:flex-row items-center">
        <div className="w-full md:w-2/3 md:pr-10 mb-8 md:mb-0">
          <div className="relative h-64 md:h-96 w-full overflow-hidden bg-black">
            <video
              src={videoUrl}
              autoPlay
              muted
              loop
              playsInline
              className="absolute top-0 left-0 w-full h-full object-cover"
            >
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
        {/* 통계 박스 영역 */}
        <AnimatedStats />
      </div>
    </div>
  );
};


// --- 나머지 컴포넌트들 (이전과 동일) ---
const ConsultingItem = ({ title, description, href, imageUrl }: { title: string; description: string; href: string; imageUrl: string }) => {
  return (
    <a
      href={href}
      className={`relative h-48 block group overflow-hidden border border-gray-300 shadow-sm hover:shadow-xl transition duration-300 ease-in-out`}
      style={{ backgroundImage: `url(${imageUrl})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
    >
      <div className="absolute inset-0 bg-black opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-40"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent flex flex-col justify-end p-4 text-white transition-opacity duration-300 ease-in-out pointer-events-none">
        <h3 className="text-lg font-bold mb-1 transition-opacity duration-300 ease-in-out group-hover:opacity-0">{title}</h3>
      </div>
      <div className={`absolute inset-0 bg-black bg-opacity-20 flex flex-col items-center justify-center p-4 text-white opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100`}>
        <h3 className="text-xl font-bold mb-2 text-center">{title}</h3>
        <p className="text-sm text-center mb-4 font-light line-clamp-3">{description}</p>
        <div className="flex items-center text-white border border-white py-2 px-4 text-sm font-semibold hover:bg-white hover:text-blue-800 transition">
          상세 보기 <ChevronRight className="w-4 h-4 ml-1" />
        </div>
      </div>
    </a>
  );
};

const ContentBlock = ({ title, children, moreLink }: { title: string; children: React.ReactNode; moreLink: string }) => (
  <div className="border border-gray-300 p-6 shadow-sm">
    <h2 className={`text-xl font-bold border-b-2 border-slate-700/50 pb-2 mb-4 text-slate-700`}>
      {title}
      <Link href={moreLink} className={`float-right text-sm font-normal text-gray-500 hover:text-slate-700`}>+ 더보기</Link>
    </h2>
    {children}
  </div>
);


// --- 메인 페이지 컴포넌트 (변경 없음) ---
export default async function EHSPage() {
  const consultingServices = [
    { title: "EHS 컨설팅", desc: "전반적인 EHS 시스템 구축 및 운영 자문", href: "/service/ehs", imageUrl: "https://picsum.photos/id/20/400/300" },
    { title: "근골격계부담작업 유해요인조사", desc: "근골격계 질환 예방을 위한 유해요인 정밀 조사 및 개선", href: "/service/msds", imageUrl: "https://picsum.photos/id/21/400/300" },
    { title: "화학물질관리 컨설팅", desc: "화평법, 화관법 준수를 위한 전문적인 대응 및 교육", href: "/service/chemical", imageUrl: "https://picsum.photos/id/22/400/300" },
    { title: "보건관리 위탁대행", desc: "사업장 보건관리자 업무 아웃소싱 및 전문 인력 지원", href: "/service/health-mgmt", imageUrl: "https://picsum.photos/id/23/400/300" },
    { title: "위험성평가 컨설팅", desc: "사업장 위험요소 도출 및 저감 대책 수립", href: "/service/risk-assessment", imageUrl: "https://picsum.photos/id/24/400/300" },
    { title: "작업환경개선 컨설팅", desc: "쾌적하고 안전한 작업 환경 조성을 위한 종합 개선 방안", href: "/service/work-env", imageUrl: "https://picsum.photos/id/25/400/300" },
    { title: "공공기관 안전보건 컨설팅", desc: "공공 부문의 특화된 안전보건 관리 시스템 구축 지원", href: "/service/public", imageUrl: "https://picsum.photos/id/26/400/300" },
    { title: "산업보건지도사 컨설팅", desc: "산업보건지도사 자격 기준의 전문 지도 및 컨설팅", href: "/service/health-pro", imageUrl: "https://picsum.photos/id/27/400/300" },
  ];

  const [notices, resources] = await Promise.all([
    getRecentNoticesByCategory('공지', 4),
    getRecentNoticesByCategory('자료실', 4),
  ]);

  return (
    <div className="font-sans bg-white min-h-screen">
      <Header />
      <main>
        <HeroSection />

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-12">
          <div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5">
              {consultingServices.map((service, index) => (
                <ConsultingItem key={index} {...service} />
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4">
            <ContentBlock title="공지사항" moreLink="/notice?category=공지">
              <ul className="space-y-2 text-sm text-gray-700">
                {notices.length > 0 ? (
                  notices.map((notice) => (
                    <li key={notice.id}>
                      <Link href={`/notice/${notice.documentId}`} className={`hover:text-slate-700 block truncate py-1`}>
                        {notice.title}
                      </Link>
                    </li>
                  ))
                ) : (
                  <li className="text-gray-500 py-1">최신 공지사항이 없습니다.</li>
                )}
              </ul>
            </ContentBlock>

            <ContentBlock title="자료실" moreLink="/notice?category=자료실">
              <ul className="space-y-2 text-sm text-gray-700">
                {resources.length > 0 ? (
                  resources.map((resource) => (
                    <li key={resource.id}>
                      <Link href={`/notice/${resource.documentId}`} className={`hover:text-slate-700 block truncate py-1`}>
                        {resource.title}
                      </Link>
                    </li>
                  ))
                ) : (
                  <li className="text-gray-500 py-1">최신 자료가 없습니다.</li>
                )}
              </ul>
            </ContentBlock>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}