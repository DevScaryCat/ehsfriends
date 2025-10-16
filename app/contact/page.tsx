// app/contact/page.tsx
"use client";
import { ChevronRight, Home, Send } from 'lucide-react';
import { Header, Footer, PRIMARY_COLOR } from '../components/CommonLayout'
import { useState } from 'react'; // useState 임포트

const serviceItems = [
    { value: "EHS 컨설팅 - 통합 환경, 보건, 안전 시스템 구축", label: "EHS 컨설팅 - 통합 환경, 보건, 안전 시스템 구축" },
    { value: "화학물질관리 컨설팅 - 화평법, 화관법 등 규제 대응", label: "화학물질관리 컨설팅 - 화평법, 화관법 등 규제 대응" },
    { value: "근골격계 유해요인조사 - 질환 예방 및 환경 개선", label: "근골격계 유해요인조사 - 질환 예방 및 환경 개선" },
    { value: "보건관리위탁 - 보건 관리 업무 전문 아웃소싱", label: "보건관리위탁 - 보건 관리 업무 전문 아웃소싱" },
    { value: "위험성평가 - 사업장 위험 요소를 진단하고 평가", label: "위험성평가 - 사업장 위험 요소를 진단하고 평가" },
    { value: "작업환경개선 컨설팅 - 쾌적하고 안전한 작업 환경 조성", label: "작업환경개선 컨설팅 - 쾌적하고 안전한 작업 환경 조성" },
    { value: "산업보건지도사 컨설팅 - 자격 기준에 따른 전문 지도 제공", label: "산업보건지도사 컨설팅 - 자격 기준에 따른 전문 지도 제공" },
];

const Breadcrumbs = () => (
    <nav className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-3 text-sm text-gray-500 border-b border-gray-200 bg-white">
        <ol className="flex items-center space-x-2">
            <li><a href="/" className="hover:text-blue-700"><Home className="w-4 h-4 inline-block text-gray-400" /></a></li>
            <ChevronRight className="w-4 h-4" />
            <li className={`text-slate-700 font-bold`}>상담신청</li>
        </ol>
    </nav>
);

export default function ContactPage() {
    const [isSubmitting, setIsSubmitting] = useState(false);

    // 폼 제출 핸들러를 API 호출 로직으로 수정
    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setIsSubmitting(true);

        const formData = new FormData(event.currentTarget);
        const data = Object.fromEntries(formData.entries());

        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data),
            });

            if (response.ok) {
                alert("상담 신청이 성공적으로 접수되었습니다. 곧 연락드리겠습니다.");
                (event.target as HTMLFormElement).reset(); // 폼 초기화
            } else {
                const errorData = await response.json();
                alert(`오류가 발생했습니다: ${errorData.message}`);
            }
        } catch (error) {
            console.error(error);
            alert("네트워크 오류가 발생했습니다. 잠시 후 다시 시도해주세요.");
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="font-sans bg-white min-h-screen">
            <Header />
            <Breadcrumbs />
            <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
                <div className="text-center mb-8 border-b border-gray-200 pb-6">
                    <h1 className="text-4xl md:text-5xl font-extrabold text-gray-800 tracking-tight">상담 신청</h1>
                    <p className="mt-2 text-lg text-gray-600">문의 사항과 필요한 서비스를 알려주시면, 전문가가 신속하게 연락드리겠습니다.</p>
                </div>
                <div className="max-w-3xl mx-auto p-6 md:p-10 border border-gray-200 bg-gray-50 shadow-sm">
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div>
                            <label htmlFor="service" className="block text-base font-bold text-gray-800 mb-2">상담 분야<span className="text-red-500 ml-1">*</span></label>
                            <select id="service" name="service" required className={`w-full p-3 border border-gray-300 rounded-md focus:border-slate-700 focus:ring-slate-700 text-gray-700 transition`}>
                                <option value="">--- 서비스 선택 ---</option>
                                {serviceItems.map(item => (<option key={item.value} value={item.value}>{item.label}</option>))}
                            </select>
                        </div>
                        <div>
                            <label htmlFor="name" className="block text-base font-bold text-gray-800 mb-2">성함<span className="text-red-500 ml-1">*</span></label>
                            <input type="text" id="name" name="name" required className={`w-full p-3 border border-gray-300 rounded-md focus:border-slate-700 focus:ring-slate-700 text-gray-700 transition`} />
                        </div>
                        <div>
                            <label htmlFor="company" className="block text-base font-bold text-gray-800 mb-2">회사명<span className="text-red-500 ml-1">*</span></label>
                            <input type="text" id="company" name="company" required className={`w-full p-3 border border-gray-300 rounded-md focus:border-slate-700 focus:ring-slate-700 text-gray-700 transition`} />
                        </div>
                        <div>
                            <label htmlFor="phone" className="block text-base font-bold text-gray-800 mb-2">연락처<span className="text-red-500 ml-1">*</span></label>
                            <input type="tel" id="phone" name="phone" required className={`w-full p-3 border border-gray-300 rounded-md focus:border-slate-700 focus:ring-slate-700 text-gray-700 transition`} />
                        </div>
                        <div>
                            <label htmlFor="email" className="block text-base font-bold text-gray-800 mb-2">이메일<span className="text-red-500 ml-1">*</span></label>
                            <input type="email" id="email" name="email" required className={`w-full p-3 border border-gray-300 rounded-md focus:border-slate-700 focus:ring-slate-700 text-gray-700 transition`} />
                        </div>
                        <div>
                            <label htmlFor="message" className="block text-base font-bold text-gray-800 mb-2">문의 내용</label>
                            <textarea id="message" name="message" rows={5} className={`w-full p-3 border border-gray-300 rounded-md focus:border-slate-700 focus:ring-slate-700 text-gray-700 transition`} />
                        </div>
                        <button type="submit" disabled={isSubmitting} className={`w-full flex items-center justify-center p-3 text-lg font-bold bg-slate-700 text-white rounded-md hover:bg-blue-700 transition disabled:bg-gray-400 disabled:cursor-not-allowed`}>
                            <Send className="w-5 h-5 mr-2" /> {isSubmitting ? '전송 중...' : '상담 신청하기'}
                        </button>
                    </form>
                </div>
            </main>
            <Footer />
        </div>
    );
}