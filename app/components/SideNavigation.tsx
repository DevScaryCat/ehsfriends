// SideNavigation.js

'use client';

import { useState, useEffect, useRef } from 'react';

export default function SideNavigation({ navItems }) {
    const [activeSection, setActiveSection] = useState('intro');

    const observer = useRef(null);

    useEffect(() => {
        const sections = document.querySelectorAll('[data-section]');

        const options = {
            rootMargin: '-25% 0px -75% 0px',
            threshold: 0,
        };

        observer.current = new IntersectionObserver((entries) => {
            let currentActive = null;
            entries.forEach(entry => {
                const sectionId = entry.target.getAttribute('id');
                if (entry.isIntersecting) {
                    currentActive = sectionId;
                }
            });

            if (currentActive) {
                setActiveSection(currentActive);
            }

        }, options);

        sections.forEach(section => {
            observer.current?.observe(section);
        });

        return () => {
            if (observer.current) {
                observer.current.disconnect();
            }
        };
    }, [navItems]);

    return (
        <aside className="md:w-1/4 md:sticky md:top-24 md:self-start">
            <nav>
                <ul className="space-y-4 text-base font-semibold">
                    {navItems.map((item) => (
                        <li key={item.id}>
                            {/* a 태그의 기본 동작을 이용합니다. 전역 CSS에 scroll-behavior: smooth; 를 추가해야 합니다. */}
                            <a
                                href={`#${item.id}`}
                                className={`block transition-colors duration-300 ${activeSection === item.id
                                    ? 'text-orange-600 font-bold border-l-2 border-orange-600 pl-4'
                                    : 'text-gray-500 hover:text-gray-900 border-l-2 border-transparent pl-4'
                                    }`}
                            >
                                {item.title}
                            </a>
                        </li>
                    ))}
                </ul>
            </nav>
        </aside>
    );
}