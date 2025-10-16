// app/notice/NoticeListWithFilter.tsx
"use client";

import { useRouter, useSearchParams } from 'next/navigation';
import { Calendar, Filter } from 'lucide-react';
import { PRIMARY_COLOR } from '../components/CommonLayout';
import { useEffect, useState, Suspense } from 'react';

// --- 타입 정의 ---
interface Notice {
    id: number;
    documentId: string;
    title: string;
    category: string;
    summary: string;
    date: string;
}

interface PaginationMeta {
    page: number;
    pageSize: number;
    pageCount: number;
    total: number;
}

const POSTS_PER_PAGE = 5; // 한 페이지에 보여줄 게시글 수

// --- 데이터 Fetching 함수 수정 ---
async function getNotices(category?: string | null, page: number = 1) {
    let url = `${process.env.NEXT_PUBLIC_STRAPI_API_URL}/api/notices?populate=*&sort=date:desc&pagination[page]=${page}&pagination[pageSize]=${POSTS_PER_PAGE}`;
    if (category) {
        url += `&filters[category][$eq]=${category}`;
    }
    const res = await fetch(url);
    if (!res.ok) {
        throw new Error('Failed to fetch data');
    }
    const json = await res.json();
    return {
        notices: json.data as Notice[],
        pagination: json.meta.pagination as PaginationMeta,
    };
}

// --- 로딩 스켈레톤 UI ---
export const LoadingSkeleton = () => (
    <div className="border-t border-gray-200">
        {[...Array(POSTS_PER_PAGE)].map((_, i) => (
            <div key={i} className="p-4 sm:p-6 border-b border-gray-200 animate-pulse">
                <div className="h-4 bg-gray-200 rounded w-1/4 mb-3"></div>
                <div className="h-6 bg-gray-300 rounded w-3/4 mb-2"></div>
                <div className="h-4 bg-gray-200 rounded w-full"></div>
                <div className="h-4 bg-gray-200 rounded w-5/6 mt-1"></div>
            </div>
        ))}
    </div>
);


// --- 컴포넌트들 ---
const NoticeItemCard = ({ notice }: { notice: Notice }) => (
    <a href={`/notice/${notice.documentId}`} className="block p-4 sm:p-6 border-b border-gray-200 hover:bg-gray-50 transition">
        <div className="flex items-center space-x-3 text-sm font-semibold">
            <span className={`text-slate-700 border border-slate-700/50 px-2 py-0.5 rounded-full text-xs`}>{notice.category || '미분류'}</span>
            <span className="flex items-center text-gray-500"><Calendar className="w-4 h-4 mr-1" />{notice.date}</span>
        </div>
        <h3 className="text-xl font-bold text-gray-800 group-hover:text-blue-700">{notice.title}</h3>
        <p className="text-gray-600 text-base line-clamp-2">{notice.summary}</p>
    </a>
);

// 동적 페이지네이션 컴포넌트
const Pagination = ({ pagination, onPageChange }: { pagination: PaginationMeta, onPageChange: (page: number) => void }) => {
    const { page, pageCount } = pagination;
    const pageNumbers = Array.from({ length: pageCount }, (_, i) => i + 1);

    return (
        <div className="flex justify-center mt-10 space-x-1">
            <button onClick={() => onPageChange(page - 1)} disabled={page === 1} className="px-3 py-1 text-gray-500 border border-gray-300 rounded hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed">&lt; 이전</button>
            {pageNumbers.map(number => (
                <button
                    key={number}
                    onClick={() => onPageChange(number)}
                    className={`px-3 py-1 border rounded ${page === number ? `font-bold text-white bg-slate-700 border-slate-700` : `text-gray-700 border-gray-300 hover:bg-gray-100`}`}
                >
                    {number}
                </button>
            ))}
            <button onClick={() => onPageChange(page + 1)} disabled={page === pageCount} className="px-3 py-1 text-gray-500 border border-gray-300 rounded hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed">다음 &gt;</button>
        </div>
    );
};


// --- 메인 필터 + 목록 컴포넌트 ---
export default function NoticeListWithFilter() {
    const [notices, setNotices] = useState<Notice[]>([]);
    const [pagination, setPagination] = useState<PaginationMeta | null>(null);
    const [isLoading, setIsLoading] = useState(true);

    const router = useRouter();
    const searchParams = useSearchParams();
    const currentCategory = searchParams.get('category');
    const currentPage = Number(searchParams.get('page')) || 1;

    useEffect(() => {
        setIsLoading(true);
        getNotices(currentCategory, currentPage)
            .then(data => {
                setNotices(data.notices);
                setPagination(data.pagination);
            })
            .catch(console.error)
            .finally(() => setIsLoading(false));
    }, [currentCategory, currentPage]);

    const handleFilterChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const newCategory = e.target.value;
        const params = new URLSearchParams(searchParams.toString());
        if (newCategory) {
            params.set('category', newCategory);
        } else {
            params.delete('category');
        }
        params.delete('page'); // 필터 변경 시 1페이지로 리셋
        router.push(`/notice?${params.toString()}`);
    };

    const handlePageChange = (page: number) => {
        const params = new URLSearchParams(searchParams.toString());
        params.set('page', page.toString());
        router.push(`/notice?${params.toString()}`);
    };

    return (
        <>
            <div className="flex justify-between items-center mb-6 py-3 border-y border-gray-200 bg-gray-50">
                <div className="flex items-center space-x-2 text-gray-700">
                    <Filter className="w-5 h-5 text-gray-500" />
                    <span className="font-semibold hidden sm:inline">분류:</span>
                    <select onChange={handleFilterChange} value={currentCategory || ''} className={`p-1 border border-gray-300 rounded text-sm focus:border-slate-700 focus:ring-slate-700`}>
                        <option value="">전체</option>
                        <option value="공지">공지</option>
                        <option value="자료실">자료실</option>
                    </select>
                </div>
                <div className="text-sm text-gray-600">총 {pagination?.total || 0}개 결과 표시</div>
            </div>

            {isLoading ? (
                <LoadingSkeleton />
            ) : (
                <section className="border-t border-gray-200">
                    {notices.length > 0 ? (
                        notices.map((notice) => <NoticeItemCard key={notice.id} notice={notice} />)
                    ) : (
                        <div className="text-center p-10 text-gray-500">해당 카테고리에 게시글이 없습니다.</div>
                    )}
                </section>
            )}

            {pagination && pagination.pageCount > 1 && (
                <Pagination pagination={pagination} onPageChange={handlePageChange} />
            )}
        </>
    );
}