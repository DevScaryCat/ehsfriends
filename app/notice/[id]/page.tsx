// app/notice/[id]/page.tsx
import { ChevronRight, Home, Calendar, Paperclip } from 'lucide-react';
import Image from 'next/image';
import { Header, Footer, PRIMARY_COLOR } from '../../components/CommonLayout';

// --- 인터페이스, 데이터 Fetching, 컴포넌트들 (이전과 동일) ---
interface NoticeDetail {
    id: number;
    title: string;
    category: string;
    date: string;
    author?: string;
    content: any;
    heroImage?: {
        url: string;
        alternativeText: string | null;
    } | null;
    attachments?: Array<{
        name: string;
        url: string;
    }>;
}

function renderContentAsHtml(content: any): string {
    if (typeof content === 'string') {
        return require('marked').marked(content);
    }
    if (!Array.isArray(content)) return '<p>내용을 불러올 수 없습니다.</p>';
    return content.map((block: any) => {
        const textContent = block.children.map((child: any) => child.text || '').join('');
        switch (block.type) {
            case 'paragraph': return `<p>${textContent}</p>`;
            case 'heading': return `<h${block.level}>${textContent}</h${block.level}>`;
            default: return `<p>${textContent}</p>`;
        }
    }).join('');
}

async function getNoticeById(id: string) {
    const res = await fetch(`${process.env.NEXT_PUBLIC_STRAPI_API_URL}/api/notices/${id}?populate=*`);
    if (!res.ok) {
        if (res.status === 404) return null;
        throw new Error('Failed to fetch data');
    }
    const json = await res.json();
    if (json.data && json.data.attributes) {
        return { id: json.data.id, ...json.data.attributes };
    }
    return json.data;
}

const Breadcrumbs = ({ title }: { title: string }) => (
    <nav className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-3 text-sm text-gray-500 border-b border-gray-200 bg-white">
        <ol className="flex items-center space-x-2">
            <li><a href="/" className="hover:text-blue-700"><Home className="w-4 h-4 inline-block text-gray-400" /></a></li>
            <ChevronRight className="w-4 h-4" />
            <li><a href="/notice" className="hover:text-blue-700 font-semibold">알림소식</a></li>
            <ChevronRight className="w-4 h-4" />
            <li className={`text-slate-700 font-bold`}>{title}</li>
        </ol>
    </nav>
);

const ArticleHeader = ({ data }: { data: NoticeDetail }) => (
    <div className="space-y-2 pb-4 border-b border-gray-300">
        <h1 className="text-3xl md:text-4xl font-extrabold text-gray-800 tracking-tight">{data.title}</h1>
        <div className="flex flex-wrap items-center text-sm text-gray-600 pt-1">
            <span className={`font-semibold text-slate-700 mr-3`}>{data.category}</span>
            <span className="flex items-center mr-3 border-l border-gray-300 pl-3">
                <Calendar className="w-4 h-4 mr-1" /> {data.date}
            </span>
            {data.author && (<span className="border-l border-gray-300 pl-3">작성자: {data.author}</span>)}
        </div>
    </div>
);

const AttachmentList = ({ attachments }: { attachments: Array<{ name: string; url: string; }> }) => {
    if (!attachments || attachments.length === 0) return null;
    return (
        <div className="mt-8 pt-6 border-t border-gray-200">
            <h3 className={`text-lg font-bold text-gray-800 mb-3`}>첨부 파일</h3>
            <ul className="space-y-2">
                {attachments.map((file, index) => (
                    <li key={index} className="flex items-center">
                        <Paperclip className="w-4 h-4 mr-2 text-gray-500" />
                        <a href={file.url} download className="text-gray-700 hover:text-blue-700 underline text-sm" target="_blank" rel="noopener noreferrer">
                            {file.name}
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default async function NoticeDetailPage({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;
    const notice = await getNoticeById(id);

    if (!notice) {
        return (
            <div className="font-sans bg-white min-h-screen flex flex-col">
                <Header />
                <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 flex-1">
                    <p>게시글을 찾을 수 없습니다.</p>
                </main>
                <Footer />
            </div>
        );
    }

    const htmlContent = renderContentAsHtml(notice.content);
    const processedAttachments = notice.attachments || [];
    const heroImageUrl = notice.heroImage?.url || null;

    return (
        // 1. 최상위 div에 `flex`와 `flex-col`을 추가하여 Flexbox 컨테이너로 만듭니다.
        <div className="font-sans bg-white min-h-screen flex flex-col">
            <Header />
            {/* 2. `<main>` 태그에 `flex-1`을 추가하여 남은 공간을 모두 차지하도록 합니다. */}
            <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 flex-1 w-full">
                <ArticleHeader data={notice} />

                {heroImageUrl && (
                    <div className="w-full my-6 p-1 border border-gray-300 bg-gray-50">
                        <Image src={heroImageUrl} alt={notice.heroImage?.alternativeText || notice.title} width={1200} height={500} layout="responsive" objectFit="cover" className="w-full h-auto" />
                    </div>
                )}

                <div className="prose max-w-none text-base leading-relaxed text-gray-700 pt-6 space-y-4" dangerouslySetInnerHTML={{ __html: htmlContent }} />

                <AttachmentList attachments={processedAttachments} />

                <hr className="border-gray-200 mt-12 mb-8" />
            </main>
            <Footer />
        </div>
    );
}