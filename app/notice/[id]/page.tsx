// app/notice/[id]/page.tsx
import { ChevronRight, Home, Calendar } from 'lucide-react';
import { Header, Footer, PRIMARY_COLOR } from '../../components/CommonLayout';

interface NoticeDetail {
    id: number;
    title: string;
    category: string;
    date: string;
    author?: string;
    content: any;
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

// 1. params의 타입을 Promise로 감싸줍니다.
export default async function NoticeDetailPage({ params }: { params: Promise<{ id: string }> }) {
    // 2. await를 사용하여 params에서 실제 id 값을 추출합니다.
    const { id } = await params;
    const notice = await getNoticeById(id);

    if (!notice) {
        return <div>게시글을 찾을 수 없습니다.</div>;
    }

    const htmlContent = renderContentAsHtml(notice.content);

    return (
        <div className="font-sans bg-white min-h-screen">
            <Header />
            <Breadcrumbs title={notice.title} />
            <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
                <ArticleHeader data={notice} />
                <div
                    className="prose max-w-none text-base leading-relaxed text-gray-700 pt-6 space-y-4"
                    dangerouslySetInnerHTML={{ __html: htmlContent }}
                />
                <hr className="border-gray-200 mt-12 mb-8" />
                <div className="flex justify-between items-center">
                    <a href="/contact" className={`inline-block px-4 py-2 text-base font-bold bg-${PRIMARY_COLOR} text-white hover:bg-blue-700 transition`}>
                        상담 요청하기
                    </a>
                </div>
            </main>
            <Footer />
        </div>
    );
}