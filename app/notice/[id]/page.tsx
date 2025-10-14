// app/notice/[id]/page.tsx
import { ChevronRight, Home, Calendar, ArrowLeft, Paperclip } from 'lucide-react';
// 공통 컴포넌트 및 상수 임포트
import { Header, Footer, PRIMARY_COLOR } from '../../components/CommonLayout';


// 모의 데이터 (실제 데이터는 API 호출로 대체됨)
const noticeDetailData = {
    id: 1,
    date: "2025.10.01",
    category: "공지",
    title: "2025년 하반기 안전 점검 의무 사항 안내",
    subtitle: "법적 준수 기준 강화에 따른 사업주 유의사항 상세 분석",
    author: "EHS프렌즈 관리팀",
    // Hero Image URL이 존재하지 않는 경우 (이미지 유무 테스트용)
    heroImageUrl: null as string | null,
    // heroImageUrl: "https://picsum.photos/id/40/1200/500", // 이미지가 있는 경우
    content: `
        <p class="mb-4 leading-relaxed text-gray-700">
            최근 강화된 산업안전보건법에 따라, 모든 사업장은 하반기 정기 안전 점검을 의무적으로 실시해야 합니다. 이는 근로자의 안전과 기업의 법적 리스크 관리를 위해 매우 중요한 절차입니다. 본 공지는 주요 점검 항목과 절차를 상세히 안내합니다.
        </p>

        <h3 class="text-lg font-bold text-gray-800 border-l-4 border-gray-300 pl-2 mb-3 mt-6">주요 점검 항목 및 기준</h3>
        <p class="mb-4 leading-relaxed text-gray-700">
            점검 항목은 기존의 기계/설비 안전 외에, 작업 환경과 근로자 보건 상태까지 포괄합니다. 특히, 고위험 작업장에서는 위험성평가 결과와의 일치 여부를 집중적으로 확인해야 합니다.
        </p>
        <ul class="list-disc list-inside space-y-2 pl-4 text-gray-700">
            <li>위험성 평가 결과의 현장 반영 여부 확인</li>
            <li>소화 설비 및 비상 대피 시설의 정상 작동 여부 확인</li>
            <li>유해 화학 물질의 적절한 보관 및 취급 관리 체계 점검</li>
            <li>근골격계 부담 작업에 대한 예방 조치 이행 현황 점검</li>
        </ul>

        <h3 class="text-lg font-bold text-gray-800 border-l-4 border-gray-300 pl-2 mb-3 mt-6">점검 시 유의사항</h3>
        <p class="mb-4 leading-relaxed text-gray-700">
            점검은 단순히 서류상으로 그치는 것이 아닌, 실제 현장 작업 환경을 반영해야 합니다. 점검 기록은 최소 3년간 보관해야 하며, 미흡 사항 발견 시 즉각적인 개선 조치가 이뤄져야 합니다.
        </p>
        
        <div class="border border-gray-200 p-4 my-6 bg-gray-50 text-gray-600 italic">
            "안전은 비용이 아닌 투자이며, 모든 근로자의 기본 권리입니다. 사업주의 적극적인 참여를 당부드립니다." - EHS프렌즈 대표이사
        </div>
    `,
    attachments: [
        { name: "하반기 안전 점검 체크리스트 (PDF)", url: "#" },
        { name: "관련 법규 개정안 요약 (DOCX)", url: "#" },
    ]
};

/**
 * @component Breadcrumbs: 서브 페이지 경로 표시
 */
const Breadcrumbs = ({ title }: { title: string }) => {
    return (
        <nav className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-3 text-sm text-gray-500 border-b border-gray-200 bg-white">
            <ol className="flex items-center space-x-2">
                <li><a href="/" className="hover:text-blue-700"><Home className="w-4 h-4 inline-block text-gray-400" /></a></li>
                <ChevronRight className="w-4 h-4" />
                <li><a href="/notice" className="hover:text-blue-700 font-semibold">알림소식</a></li>
                <ChevronRight className="w-4 h-4" />
                <li className={`text-${PRIMARY_COLOR} font-bold`}>{title}</li>
            </ol>
        </nav>
    );
};

/**
 * @component ArticleHeader: 상세 페이지 제목 및 정보 (간결하게 수정)
 */
const ArticleHeader = ({ data }: { data: typeof noticeDetailData }) => {
    return (
        <div className="space-y-2 pb-4 border-b border-gray-300">
            {/* 제목: 간결하고 올드한 스타일의 타이포그래피 */}
            <h1 className="text-3xl md:text-4xl font-extrabold text-gray-800 tracking-tight">
                {data.title}
            </h1>

            {/* 정보: 선과 구분자를 사용하여 올드하게 표시 */}
            <div className="flex flex-wrap items-center text-sm text-gray-600 pt-1">
                <span className={`font-semibold text-${PRIMARY_COLOR} mr-3`}>
                    {data.category}
                </span>
                <span className="flex items-center mr-3 border-l border-gray-300 pl-3">
                    <Calendar className="w-4 h-4 mr-1" /> {data.date}
                </span>
                <span className="border-l border-gray-300 pl-3">
                    작성자: {data.author}
                </span>
            </div>
        </div>
    );
};

/**
 * @component AttachmentList: 첨부 파일 목록
 */
const AttachmentList = ({ attachments }: { attachments: { name: string; url: string; }[] }) => {
    if (attachments.length === 0) return null;

    return (
        <div className="mt-8 pt-6 border-t border-gray-200">
            <h3 className={`text-lg font-bold text-gray-800 mb-3`}>첨부 파일</h3>
            <ul className="space-y-2">
                {attachments.map((file, index) => (
                    <li key={index} className="flex items-center">
                        <Paperclip className="w-4 h-4 mr-2 text-gray-500" />
                        <a
                            href={file.url}
                            download
                            className="text-gray-700 hover:text-blue-700 underline text-sm"
                        >
                            {file.name}
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    );
};


// --- Main Page ---

/**
 * @page NoticeDetailPage: 알림소식 상세 페이지
 * @param {object} props - Next.js dynamic route params (현재 사용되지 않음)
 */
export default function NoticeDetailPage({ params }: { params: { id: string } }) {
    // 실제 구현 시 params.id를 사용하여 API에서 데이터를 가져옵니다.
    const data = noticeDetailData;

    return (
        <div className="font-sans bg-white min-h-screen">
            <Header />
            <Breadcrumbs title={data.title} />

            <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10"> {/* 컨테이너 폭을 좁혀 올드한 신문/문서 느낌 강조 */}



                <ArticleHeader data={data} />

                {/* 2. 본문 상단 이미지 (조건부 렌더링 - 간결한 박스 처리) */}
                {data.heroImageUrl && (
                    <div className="w-full my-6 p-1 border border-gray-300 bg-gray-50">
                        <img
                            src={data.heroImageUrl}
                            alt={data.title}
                            className="w-full h-auto object-cover"
                        />
                    </div>
                )}

                {/* 3. 본문 콘텐츠 (HTML 직접 삽입으로 간결한 텍스트 처리) */}
                <div
                    className="text-base leading-relaxed text-gray-700 pt-6 space-y-4"
                    dangerouslySetInnerHTML={{ __html: data.content }}
                />

                {/* 4. 첨부 파일 */}
                <AttachmentList attachments={data.attachments} />

                {/* 5. 하단 구분선 */}
                <hr className="border-gray-200 mt-12 mb-8" />

                {/* 6. 목록 돌아가기 및 하단 CTA */}
                <div className="flex justify-between items-center">
                    <a
                        href="/contact"
                        className={`inline-block px-4 py-2 text-base font-bold bg-${PRIMARY_COLOR} text-white hover:bg-blue-700 transition duration-150 ease-in-out`}
                    >
                        상담 요청하기
                    </a>
                </div>

            </main>
            <Footer />
        </div>
    );
}