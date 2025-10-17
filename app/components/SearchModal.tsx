// app/components/SearchModal.tsx
"use client";

import { useState, useEffect, useCallback } from 'react';
import { Search, X, CornerDownLeft, FileText } from 'lucide-react';
import Link from 'next/link';

interface NoticeResult {
    id: number;
    documentId: string;
    title: string;
}

const searchableMenus = [
    { title: "EHS 소개", href: "/about" },
    { title: "업무 안내 (전체)", href: "/service" },
    { title: "EHS컨설팅", href: "/service/ehs" },
    { title: "화학물질관리 컨설팅", href: "/service/chemical" },
    { title: "근골격계 유해요인조사", href: "/service/msds" },
    { title: "보건관리위탁", href: "/service/health-mgmt" },
    { title: "위험성평가", href: "/service/risk-assessment" },
    { title: "작업환경개선 컨설팅", href: "/service/work-env" },
    { title: "산업보건지도사 컨설팅", href: "/service/health-pro" },
    { title: "알림소식", href: "/notice" },
    { title: "상담신청", href: "/contact" },
];

export default function SearchModal({ isOpen, onClose }: { isOpen: boolean; onClose: () => void; }) {
    const [searchTerm, setSearchTerm] = useState('');
    const [menuResults, setMenuResults] = useState(searchableMenus.slice(0, 5)); // 초기에는 5개만 보여줌
    const [contentResults, setContentResults] = useState<NoticeResult[]>([]);
    const [isLoading, setIsLoading] = useState(false);

    // 디바운싱 로직
    useEffect(() => {
        if (searchTerm.trim().length < 2) {
            setContentResults([]);
            setMenuResults(searchableMenus.filter(item => item.title.toLowerCase().includes(searchTerm.toLowerCase())).slice(0, 5));
            return;
        }

        const delayDebounceFn = setTimeout(() => {
            setIsLoading(true);
            fetch(`/api/search?term=${searchTerm.trim()}`)
                .then(res => res.json())
                .then(data => {
                    setContentResults(data.data || []);
                })
                .catch(console.error)
                .finally(() => setIsLoading(false));
        }, 300); // 300ms 지연

        // 메뉴 검색은 즉시 반응
        setMenuResults(searchableMenus.filter(item => item.title.toLowerCase().includes(searchTerm.toLowerCase())).slice(0, 5));

        return () => clearTimeout(delayDebounceFn);
    }, [searchTerm]);

    useEffect(() => {
        if (!isOpen) {
            setSearchTerm('');
            setContentResults([]);
        }
    }, [isOpen]);

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black/50 z-50 flex justify-center items-start pt-20" onClick={onClose}>
            <div className="w-full max-w-2xl bg-white rounded-lg shadow-2xl" onClick={(e) => e.stopPropagation()}>
                <div className="relative">
                    <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
                    <input
                        type="text"
                        placeholder="검색어를 입력하세요..."
                        className="w-full h-16 pl-12 pr-6 text-lg  text-slate-500 border-gray-200 focus:outline-none"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        autoFocus
                    />
                    <button onClick={onClose} className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-800">
                        <X size={24} />
                    </button>
                </div>
                <div className="p-6 max-h-[60vh] overflow-y-auto border-t border-gray-200">
                    {menuResults.length > 0 && (
                        <div className="mb-6">
                            <h3 className="text-sm font-semibold text-gray-500 mb-2 px-2">메뉴 바로가기</h3>
                            <ul>
                                {menuResults.map(item => (
                                    <li key={item.href}>
                                        <Link href={item.href} onClick={onClose} className="flex items-center justify-between p-2 rounded-md hover:bg-gray-100">
                                            <span className='text-gray-600'>{item.title}</span>
                                            <CornerDownLeft size={16} className="text-gray-400" />
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}

                    {/* 콘텐츠 검색 결과 */}
                    {searchTerm.trim().length >= 2 && (
                        <div>
                            <h3 className="text-sm font-semibold text-gray-500 mb-2 px-2">콘텐츠 검색 결과</h3>
                            {isLoading ? (
                                <div className="text-center p-4 text-gray-500">검색 중...</div>
                            ) : (
                                contentResults.length > 0 ? (
                                    <ul>
                                        {contentResults.map(item => (
                                            <li key={item.id}>
                                                <Link href={`/notice/${item.documentId}`} onClick={onClose} className="flex items-start p-2 rounded-md hover:bg-gray-100">
                                                    <FileText size={18} className="text-slate-700 mt-1 mr-3 flex-shrink-0" />
                                                    <span className="flex-grow">{item.title}</span>
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>
                                ) : (
                                    <div className="text-center p-4 text-gray-500">"{searchTerm}"에 대한 검색 결과가 없습니다.</div>
                                )
                            )}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}