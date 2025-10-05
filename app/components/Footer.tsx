// components/Footer.tsx

import { Youtube, Linkedin, Instagram } from 'lucide-react';

const footerLinks: { [key: string]: string[] } = {
    '회사소개': ['인사말', '기업개요', '직원 및 연락처'],
    'EHS 컨설팅': [
        '근골격계 유해요인조사',
        '화학물질관리 컨설팅',
        '보건관리 위탁대행',
        '위험성평가 컨설팅',
        '작업환경개선 컨설팅',
        '공공기관 안전보건 컨설팅',
        '산업보건지도사 컨설팅'
    ],
    '실적/네트워크': ['주요 실적', '전문가 네트워크', '협력사'],
    '고객지원': ['상담 신청', '자주 묻는 질문', '뉴스레터'],
};

export default function Footer() {
    return (
        <footer className="bg-[#1c1c1c] text-gray-400 py-16">
            <div className="container mx-auto px-6 lg:px-8">
                <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
                    <div className="col-span-2 md:col-span-1 mb-8 md:mb-0">
                        <h2 className="text-xl font-bold text-white">EHS Friends</h2>
                    </div>
                    {Object.entries(footerLinks).map(([title, links]) => (
                        <div key={title}>
                            <h3 className="font-semibold text-white mb-4">{title}</h3>
                            <ul className="space-y-3">
                                {links.map((link) => (
                                    <li key={link}>
                                        <a href="#" className="hover:text-white transition-colors">{link}</a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
                <div className="mt-16 pt-8 border-t border-gray-700 flex flex-col sm:flex-row justify-between items-center">
                    <p className="text-sm">&copy; {new Date().getFullYear()} EHS Friends Co., Ltd. All rights reserved.</p>
                    <div className="flex space-x-4 mt-4 sm:mt-0">
                        <a href="#" className="hover:text-white transition-colors" aria-label="Youtube"><Youtube size={20} /></a>
                        <a href="#" className="hover:text-white transition-colors" aria-label="LinkedIn"><Linkedin size={20} /></a>
                        <a href="#" className="hover:text-white transition-colors" aria-label="Instagram"><Instagram size={20} /></a>
                    </div>
                </div>
            </div>
        </footer>
    );
}