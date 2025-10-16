// app/notice/page.tsx
"use client"; // 최상단에 "use client"를 추가하여 클라이언트 컴포넌트 기능을 사용합니다.

import { useRouter, useSearchParams } from 'next/navigation';
import { ChevronRight, Home, Calendar, Filter } from 'lucide-react';
import { Header, Footer, PRIMARY_COLOR } from '../components/CommonLayout';
import { useEffect, useState } from 'react';

// --- 타입 정의 및 데이터 Fetching ---

interface Notice {
    id: number;
    documentId: string;
    title: string;
    category: string;
    summary: string;
    date: string;
}

// Strapi에서 데이터를 가져오는 함수 (이제 클라이언트에서 호출됩니다)
async function getNotices(category?: string | null) {
    let url = `${process.env.NEXT_PUBLIC_STRAPI_API_URL}/api/notices?populate=*&sort=date:desc`;
    if (category) {
        // Strapi 필터 문법을 사용하여 카테고리별로 필터링합니다.
        url += `&filters[category][$eq]=${category}`;
    }
    const res = await fetch(url);
    if (!res.ok) {
        throw new Error('Failed to fetch data');
    }
    const json = await res.json();
    return json.data as Notice[];
}


// --- 페이지 컴포넌트들 ---

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
    <a href={`/notice/${notice.documentId}`} className="block p-4 sm:p-6 border-b border-gray-200 hover:bg-gray-50 transition">
        <div className="flex items-center space-x-3 text-sm font-semibold">
            <span className={`text-${PRIMARY_COLOR} border border-${PRIMARY_COLOR}/50 px-2 py-0.5 rounded-full text-xs`}>{notice.category || '미분류'}</span>
            <span className="flex items-center text-gray-500"><Calendar className="w-4 h-4 mr-1" />{notice.date}</span>
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


// --- 메인 페이지 컴포넌트 ---

export default function NoticePage() {
    const [notices, setNotices] = useState<Notice[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const searchParams = useSearchParams();
    const router = useRouter();

    const currentCategory = searchParams.get('category');

    // 카테고리가 변경될 때마다 데이터를 다시 불러옵니다.
    useEffect(() => {
        setIsLoading(true);
        getNotices(currentCategory)
            .then(data => {
                setNotices(data);
                setIsLoading(false);
            })
            .catch(error => {
                console.error(error);
                setIsLoading(false);
            });
    }, [currentCategory]);

    // 필터 변경 시 URL을 업데이트하는 함수
    const handleFilterChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const newCategory = e.target.value;
        if (newCategory) {
            router.push(`/notice?category=${newCategory}`);
        } else {
            router.push('/notice');
        }
    };

    return (
        <div className="font-sans bg-white min-h-screen">
            <Header />
            <Breadcrumbs />
            <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
                <div className="mb-8 border-b border-gray-200 pb-6">
                    <h1 className="text-4xl md:text-5xl font-extrabold text-gray-800 tracking-tight">알림소식</h1>
                    <p className="mt-2 text-lg text-gray-600">EHS 프렌즈의 최신 공지, 연구 성과 및 주요 행사 정보를 확인하십시오.</p>
                </div>

                {/* 필터링 UI */}
                <div className="flex justify-between items-center mb-6 py-3 border-y border-gray-200 bg-gray-50">
                    <div className="flex items-center space-x-2 text-gray-700">
                        <Filter className="w-5 h-5 text-gray-500" />
                        <span className="font-semibold hidden sm:inline">분류:</span>
                        <select
                            onChange={handleFilterChange}
                            value={currentCategory || ''}
                            className={`p-1 border border-gray-300 rounded text-sm focus:border-${PRIMARY_COLOR} focus:ring-${PRIMARY_COLOR}`}
                        >
                            <option value="">전체</option>
                            <option value="공지">공지</option>
                            <option value="자료실">자료실</option>
                        </select>
                    </div>
                    <div className="text-sm text-gray-600">총 {notices.length}개 결과 표시</div>
                </div>

                {/* 게시글 목록 */}
                <section className="border-t border-gray-200">
                    {isLoading ? (
                        <div className="text-center p-10">로딩 중...</div>
                    ) : (
                        notices.length > 0 ? (
                            notices.map((notice) => (
                                <NoticeItemCard key={notice.id} notice={notice} />
                            ))
                        ) : (
                            <div className="text-center p-10 text-gray-500">해당 카테고리에 게시글이 없습니다.</div>
                        )
                    )}
                </section>

                <Pagination />
            </main>
            <Footer />
        </div>
    );
}