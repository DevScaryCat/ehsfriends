// app/page.tsx
import { Header, Footer } from './components/CommonLayout';
import Link from 'next/link';
import { HeroSection } from './components/HeroSection';
import { BusinessInfoSection } from './components/BusinessInfoSection';

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

// --- 공지/자료실 블록 컴포넌트 (이전과 동일) ---
const ContentBlock = ({ title, children, moreLink }: { title: string; children: React.ReactNode; moreLink: string }) => (
  <div className="border border-gray-300 p-6 shadow-sm">
    <h2 className={`text-xl font-bold border-b-2 border-slate-700/50 pb-2 mb-4 text-slate-700`}>
      {title}
      <Link href={moreLink} className={`float-right text-sm font-normal text-gray-500 hover:text-slate-700`}>+ 더보기</Link>
    </h2>
    {children}
  </div>
);


// --- 메인 페이지 컴포넌트 ---
export default async function EHSPage() {
  const [notices, resources] = await Promise.all([
    getRecentNoticesByCategory('공지', 4),
    getRecentNoticesByCategory('자료실', 4),
  ]);

  return (
    <div className="font-sans bg-white min-h-screen">
      <Header />
      <main>
        <HeroSection />

        {/* '사업안내' 섹션을 추가합니다. */}
        <BusinessInfoSection />

        {/* 공지사항/자료실 섹션의 상단 패딩을 조정합니다. */}
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4"> {/* py-16 대신 py-10 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
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