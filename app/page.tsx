// app/page.tsx
import Link from 'next/link';
// HeroSection을 다시 임포트합니다.
import { HeroSection } from './components/HeroSection';
import { BusinessInfoSection } from './components/BusinessInfoSection';
import type { Metadata } from 'next';

// --- 타입 정의 및 데이터 Fetching ---
interface Notice {
  id: number;
  documentId: string;
  title: string;
}

async function getRecentNoticesByCategory(category: '공지' | '자료실', limit: number = 4) {
  const url = `${process.env.NEXT_PUBLIC_STRAPI_API_URL}/api/notices?filters[category][$eq]=${category}&sort=date:desc&pagination[pageSize]=${limit}&pagination[page]=1&fields[0]=title&fields[1]=documentId`;
  try {
    const res = await fetch(url, { next: { revalidate: 300 } });
    if (!res.ok) {
      console.error(`Failed to fetch ${category} (${res.status}): ${res.statusText}`);
      return [];
    }
    const json = await res.json();
    return Array.isArray(json?.data) ? json.data as Notice[] : [];
  } catch (error) {
    console.error(`Error fetching ${category}:`, error instanceof Error ? error.message : String(error));
    return [];
  }
}

// --- 홈페이지 Metadata ---
export const metadata: Metadata = {
  title: "EHS Friends | 환경·보건·안전 전문 컨설팅 서비스",
  description: "기업 맞춤형 EHS 시스템 구축부터 화학물질 관리, 위험성 평가, 작업환경 개선, 안전 교육까지 원스톱 솔루션을 제공하는 EHS Friends입니다.",
  alternates: {
    canonical: '/',
  },
};

// --- 공지/자료실 블록 컴포넌트 ---
const ContentBlock = ({ title, children, moreLink }: { title: string; children: React.ReactNode; moreLink: string }) => (
  <div className="border border-gray-300 p-6 shadow-sm bg-white h-full flex flex-col">
    <h2 className="text-xl font-bold border-b-2 border-slate-700/50 pb-2 mb-4 text-slate-700 flex-shrink-0">
      {title}
      <Link href={moreLink} className="float-right text-sm font-normal text-gray-500 hover:text-slate-700">+ 더보기</Link>
    </h2>
    <div className="flex-1">
      {children}
    </div>
  </div>
);

// --- 메인 페이지 컴포넌트 ---
export default async function EHSPage() {
  const [notices, resources] = await Promise.all([
    getRecentNoticesByCategory('공지', 4),
    getRecentNoticesByCategory('자료실', 4),
  ]);

  return (
    // main 태그는 RootLayout의 자식으로 들어가므로 여기서 제거해도 괜찮습니다.
    // 필요하다면 유지해도 됩니다.
    <>
      {/* HeroSection 호출을 다시 추가합니다. */}
      <HeroSection />
      <BusinessInfoSection />
      <div className="bg-slate-50 py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <ContentBlock title="공지사항" moreLink="/notice?category=공지">
              {notices.length > 0 ? (
                <ul className="space-y-2 text-sm text-gray-700">
                  {notices.map((notice) => (
                    <li key={notice.id}>
                      <Link href={`/notice/${notice.documentId}`} className="hover:text-slate-700 block truncate py-1">
                        {notice.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="text-gray-500 py-1 text-sm">최신 공지사항이 없습니다.</p>
              )}
            </ContentBlock>
            <ContentBlock title="자료실" moreLink="/notice?category=자료실">
              {resources.length > 0 ? (
                <ul className="space-y-2 text-sm text-gray-700">
                  {resources.map((resource) => (
                    <li key={resource.id}>
                      <Link href={`/notice/${resource.documentId}`} className="hover:text-slate-700 block truncate py-1">
                        {resource.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="text-gray-500 py-1 text-sm">최신 자료가 없습니다.</p>
              )}
            </ContentBlock>
          </div>
        </div>
      </div>
    </>
  );
}