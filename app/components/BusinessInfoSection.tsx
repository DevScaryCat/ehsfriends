// app/components/BusinessInfoSection.tsx
"use client";

import { useState, useRef, useEffect } from 'react'; // useEffect 추가
import {
    ChevronLeft, ChevronRight, Layout, FlaskConical, Stethoscope,
    Users, Zap, Factory, Briefcase, Shield
} from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import Link from 'next/link';

import 'swiper/css';
import 'swiper/css/navigation';

const ehsServices = [
    { title: "EHS 컨설팅", href: "/service/ehs", icon: Layout },
    { title: "화학물질관리", href: "/service/chemical", icon: FlaskConical },
    { title: "근골격계 유해요인조사", href: "/service/msds", icon: Stethoscope },
    { title: "보건관리 위탁대행", href: "/service/health-mgmt", icon: Users },
    { title: "위험성평가 컨설팅", href: "/service/risk-assessment", icon: Zap },
    { title: "작업환경개선", href: "/service/work-env", icon: Factory },
    { title: "공공기관 컨설팅", href: "/service/public", icon: Briefcase },
    { title: "산업보건지도사", href: "/service/health-pro", icon: Shield },
];

const slideData = [
    {
        categoryHref: "/service/ehs",
        title: "통합 EHS 시스템 구축",
        description: "기업의 환경(Environment), 보건(Health), 안전(Safety) 경영 시스템을 국제 표준 및 법규 요구사항에 맞춰 통합적으로 구축하고 운영 효율성을 극대화합니다.",
        imageUrl: "/ehs.png"
    },
    {
        categoryHref: "/service/chemical",
        title: "화학물질 규제 대응",
        description: "화평법, 화관법 등 복잡한 화학물질 관련 법규 준수를 위한 등록, 허가, 관리 시스템 구축 및 전문 교육을 제공하여 기업의 리스크를 관리합니다.",
        imageUrl: "/chemical.jpeg"
    },
    {
        categoryHref: "/service/msds",
        title: "근골격계 질환 예방",
        description: "작업자 근골격계 부담 작업 유해요인을 정밀하게 조사·분석하고, 인간공학적 개선 대책을 수립하여 산업재해 예방 및 생산성 향상에 기여합니다.",
        imageUrl: "/msds.png"
    },
    {
        categoryHref: "/service/health-mgmt",
        title: "전문 보건 관리 서비스",
        description: "사업장 특성에 맞는 보건관리 계획 수립부터 건강증진 프로그램 운영까지, 전문 인력이 보건관리자 업무를 위탁 수행하여 근로자 건강을 체계적으로 관리합니다.",
        imageUrl: "/health-mgmt.jpeg"
    },
    {
        categoryHref: "/service/risk-assessment",
        title: "사업장 위험성 평가",
        description: "잠재적 위험 요소를 과학적인 방법으로 발굴·평가하고, 실효성 있는 개선 대책을 제시하여 중대재해를 예방하고 안전한 작업 환경을 조성합니다.",
        imageUrl: "/risk-assessment.png"
    },
    {
        categoryHref: "/service/work-env",
        title: "쾌적한 작업 환경 조성",
        description: "소음, 분진, 유해광선 등 작업 환경 내 유해요인을 측정·분석하고, 환기 시스템 개선, 보호구 지급 등 최적의 개선 솔루션을 제공합니다.",
        imageUrl: "/work-env.png"
    },
    {
        categoryHref: "/service/public",
        title: "공공기관 맞춤 컨설팅",
        description: "공공 부문의 특수성을 고려한 안전보건 경영 시스템 구축, 위험성 평가, 안전 교육 등 맞춤형 컨설팅을 통해 공공 서비스의 안전성을 강화합니다.",
        imageUrl: "/public.png"
    },
    {
        categoryHref: "/service/health-pro",
        title: "산업보건 전문가 양성",
        description: "산업보건지도사 자격 취득 및 직무 수행 능력 향상을 위한 체계적인 교육과 전문적인 지도를 통해 최고의 산업 보건 전문가 양성을 지원합니다.",
        imageUrl: "/health-pro.png"
    }
];


export const BusinessInfoSection = () => {
    const [activeCategoryHref, setActiveCategoryHref] = useState(ehsServices[0].href);
    const swiperRef = useRef<any>(null);
    const filteredSlides = slideData.filter(slide => slide.categoryHref === activeCategoryHref);

    // 슬라이드 수가 1개 이하인지 확인하는 상태
    const [isSingleSlide, setIsSingleSlide] = useState(filteredSlides.length <= 1);

    // 카테고리 변경 시 슬라이드 수 업데이트
    useEffect(() => {
        setIsSingleSlide(filteredSlides.length <= 1);
        if (swiperRef.current) {
            swiperRef.current.update(); // Swiper 업데이트
            swiperRef.current.slideToLoop(0, 0); // 첫 슬라이드로 이동
        }
    }, [filteredSlides]);


    const handleCategoryClick = (href: string) => {
        setActiveCategoryHref(href);
        // useEffect가 이 변경을 감지하고 상태를 업데이트할 것입니다.
    };

    return (
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 bg-white relative">
            <div className="flex flex-col md:flex-row gap-8">
                {/* 좌측 카테고리 메뉴 */}
                <div className="w-full md:w-1/4">
                    <ul className="space-y-1">
                        {ehsServices.map((service) => (
                            <li key={service.href}>
                                <button
                                    onClick={() => handleCategoryClick(service.href)}
                                    className={`w-full flex items-center text-left py-3 px-4 rounded-lg transition-all duration-200 
                                                ${activeCategoryHref === service.href
                                            ? 'bg-slate-50 text-slate-700 font-bold border-l-4 border-slate-600'
                                            : 'text-gray-700 hover:bg-gray-50 hover:text-gray-900 border-l-4 border-transparent'}`}
                                >
                                    <service.icon className="w-5 h-5 mr-3 flex-shrink-0" />
                                    <span className="flex-grow text-sm">{service.title}</span>
                                </button>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* 우측 슬라이더 영역 */}
                <div className="w-full md:w-3/4 relative">
                    {filteredSlides.length > 0 ? (
                        <Swiper
                            modules={[Navigation]}
                            spaceBetween={30}
                            slidesPerView={1}
                            navigation={{
                                prevEl: '.business-swiper-button-prev',
                                nextEl: '.business-swiper-button-next',
                            }}
                            onSwiper={(swiper) => { swiperRef.current = swiper; }}
                            // 슬라이드 번호 관련 콜백 제거
                            // onSlideChange={handleSlideChange} 
                            loop={false} // 단일 슬라이드이므로 루프 비활성화
                            allowTouchMove={!isSingleSlide} // 단일 슬라이드일 때 드래그 비활성화
                            className="h-[380px]"
                        >
                            {filteredSlides.map((slide, index) => (
                                <SwiperSlide key={index}>
                                    <div className="flex h-full bg-gray-50 border border-gray-200 shadow-sm">
                                        <div className="w-1/2 overflow-hidden">
                                            {slide.imageUrl ? (
                                                // eslint-disable-next-line @next/next/no-img-element
                                                <img src={slide.imageUrl} alt={slide.title} className="w-full h-full object-cover" />
                                            ) : (
                                                <div className="w-full h-full flex items-center justify-center bg-gray-200 text-gray-500">No Image</div>
                                            )}
                                        </div>
                                        <div className="w-1/2 p-8 flex flex-col justify-center">
                                            <h3 className="text-2xl font-bold text-gray-900 mb-4">{slide.title}</h3>
                                            <p className="text-gray-700 text-md leading-relaxed line-clamp-5">{slide.description}</p>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    ) : (
                        <div className="h-[380px] flex items-center justify-center bg-gray-50 text-gray-500 text-xl border border-gray-200">
                            선택된 카테고리에 대한 슬라이드 내용이 없습니다.
                        </div>
                    )}

                    {/* 슬라이드가 있을 때만 네비게이션 버튼 표시 */}
                    {filteredSlides.length > 0 && (
                        // 슬라이드가 1개 이하일 때 버튼 숨김
                        <div className={`absolute bottom-4 right-4 z-10 flex ${isSingleSlide ? 'hidden' : ''}`}>
                            <button className="business-swiper-button-prev w-10 h-10 rounded-full bg-gray-200 hover:bg-gray-300 flex items-center justify-center transition mr-2">
                                <ChevronLeft className="w-5 h-5 text-gray-700" />
                            </button>
                            {/* 슬라이드 번호 표시 제거 */}
                            <button className="business-swiper-button-next w-10 h-10 rounded-full bg-gray-200 hover:bg-gray-300 flex items-center justify-center transition ml-2">
                                <ChevronRight className="w-5 h-5 text-gray-700" />
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};