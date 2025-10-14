// app/notice/page.tsx
import { ChevronRight, Home, Calendar, Filter } from 'lucide-react';
// 공통 컴포넌트 및 상수 임포트
import { Header, Footer, PRIMARY_COLOR } from '../components/CommonLayout'

// 모의 데이터 (News/Announcement)
const newsData = [
    { id: 1, date: "2025.10.01", category: "공지", title: "2025년 하반기 안전 점검 의무 사항 안내", summary: "사업장 필수 안전 점검 항목 및 기한을 확인하십시오. 미이행 시 법적 처벌을 받을 수 있습니다.", href: "/notice/1" },
    { id: 2, date: "2025.09.25", category: "행사", title: "제15차 환경 보건 안전 전문가 포럼 개최", summary: "최신 EHS 동향 및 성공 사례 공유를 위한 전문가 포럼에 초대합니다.", href: "/notice/2" },
    { id: 3, date: "2025.09.15", category: "연구", title: "화학물질 관리 선진화 방안 연구 논문 발표", summary: "당사 연구진이 발표한 신규 화학물질 관리 시스템 도입 효과에 대한 보고서입니다.", href: "/notice/3" },
    { id: 4, date: "2029.09.01", category: "공지", title: "웹사이트 리뉴얼 관련 시스템 점검 일시 공지", summary: "서비스 안정화를 위한 일시적인 시스템 점검이 예정되어 있습니다. 이용에 불편을 드려 죄송합니다.", href: "/notice/4" },
    { id: 5, date: "2025.08.20", category: "행사", title: "산업 보건 관리자 필수 법규 교육 과정 안내", summary: "산업 보건 관리자 자격 유지를 위한 필수 법규 교육 일정을 확인하십시오.", href: "/notice/5" },
    { id: 6, date: "2025.08.05", category: "연구", title: "근골격계 질환 예방을 위한 작업 환경 분석 보고서", summary: "제조업 기반 사업장의 근골격계 위험 요소 분석 및 개선안을 제시합니다.", href: "/notice/6" },
];


/**
 * @component Breadcrumbs: 서브 페이지 경로 표시
 */
const Breadcrumbs = () => {
    return (
        <nav className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-3 text-sm text-gray-500 border-b border-gray-200 bg-white">
            <ol className="flex items-center space-x-2">
                <li><a href="/" className="hover:text-blue-700"><Home className="w-4 h-4 inline-block text-gray-400" /></a></li>
                <ChevronRight className="w-4 h-4" />
                {/* 현재 페이지 경로: 알림소식 */}
                <li className={`text-${PRIMARY_COLOR} font-bold`}>알림소식</li>
            </ol>
        </nav>
    );
};

/**
 * @component NoticeItemCard: 소식 항목 카드
 */
const NoticeItemCard = ({ date, category, title, summary, href }: typeof newsData[0]) => (
    <a
        href={href}
        className="block p-4 sm:p-6 border-b border-gray-200 hover:bg-gray-50 transition duration-150 ease-in-out space-y-2"
    >
        <div className="flex items-center space-x-3 text-sm font-semibold">
            <span className={`text-${PRIMARY_COLOR} border border-${PRIMARY_COLOR}/50 px-2 py-0.5 rounded-full text-xs`}>
                {category}
            </span>
            <span className="flex items-center text-gray-500">
                <Calendar className="w-4 h-4 mr-1" />
                {date}
            </span>
        </div>

        <h3 className="text-xl font-bold text-gray-800 transition group-hover:text-blue-700">
            {title}
        </h3>
        <p className="text-gray-600 text-base line-clamp-2">
            {summary}
        </p>
    </a>
);


/**
 * @component Pagination: 간단한 페이지네이션
 */
const Pagination = () => (
    <div className="flex justify-center mt-10 space-x-1">
        <button className="px-3 py-1 text-gray-500 border border-gray-300 rounded hover:bg-gray-100">
            &lt; 이전
        </button>
        <button className={`px-3 py-1 font-bold text-white bg-${PRIMARY_COLOR} border border-${PRIMARY_COLOR} rounded`}>
            1
        </button>
        <button className="px-3 py-1 text-gray-700 border border-gray-300 rounded hover:bg-gray-100">
            2
        </button>
        <button className="px-3 py-1 text-gray-500 border border-gray-300 rounded hover:bg-gray-100">
            다음 &gt;
        </button>
    </div>
);


// --- Main Page ---

/**
 * @page NoticePage: 알림소식 페이지
 */
export default function NoticePage() {
    return (
        <div className="font-sans bg-white min-h-screen">
            <Header />
            <Breadcrumbs />

            <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10">

                {/* 1. 페이지 제목 및 소개 */}
                <div className="mb-8 border-b border-gray-200 pb-6">
                    <h1 className="text-4xl md:text-5xl font-extrabold text-gray-800 tracking-tight">
                        알림소식
                    </h1>
                    <p className="mt-2 text-lg text-gray-600">
                        EHS 프렌즈의 최신 공지, 연구 성과 및 주요 행사 정보를 확인하십시오.
                    </p>
                </div>

                {/* 2. 필터/정렬 옵션 */}
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
                    <div className="text-sm text-gray-600">
                        총 6개 결과 표시
                    </div>
                </div>

                {/* 3. 소식 리스트 */}
                <section className="border-t border-gray-200">
                    {newsData.map((news) => (
                        <NoticeItemCard key={news.id} {...news} />
                    ))}
                </section>

                {/* 4. 페이지네이션 */}
                <Pagination />

            </main>
            <Footer />
        </div>
    );
}