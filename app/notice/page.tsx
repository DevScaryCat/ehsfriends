// app/notice/page.tsx
import { ChevronRight, Home } from 'lucide-react';
import Link from 'next/link'; // Link 임포트
import { Suspense } from 'react';
import NoticeListWithFilter, { LoadingSkeleton } from './NoticeListWithFilter';
import type { Metadata } from 'next'; // Metadata 타입 임포트

// --- 페이지 Metadata ---
export const metadata: Metadata = {
    title: "알림소식", // 페이지 제목
    description: "EHS Friends의 최신 공지사항, 자료실 업데이트 등 새로운 소식을 확인하세요.", // 페이지 설명
    alternates: {
        canonical: '/notice', // 표준 URL
    },
};

// --- 컴포넌트 정의 ---
const Breadcrumbs = () => (
    <nav aria-label="Breadcrumb" className="max-w-6xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-3 text-sm text-gray-500 border-b border-gray-200 bg-white">
        <ol className="flex items-center space-x-2">
            <li><Link href="/" className="hover:text-blue-700"><Home className="w-4 h-4 inline-block text-gray-400" /></Link></li>
            <li><ChevronRight className="w-4 h-4" /></li>
            <li className="text-slate-700 font-bold" aria-current="page">알림소식</li>
        </ol>
    </nav>
);

// --- 메인 페이지 컴포넌트 ---
export default function NoticePage() {
    return (
        // Header/Footer 제거, main 태그 사용
        <main>
            <Breadcrumbs />
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
                <section aria-labelledby="notice-title" className="mb-8 border-b border-gray-200 pb-6">
                    <h1 id="notice-title" className="text-4xl md:text-5xl font-extrabold text-gray-800 tracking-tight">알림소식</h1>
                    <p className="mt-2 text-lg text-gray-600">EHS Friends의 최신 공지, 자료실 정보 및 주요 소식을 확인하십시오.</p> {/* 문구 약간 수정 */}
                </section>

                {/* Suspense fallback으로 로딩 스켈레톤 사용 */}
                <Suspense fallback={<LoadingSkeleton />}>
                    <NoticeListWithFilter />
                </Suspense>

            </div>
        </main>
    );
}