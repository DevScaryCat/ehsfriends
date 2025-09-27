'use client';

import { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Youtube, Linkedin, Instagram } from 'lucide-react';

const slideData = [
  { id: 0, title: "새롭게 달라진\nEHS Friends", subtitle: "전문적인 환경, 안전, 보건 컨설팅으로\n귀사의 경쟁력을 높여보세요.", imagePlaceholder: "메인 비주얼 영역 1" },
  { id: 1, title: "화학물질관리\n전문 컨설팅", subtitle: "복잡한 화학물질 규제, EHS Friends가\n명확한 해결책을 제시합니다.", imagePlaceholder: "메인 비주얼 영역 2" },
  { id: 2, title: "위험성 평가 및\n작업환경개선", subtitle: "사업장의 잠재적 위험을 진단하고\n안전한 일터를 만들어갑니다.", imagePlaceholder: "메인 비주얼 영역 3" },
];

const featureData = [
  { title: "Compliance", description: "체계적인 EHS\n법규 준수", iconSrc: "/security.png", bgColor: "bg-blue-50" },
  { title: "Customizing", description: "맞춤형 컨설팅\n솔루션 제공", iconSrc: "/solution.png", bgColor: "bg-green-50" },
  { title: "Partnership", description: "지속가능한\n파트너십 구축", iconSrc: "/partnership.png", bgColor: "bg-purple-50" },
  { title: "Reporting", description: "데이터 기반\n보고서 제공", iconSrc: "/report.png", bgColor: "bg-yellow-50" },
];

const consultingServices = [
  { name: "근골격계 유해요인조사", description: "작업장 내 근골격계 부담 작업의 유해요인을 찾아내고, 인간공학적 분석을 통해 개선 대책을 수립하여 작업 능률 향상과 산업 재해 예방에 기여합니다.", imageSrc: "/consulting-01.png" },
  { name: "화학물질관리 컨설팅", description: "화학물질관리법(화관법), 산업안전보건법 등 복잡한 규제에 대응하여 화학물질 인벤토리 구축, 취급시설 관리, 보고 및 허가 업무를 지원합니다.", imageSrc: "/consulting-02.png" },
  { name: "보건관리 위탁대행", description: "전문 인력과 체계적인 시스템을 통해 사업장의 보건관리 업무를 효율적으로 대행하며, 근로자의 건강 증진과 쾌적한 작업환경 조성을 돕습니다.", imageSrc: "/consulting-03.png" },
  { name: "위험성평가 컨설팅", description: "사업장 내 모든 유해·위험요인을 파악하고 각 요인에 대한 위험성을 추정·결정하여, 체계적이고 지속적인 위험 감소 대책을 수립하도록 지원합니다.", imageSrc: "/consulting-04.png" },
];

const partnerLogos = [
  { name: 'Microsoft', logoSrc: 'https://logo.clearbit.com/microsoft.com' },
  { name: 'Apple', logoSrc: 'https://logo.clearbit.com/apple.com' },
  { name: 'Google', logoSrc: 'https://logo.clearbit.com/google.com' },
  { name: 'Meta', logoSrc: 'https://logo.clearbit.com/meta.com' },
  { name: 'Amazon', logoSrc: 'https://logo.clearbit.com/amazon.com' },
  { name: 'Tesla', logoSrc: 'https://logo.clearbit.com/tesla.com' },
  { name: 'Netflix', logoSrc: 'https://logo.clearbit.com/netflix.com' },
  { name: 'Discord', logoSrc: 'https://logo.clearbit.com/discord.com' },
];

const footerLinks = {
  '회사소개': ['인사말', '기업개요', '직원 및 연락처'],
  'EHS 컨설팅': ['근골격계 유해요인조사', '화학물질관리 컨설팅', '보건관리 위탁대행', '위험성평가 컨설팅'],
  '실적/네트워크': ['주요 실적', '전문가 네트워크', '협력사'],
  '고객지원': ['상담 신청', '자주 묻는 질문', '뉴스레터'],
};

const transitionDuration = 0.6;
const variants = { enter: { opacity: 0 }, center: { opacity: 1, transition: { duration: transitionDuration, ease: "easeOut" } }, exit: { opacity: 0, transition: { duration: transitionDuration / 2, ease: "easeIn" } } };
const titleVariants = { enter: { x: 25, opacity: 0 }, center: { x: 0, opacity: 1, transition: { duration: transitionDuration, ease: "easeOut" } } };
const subtitleVariants = { enter: { y: 25, opacity: 0 }, center: { y: 0, opacity: 1, transition: { duration: transitionDuration, ease: "easeOut", delay: 0.1 } } };

export default function Home() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeTab, setActiveTab] = useState(consultingServices[0].name);

  useEffect(() => {
    const handleScroll = () => { setScrolled(window.scrollY > 10); };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleTransition = (callback: () => void) => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    callback();
    setTimeout(() => { setIsTransitioning(false); }, transitionDuration * 1000);
  };

  const goToNext = useCallback(() => {
    handleTransition(() => { setCurrentIndex((prev) => (prev + 1) % slideData.length); });
  }, [isTransitioning]);

  const goToPrevious = () => {
    handleTransition(() => { setCurrentIndex((prev) => (prev - 1 + slideData.length) % slideData.length); });
  };

  useEffect(() => {
    const timer = setInterval(goToNext, 5000);
    return () => clearInterval(timer);
  }, [goToNext]);

  const activeService = consultingServices.find(service => service.name === activeTab);

  return (
    <main>
      <header className={`sticky top-0 z-50 py-4 transition-all duration-300 ${scrolled ? 'bg-white shadow-md' : 'bg-transparent'}`}>
        <div className="container mx-auto px-6 lg:px-8">
          <nav className={`flex items-center justify-between transition-colors duration-300 ${scrolled ? 'text-gray-900' : 'text-white'}`}>
            <div className="text-2xl font-bold tracking-tight"><a href="#">EHS Friends</a></div>
            <ul className="hidden md:flex items-center space-x-8">
              <li><a href="#" className={`transition-colors ${scrolled ? 'hover:text-blue-600' : 'hover:text-blue-200'}`}>회사소개</a></li>
              <li><a href="#" className={`transition-colors ${scrolled ? 'hover:text-blue-600' : 'hover:text-blue-200'}`}>EHS 컨설팅</a></li>
              <li><a href="#" className={`transition-colors ${scrolled ? 'hover:text-blue-600' : 'hover:text-blue-200'}`}>실적</a></li>
              <li><a href="#" className={`transition-colors ${scrolled ? 'hover:text-blue-600' : 'hover:text-blue-200'}`}>전문가 네트워크</a></li>
            </ul>
            <div className="flex items-center space-x-4">
              <a href="#" className={`hidden sm:inline text-sm font-medium transition-colors ${scrolled ? 'hover:text-blue-600' : 'hover:text-blue-200'}`}>로그인</a>
              <a href="#" className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-5 rounded-full transition-colors text-sm shadow-lg">상담 신청</a>
            </div>
          </nav>
        </div>
      </header>

      <section className="bg-blue-600 text-white -mt-[88px]">
        <div className="container mx-auto px-6 lg:px-8 min-h-screen flex flex-col pt-[88px]">
          <div className="flex-1 flex flex-col justify-center">
            <div className="relative min-h-[30rem] md:min-h-[24rem]">
              <AnimatePresence initial={false} mode="wait">
                <motion.div key={currentIndex} variants={variants} initial="enter" animate="center" exit="exit" className="absolute top-0 left-0 w-full">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center w-full">
                    <div className="text-center md:text-left">
                      <motion.h1 variants={titleVariants} className="text-4xl lg:text-5xl font-extrabold leading-tight mb-4 whitespace-pre-line">{slideData[currentIndex].title}</motion.h1>
                      <motion.p variants={subtitleVariants} className="text-lg lg:text-xl text-blue-100 mb-8 whitespace-pre-line">{slideData[currentIndex].subtitle}</motion.p>
                    </div>
                    <div className="flex items-center justify-center w-full h-64 md:h-96">
                      <div className="w-full h-full bg-white/10 rounded-2xl flex items-center justify-center border border-white/20">
                        <p className="text-blue-200">{slideData[currentIndex].imagePlaceholder}</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
            <div className="flex items-center justify-center md:justify-start space-x-4 mt-8">
              <span className="text-lg font-mono">{String(currentIndex + 1).padStart(2, '0')} / {String(slideData.length).padStart(2, '0')}</span>
              <div className="flex items-center space-x-2">
                <button onClick={goToPrevious} disabled={isTransitioning} className="p-2 rounded-full border border-white/30 hover:bg-white/10 transition-colors disabled:opacity-50 disabled:cursor-not-allowed" aria-label="Previous Slide"><ChevronLeft size={20} /></button>
                <button onClick={goToNext} disabled={isTransitioning} className="p-2 rounded-full border border-white/30 hover:bg-white/10 transition-colors disabled:opacity-50 disabled:cursor-not-allowed" aria-label="Next Slide"><ChevronRight size={20} /></button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-20 sm:py-24">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">EHS Friends, 무엇이 다른가요?</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {featureData.map((feature) => (
              <div key={feature.title} className={`${feature.bgColor} rounded-3xl p-8 flex flex-col justify-between aspect-square shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300`}>
                <div className="flex justify-between items-start">
                  <p className="text-sm font-semibold text-gray-600">{feature.title}</p>
                  <Image src={feature.iconSrc} alt={`${feature.title} icon`} width={48} height={48} />
                </div>
                <h3 className="text-2xl font-extrabold text-gray-900 whitespace-pre-line">{feature.description}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-20 sm:py-24">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">EHS 컨설팅 서비스</h2>
            <p className="mt-4 text-lg text-gray-600">최고의 전문가들이 귀사의 EHS 문제를 해결해 드립니다.</p>
          </div>
          <div className="flex justify-center mb-12">
            <div className="flex space-x-2 bg-slate-200 p-1 rounded-full">
              {consultingServices.map((service) => (
                <button
                  key={service.name}
                  onClick={() => setActiveTab(service.name)}
                  className={`px-6 py-2 text-sm font-semibold rounded-full transition-colors duration-300 ${activeTab === service.name ? 'bg-blue-600 text-white' : 'text-gray-600 hover:bg-slate-300'
                    }`}
                >
                  {service.name}
                </button>
              ))}
            </div>
          </div>
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ y: 10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -10, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
            >
              <div className="text-center md:text-left">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{activeService?.name}</h3>
                <p className="text-gray-600 leading-relaxed">{activeService?.description}</p>
              </div>
              <div className="flex items-center justify-center">
                <Image
                  src={activeService?.imageSrc || ''}
                  alt={activeService?.name || 'Consulting Service Image'}
                  width={500}
                  height={400}
                  className="rounded-lg shadow-xl"
                />
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      <section className="bg-white py-20 sm:py-24">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
            <div className="lg:col-span-1 text-center lg:text-left">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">주요 협력사</h2>
              <p className="mt-4 text-gray-600">EHS Friends는 최고의 기업들과 함께 성장합니다.</p>
            </div>
            <div className="lg:col-span-2">
              <div className="grid grid-cols-3 sm:grid-cols-4 gap-8">
                {partnerLogos.map((partner) => (
                  <div key={partner.name} className="flex justify-center items-center">
                    <Image
                      src={partner.logoSrc}
                      alt={partner.name}
                      width={120}
                      height={40}
                      className="grayscale hover:grayscale-0 opacity-60 hover:opacity-100 transition-all duration-300"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

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
              <a href="#" className="hover:text-white transition-colors"><Youtube size={20} /></a>
              <a href="#" className="hover:text-white transition-colors"><Linkedin size={20} /></a>
              <a href="#" className="hover:text-white transition-colors"><Instagram size={20} /></a>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}

