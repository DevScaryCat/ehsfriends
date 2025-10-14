// app/contact/page.tsx
"use client"; // 폼 이벤트 처리를 위해 클라이언트 컴포넌트로 전환
import { ChevronRight, Home, Send } from 'lucide-react';
import { Header, Footer, PRIMARY_COLOR } from '../components/CommonLayout'

// 상담 가능한 서비스 목록 (드롭다운 메뉴에 사용)
const serviceItems = [
    { value: "ehs", label: "EHS 컨설팅 - 통합 환경, 보건, 안전 시스템 구축" },
    { value: "chemical", label: "화학물질관리 컨설팅 - 화평법, 화관법 등 규제 대응" },
    { value: "msds", label: "근골격계 유해요인조사 - 질환 예방 및 환경 개선" },
    { value: "health-mgmt", label: "보건관리위탁 - 보건 관리 업무 전문 아웃소싱" },
    { value: "risk-assessment", label: "위험성평가 - 사업장 위험 요소를 진단하고 평가" },
    { value: "work-env", label: "작업환경개선 컨설팅 - 쾌적하고 안전한 작업 환경 조성" },
    { value: "health-pro", label: "산업보건지도사 컨설팅 - 자격 기준에 따른 전문 지도 제공" },
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
                <li className={`text-${PRIMARY_COLOR} font-bold`}>상담신청</li>
            </ol>
        </nav>
    );
};

// --- Main Page ---

/**
 * @page ContactPage: 상담신청 페이지
 */
export default function ContactPage() {
    // 폼 제출 핸들러 (실제 백엔드 연동 로직이 들어갈 곳)
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        alert("상담 신청이 접수되었습니다. 곧 연락드리겠습니다.");
        // 실제로는 여기에 API 호출 코드가 들어갑니다.
    };

    return (
        <div className="font-sans bg-white min-h-screen">
            <Header />
            <Breadcrumbs />

            <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10">

                {/* 페이지 제목 및 소개 */}
                <div className="text-center mb-8 border-b border-gray-200 pb-6">
                    <h1 className="text-4xl md:text-5xl font-extrabold text-gray-800 tracking-tight">
                        상담 신청
                    </h1>
                    <p className="mt-2 text-lg text-gray-600">
                        문의 사항과 필요한 서비스를 알려주시면, 전문가가 신속하게 연락드리겠습니다.
                    </p>
                </div>

                {/* 상담 신청 폼 */}
                <div className="max-w-3xl mx-auto p-6 md:p-10 border border-gray-200 bg-gray-50 shadow-sm">
                    <form onSubmit={handleSubmit} className="space-y-6">

                        {/* 1. 상담 분야 선택 */}
                        <div>
                            <label htmlFor="service" className="block text-base font-bold text-gray-800 mb-2">
                                상담 분야<span className="text-red-500 ml-1">*</span>
                            </label>
                            <select
                                id="service"
                                name="service"
                                required
                                className={`w-full p-3 border border-gray-300 rounded-md focus:border-${PRIMARY_COLOR} focus:ring-${PRIMARY_COLOR} text-gray-700 transition`}
                            >
                                <option value="">--- 서비스 선택 ---</option>
                                {serviceItems.map(item => (
                                    <option key={item.value} value={item.value}>{item.label}</option>
                                ))}
                            </select>
                        </div>

                        {/* 2. 이름 */}
                        <div>
                            <label htmlFor="name" className="block text-base font-bold text-gray-800 mb-2">
                                성함<span className="text-red-500 ml-1">*</span>
                            </label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                required
                                className={`w-full p-3 border border-gray-300 rounded-md focus:border-${PRIMARY_COLOR} focus:ring-${PRIMARY_COLOR} text-gray-700 transition`}
                            />
                        </div>

                        {/* 3. 회사명*/}
                        <div>
                            <label htmlFor="company" className="block text-base font-bold text-gray-800 mb-2">
                                회사명<span className="text-red-500 ml-1">*</span>
                            </label>
                            <input
                                type="text"
                                id="company"
                                name="company"
                                required
                                className={`w-full p-3 border border-gray-300 rounded-md focus:border-${PRIMARY_COLOR} focus:ring-${PRIMARY_COLOR} text-gray-700 transition`}
                            />
                        </div>

                        {/* 4. 연락처 */}
                        <div>
                            <label htmlFor="phone" className="block text-base font-bold text-gray-800 mb-2">
                                연락처<span className="text-red-500 ml-1">*</span>
                            </label>
                            <input
                                type="tel"
                                id="phone"
                                name="phone"
                                required
                                className={`w-full p-3 border border-gray-300 rounded-md focus:border-${PRIMARY_COLOR} focus:ring-${PRIMARY_COLOR} text-gray-700 transition`}
                            />
                        </div>

                        {/* 5. 이메일 */}
                        <div>
                            <label htmlFor="email" className="block text-base font-bold text-gray-800 mb-2">
                                이메일<span className="text-red-500 ml-1">*</span>
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                required
                                className={`w-full p-3 border border-gray-300 rounded-md focus:border-${PRIMARY_COLOR} focus:ring-${PRIMARY_COLOR} text-gray-700 transition`}
                            />
                        </div>

                        {/* 6. 문의 내용 */}
                        <div>
                            <label htmlFor="message" className="block text-base font-bold text-gray-800 mb-2">
                                문의 내용
                            </label>
                            <textarea
                                id="message"
                                name="message"
                                rows={5}
                                className={`w-full p-3 border border-gray-300 rounded-md focus:border-${PRIMARY_COLOR} focus:ring-${PRIMARY_COLOR} text-gray-700 transition`}
                            />
                        </div>

                        {/* 7. 제출 버튼 */}
                        <button
                            type="submit"
                            className={`w-full flex items-center justify-center p-3 text-lg font-bold bg-${PRIMARY_COLOR} text-white rounded-md hover:bg-blue-700 transition`}
                        >
                            <Send className="w-5 h-5 mr-2" /> 상담 신청하기
                        </button>

                    </form>
                </div>
            </main>
            <Footer />
        </div>
    );
}