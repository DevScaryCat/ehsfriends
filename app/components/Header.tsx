// app/components/Header.tsx
'use client';

import { useEffect, useState } from 'react';

interface HeaderProps {
    defaultOpaque?: boolean;
}

export default function Header({ defaultOpaque = false }: HeaderProps) {
    const [scrolled, setScrolled] = useState(defaultOpaque);

    useEffect(() => {
        if (defaultOpaque) return;

        const handleScroll = () => {
            setScrolled(window.scrollY > 10);
        };

        handleScroll();
        window.addEventListener('scroll', handleScroll);

        return () => window.removeEventListener('scroll', handleScroll);
    }, [defaultOpaque]);

    return (
        <header className={`sticky top-0 z-50 py-4 transition-all duration-300 ${scrolled ? 'bg-white shadow-md' : 'bg-transparent'}`}>
            <div className="container mx-auto px-6 lg:px-8">
                <nav className={`flex items-center justify-between transition-colors duration-300 ${scrolled ? 'text-gray-900' : 'text-white'}`}>
                    <div className="text-2xl font-bold tracking-tight"><a href="/">EHS Friends</a></div>
                    <ul className="hidden md:flex items-center space-x-8">
                        <li><a href="/company-info" className={`transition-colors ${scrolled ? 'hover:text-blue-600' : 'hover:text-blue-200'}`}>회사소개</a></li>
                        <li><a href="/consulting/musculoskeletal-survey" className={`transition-colors ${scrolled ? 'hover:text-blue-600' : 'hover:text-blue-200'}`}>EHS 컨설팅</a></li>
                        <li><a href="/performance" className={`transition-colors ${scrolled ? 'hover:text-blue-600' : 'hover:text-blue-200'}`}>실적</a></li>
                        <li><a href="/specialist-network" className={`transition-colors ${scrolled ? 'hover:text-blue-600' : 'hover:text-blue-200'}`}>전문가 네트워크</a></li>
                    </ul>
                    <div className="flex items-center space-x-4">
                        <a href="#" className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-5 rounded-full transition-colors text-sm shadow-lg">상담 신청</a>
                    </div>
                </nav>
            </div>
        </header>
    );
}