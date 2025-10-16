// app/notice/page.tsx
import { ChevronRight, Home } from 'lucide-react';
import { Header, Footer } from '../components/CommonLayout';
import { Suspense } from 'react';
import NoticeListWithFilter, { LoadingSkeleton } from './NoticeListWithFilter'; // LoadingSkeleton을 임포트합니다.

const Breadcrumbs = () => (
    <nav className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-3 text-sm text-gray-500 border-b border-gray-200 bg-white">
        <ol className="flex items-center space-x-2">
            <li><a href="/" className="hover:text-blue-700"><Home className="w-4 h-4 inline-block text-gray-400" /></a></li>
            <ChevronRight className="w-4 h-4" />
            <li className="text-slate-700 font-bold">알림소식</li>
        </ol>
    </nav>
);

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

                <Suspense fallback={<LoadingSkeleton />}>
                    <NoticeListWithFilter />
                </Suspense>

            </main>
            <Footer />
        </div>
    );
}