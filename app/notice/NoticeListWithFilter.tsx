// app/notice/NoticeListWithFilter.tsx
"use client";

import { useRouter, useSearchParams } from 'next/navigation';
import { Calendar, Filter } from 'lucide-react';
import { PRIMARY_COLOR } from '../components/CommonLayout';
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

async function getNotices(category?: string | null) {
    let url = `${process.env.NEXT_PUBLIC_STRAPI_API_URL}/api/notices?populate=*&sort=date:desc`;
    if (category) {
        url += `&filters[category][$eq]=${category}`;
    }
    const res = await fetch(url);
    if (!res.ok) {
        throw new Error('Failed to fetch data');
    }
    const json = await res.json();
    return json.data as Notice[];
}

// --- 게시글 카드 및 페이지네이션 컴포넌트 ---

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


// --- 필터 + 목록 컴포넌트 (클라이언트 컴포넌트) ---

export default function NoticeListWithFilter() {
    const [notices, setNotices] = useState<Notice[]>([]);
    const searchParams = useSearchParams();
    const router = useRouter();

    const currentCategory = searchParams.get('category');

    useEffect(() => {
        getNotices(currentCategory).then(setNotices);
    }, [currentCategory]);

    const handleFilterChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const newCategory = e.target.value;
        router.push(newCategory ? `/notice?category=${newCategory}` : '/notice');
    };

    return (
        <>
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

            <section className="border-t border-gray-200">
                {notices.length > 0 ? (
                    notices.map((notice) => (
                        <NoticeItemCard key={notice.id} notice={notice} />
                    ))
                ) : (
                    <div className="text-center p-10 text-gray-500">해당 카테고리에 게시글이 없습니다.</div>
                )}
            </section>

            <Pagination />
        </>
    );
}