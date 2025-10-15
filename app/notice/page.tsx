// app/notice/page.tsx
import { ChevronRight, Home, Calendar, Filter } from 'lucide-react';
import { Header, Footer, PRIMARY_COLOR } from '../components/CommonLayout';

// 인터페이스에 documentId를 추가합니다.
interface Notice {
    id: number;
    documentId: string; // <<<<<<< 이 부분을 추가!
    title: string;
    category: string;
    summary: string;
    date: string;
}

async function getNotices() {
    const res = await fetch(`${process.env.NEXT_PUBLIC_STRAPI_API_URL}/api/notices?populate=*`);
    if (!res.ok) {
        throw new Error('Failed to fetch data');
    }
    const json = await res.json();
    return json.data as Notice[];
}

const Breadcrumbs = () => (
    <nav className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-3 text-sm text-gray-500 border-b border-gray-200 bg-white">
        <ol className="flex items-center space-x-2">
            <li><a href="/" className="hover:text-blue-700"><Home className="w-4 h-4 inline-block text-gray-400" /></a></li>
            <ChevronRight className="w-4 h-4" />
            <li className={`text-${PRIMARY_COLOR} font-bold`}>알림소식</li>
        </ol>
    </nav>
);

const NoticeItemCard = ({ notice }: { notice: Notice }) => (
    // href를 진짜 식별자인 notice.documentId로 변경합니다.
    <a
        href={`/notice/${notice.documentId}`} // <<<<<<< 이 부분을 수정!
        className="block p-4 sm:p-6 border-b border-gray-200 hover:bg-gray-50 transition"
    >
        <div className="flex items-center space-x-3 text-sm font-semibold">
            <span className={`text-${PRIMARY_COLOR} border border-${PRIMARY_COLOR}/50 px-2 py-0.5 rounded-full text-xs`}>
                {notice.category || '미분류'}
            </span>
            <span className="flex items-center text-gray-500">
                <Calendar className="w-4 h-4 mr-1" />
                {notice.date}
            </span>
        </div>
        <h3 className="text-xl font-bold text-gray-800 group-hover:text-blue-700">{notice.title}</h3>
        <p className="text-gray-600 text-base line-clamp-2">{notice.summary}</p>
    </a>
);

const Pagination = () => (
    <div className="flex justify-center mt-10 space-x-1">
        <button className="px-3 py-1 text-gray-500 border border-gray-300 rounded hover:bg-gray-100">&lt; 이전</button>
        <button className={`px-3 py-1 font-bold text-white bg-${PRIMARY_COLOR} border border-${PRIMARY_COLOR} rounded`}>1</button>
        <button className="px-3 py-1 text-gray-700 border border-gray-300 rounded hover:bg-gray-100">2</button>
        <button className="px-3 py-1 text-gray-500 border border-gray-300 rounded hover:bg-gray-100">다음 &gt;</button>
    </div>
);

export default async function NoticePage() {
    const notices = await getNotices();
    return (
        <div className="font-sans bg-white min-h-screen">
            <Header />
            <Breadcrumbs />
            <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
                <div className="mb-8 border-b border-gray-200 pb-6">
                    <h1 className="text-4xl md:text-5xl font-extrabold text-gray-800 tracking-tight">알림소식</h1>
                    <p className="mt-2 text-lg text-gray-600">EHS 프렌즈의 최신 공지, 연구 성과 및 주요 행사 정보를 확인하십시오.</p>
                </div>
                <div className="flex justify-between items-center mb-6 py-3 border-y border-gray-200 bg-gray-50">
                    <div className="flex items-center space-x-2 text-gray-700">
                        <Filter className="w-5 h-5 text-gray-500" />
                        <span className="font-semibold hidden sm:inline">분류:</span>
                        <select className={`p-1 border border-gray-300 rounded text-sm focus:border-${PRIMARY_COLOR} focus:ring-${PRIMARY_COLOR}`}>
                            <option>전체 카테고리</option>
                            <option>공지</option>
                            <option>행사</option>
                            <option>연구</option>
                        </select>
                    </div>
                    <div className="text-sm text-gray-600">총 {notices.length}개 결과 표시</div>
                </div>
                <section className="border-t border-gray-200">
                    {notices.map((notice) => (
                        <NoticeItemCard key={notice.id} notice={notice} />
                    ))}
                </section>
                <Pagination />
            </main>
            <Footer />
        </div>
    );
}