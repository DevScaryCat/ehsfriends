// app/notice/page.tsx
import { ChevronRight, Home, Calendar, Filter } from 'lucide-react';
import { Header, Footer, PRIMARY_COLOR } from '../components/CommonLayout';
import { Suspense } from 'react'; // Suspense를 임포트합니다.
import NoticeListWithFilter from './NoticeListWithFilter'; // 분리된 클라이언트 컴포넌트를 임포트합니다.

// --- 페이지의 정적인 부분들 ---

const Breadcrumbs = () => (
    <nav className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-3 text-sm text-gray-500 border-b border-gray-200 bg-white">
        <ol className="flex items-center space-x-2">
            <li><a href="/" className="hover:text-blue-700"><Home className="w-4 h-4 inline-block text-gray-400" /></a></li>
            <ChevronRight className="w-4 h-4" />
            <li className={`text-slate-700 font-bold`}>알림소식</li>
        </ol>
    </nav>
);

const LoadingSkeleton = () => (
    <div className="border-t border-gray-200">
        {[...Array(5)].map((_, i) => (
            <div key={i} className="p-4 sm:p-6 border-b border-gray-200 animate-pulse">
                <div className="h-4 bg-gray-200 rounded w-1/4 mb-3"></div>
                <div className="h-6 bg-gray-300 rounded w-3/4 mb-2"></div>
                <div className="h-4 bg-gray-200 rounded w-full"></div>
                <div className="h-4 bg-gray-200 rounded w-5/6 mt-1"></div>
            </div>
        ))}
    </div>
);


// --- 메인 페이지 (서버 컴포넌트) ---

export default function NoticePage() {
    return (
        <div className="font-sans bg-white min-h-screen">
            <Header />
            <Breadcrumbs />
            <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
                <div className="mb-8 border-b border-gray-200 pb-6">
                    <h1 className="text-4xl md:text-5xl font-extrabold text-gray-800 tracking-tight">알림소식</h1>
                    <p className="mt-2 text-lg text-gray-600">EHS 프렌즈의 최신 공지, 연구 성과 및 주요 행사 정보를 확인하십시오.</p>
                </div>

                {/* 동적인 부분을 Suspense로 감싸줍니다. */}
                <Suspense fallback={<LoadingSkeleton />}>
                    <NoticeListWithFilter />
                </Suspense>

            </main>
            <Footer />
        </div>
    );
}