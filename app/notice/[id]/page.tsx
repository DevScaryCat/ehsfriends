// app/notice/[id]/page.tsx
import { ChevronRight, Home, Calendar, Paperclip } from 'lucide-react';
import Image from 'next/image';
import { Header, Footer, PRIMARY_COLOR } from '../../components/CommonLayout';

// 1. 실제 데이터 구조에 맞게 heroImage와 attachments 타입을 수정합니다.
interface NoticeDetail {
    id: number;
    title: string;
    category: string;
    date: string;
    author?: string;
    content: any;
    heroImage?: { // data, attributes 래퍼 제거
        url: string;
        alternativeText: string | null;
    } | null;
    attachments?: Array<{ // data 래퍼 제거, 바로 배열로
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
            <li className={`text-${PRIMARY_COLOR} font-bold`}>{title}</li>
        </ol>
    </nav>
);

const ArticleHeader = ({ data }: { data: NoticeDetail }) => (
    <div className="space-y-2 pb-4 border-b border-gray-300">
        <h1 className="text-3xl md:text-4xl font-extrabold text-gray-800 tracking-tight">{data.title}</h1>
        <div className="flex flex-wrap items-center text-sm text-gray-600 pt-1">
            <span className={`font-semibold text-${PRIMARY_COLOR} mr-3`}>{data.category}</span>
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
                        <a href={`${process.env.NEXT_PUBLIC_STRAPI_API_URL}${file.url}`} download className="text-gray-700 hover:text-blue-700 underline text-sm" target="_blank" rel="noopener noreferrer">
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
            <div className="font-sans bg-white min-h-screen">
                <Header />
                <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
                    <p>게시글을 찾을 수 없습니다.</p>
                </main>
                <Footer />
            </div>
        );
    }

    const htmlContent = renderContentAsHtml(notice.content);

    // 2. attachments 처리 방식을 단순화합니다.
    const processedAttachments = notice.attachments || [];

    // 3. heroImageUrl 처리 방식을 단순화합니다.
    const heroImageUrl = notice.heroImage?.url ? `${process.env.NEXT_PUBLIC_STRAPI_API_URL}${notice.heroImage.url}` : null;

    return (
        <div className="font-sans bg-white min-h-screen">
            <Header />
            <Breadcrumbs title={notice.title} />
            <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
                <ArticleHeader data={notice} />

                {heroImageUrl && (
                    <div className="w-full my-6 p-1 border border-gray-300 bg-gray-50">
                        <Image src={heroImageUrl} alt={notice.heroImage?.alternativeText || notice.title} width={1200} height={500} layout="responsive" objectFit="cover" className="w-full h-auto" />
                    </div>
                )}

                <div className="prose max-w-none text-base leading-relaxed text-gray-700 pt-6 space-y-4" dangerouslySetInnerHTML={{ __html: htmlContent }} />

                <AttachmentList attachments={processedAttachments} />

                <hr className="border-gray-200 mt-12 mb-8" />

                {/* 4. 요청하신 대로 '상담 요청하기' 버튼을 삭제했습니다. */}
            </main>
            <Footer />
        </div>
    );
}