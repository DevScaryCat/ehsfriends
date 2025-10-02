'use client';

import { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Youtube, Linkedin, Instagram, ArrowRight } from 'lucide-react';

// --- 슬라이더 데이터 수정: public 디렉토리의 이미지 파일 연결 ---
const slideData = [
  { id: 0, title: "새롭게 달라진\nEHS Friends", subtitle: "전문적인 환경, 안전, 보건 컨설팅으로\n귀사의 경쟁력을 높여보세요.", imageSrc: "/1.jpg" },
  { id: 1, title: "화학물질관리\n전문 컨설팅", subtitle: "복잡한 화학물질 규제, EHS Friends가\n명확한 해결책을 제시합니다.", imageSrc: "/2.jpg" },
  { id: 2, title: "위험성 평가 및\n작업환경개선", subtitle: "사업장의 잠재적 위험을 진단하고\n안전한 일터를 만들어갑니다.", imageSrc: "/3.jpg" },
];
// ----------------------------

const featureData = [
  { title: "Compliance", description: "체계적인 EHS\n법규 준수", iconSrc: "/security.png", bgColor: "bg-blue-50" },
  { title: "Customizing", description: "맞춤형 컨설팅\n솔루션 제공", iconSrc: "/solution.png", bgColor: "bg-green-50" },
  { title: "Partnership", description: "지속가능한\n파트너십 구축", iconSrc: "/partnership.png", bgColor: "bg-purple-50" },
  { title: "Reporting", description: "데이터 기반\n보고서 제공", iconSrc: "/report.png", bgColor: "bg-yellow-50" },
];

// --- 컨설팅 서비스 데이터 수정: public 디렉토리의 이미지 파일 연결 (4.jpg부터 9.jpg까지 사용, 마지막 1개는 1.jpg 또는 적절한 대체 이미지) ---
const consultingServices = [
  { name: "근골격계 유해요인조사", description: "작업장 내 근골격계 부담 작업의 유해요인을 찾아내고, 인간공학적 분석을 통해 개선 대책을 수립하여 작업 능률 향상과 산업 재해 예방에 기여합니다.", imageSrc: "/4.jpg" },
  { name: "화학물질관리 컨설팅", description: "화학물질관리법(화관법), 산업안전보건법 등 복잡한 규제에 대응하여 화학물질 인벤토리 구축, 취급시설 관리, 보고 및 허가 업무를 지원합니다.", imageSrc: "/5.jpg" },
  { name: "보건관리 위탁대행", description: "전문 인력과 체계적인 시스템을 통해 사업장의 보건관리 업무를 효율적으로 대행하며, 근로자의 건강 증진과 쾌적한 작업환경 조성을 돕습니다.", imageSrc: "/6.jpg" },
  { name: "위험성평가 컨설팅", description: "사업장 내 모든 유해·위험요인을 파악하고 각 요인에 대한 위험성을 추정·결정하여, 체계적이고 지속적인 위험 감소 대책을 수립하도록 지원합니다.", imageSrc: "/7.jpg" },
  { name: "작업환경개선 컨설팅", description: "소음, 분진, 유해화학물질 등 작업환경의 유해요인을 측정 및 평가하고, 공학적 대책 및 관리 방안을 제시하여 쾌적한 작업 환경을 조성합니다.", imageSrc: "/8.jpg" },
  { name: "공공기관 안전보건 컨설팅", description: "공공기관의 특성을 고려한 맞춤형 안전보건 경영체계 구축 및 이행을 지원하여, 안전한 공공서비스 환경을 만들어갑니다.", imageSrc: "/9.jpg" },
  { name: "산업보건지도사 컨설팅", description: "산업보건지도사의 전문적인 지식과 경험을 바탕으로 사업장 보건 문제에 대한 심층 진단과 종합적인 솔루션을 제공합니다.", imageSrc: "/1.jpg" }, // 1.jpg를 다시 사용하거나, 다른 적절한 이미지로 교체해주세요.
];
// --------------------------------------------------

const reviewData = [
  { id: 1, text: "복잡한 법규 문제 때문에 골치 아팠는데, 전문가분들이 오셔서 깔끔하게 해결해 주셨어요. 덕분에 본업에 집중할 수 있게 되었습니다.", author: "A사 이사", tag: "Compliance" },
  { id: 2, text: "맞춤형 컨설팅 덕분에 우리 회사에 딱 맞는 안전 관리 시스템을 구축할 수 있었습니다. 특히 위험성 평가 결과가 상세해서 좋았습니다.", author: "B사 안전관리자", tag: "Customizing" },
  { id: 3, text: "장기적인 파트너로 믿고 의지할 수 있는 전문가 집단입니다. 단순 컨설팅을 넘어 실질적인 변화를 이끌어냈습니다.", author: "C사 대표", tag: "Partnership" },
  { id: 4, text: "데이터 기반 보고서를 통해 안전보건 목표 달성도를 명확하게 파악할 수 있었습니다. 다음 분기 계획 수립에 큰 도움이 됩니다.", author: "D사 기획팀", tag: "Reporting" },
  { id: 5, text: "긴급 상황 발생 시 신속한 대응과 명쾌한 해결책 제시가 인상 깊었습니다. 다음에도 EHS Friends와 함께 할 것입니다.", author: "E사 인사팀", tag: "Partnership" },
  { id: 6, text: "화학물질 관리 인벤토리 구축이 막막했는데, 단계별로 친절하게 안내해주셔서 무사히 규제를 준수할 수 있었습니다.", author: "F사 환경담당", tag: "Compliance" },
  { id: 7, text: "위탁 보건관리 서비스가 체계적입니다. 직원들의 만족도가 높아졌고, 건강 증진 프로그램도 효과적이었습니다.", author: "G사 총무팀", tag: "Customizing" },
  { id: 8, text: "유해요인 조사를 통해 작업 환경을 대폭 개선했습니다. 작업자들이 더 안전하고 쾌적하게 일하게 되어 기쁩니다.", author: "H사 생산부장", tag: "Reporting" },
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

const transitionDuration = 0.6;
const variants = { enter: { opacity: 0 }, center: { opacity: 1, transition: { duration: transitionDuration, ease: "easeOut" } }, exit: { opacity: 0, transition: { duration: transitionDuration / 2, ease: "easeIn" } } };
const titleVariants = { enter: { x: 25, opacity: 0 }, center: { x: 0, opacity: 1, transition: { duration: transitionDuration, ease: "easeOut" } } };
const subtitleVariants = { enter: { y: 25, opacity: 0 }, center: { y: 0, opacity: 1, transition: { duration: transitionDuration, ease: "easeOut", delay: 0.1 } } };

export default function Home() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => { setScrolled(window.scrollY > 10); };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleTransition = (callback) => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    callback();
    setTimeout(() => { setIsTransitioning(false); }, transitionDuration * 1000);
  };

  const goToNext = useCallback(() => {
    handleTransition(() => { setCurrentIndex((prev) => (prev + 1) % slideData.length); });
  }, [handleTransition]);

  const goToPrevious = () => {
    handleTransition(() => { setCurrentIndex((prev) => (prev - 1 + slideData.length) % slideData.length); });
  };

  useEffect(() => {
    const timer = setInterval(goToNext, 5000);
    return () => clearInterval(timer);
  }, [goToNext]);

  return (
    <main>
      {/* 헤더 부분은 이전과 동일하게 유지됩니다. */}
      <header className={`sticky top-0 z-50 py-4 transition-all duration-300 ${scrolled ? 'bg-white shadow-md' : 'bg-transparent'}`}>
        <div className="container mx-auto px-6 lg:px-8">
          <nav className={`flex items-center justify-between transition-colors duration-300 ${scrolled ? 'text-gray-900' : 'text-white'}`}>
            <div className="text-2xl font-bold tracking-tight"><a href="#">EHS Friends</a></div>
            <ul className="hidden md:flex items-center space-x-8">
              <li><a href="#" className={`transition-colors ${scrolled ? 'hover:text-blue-600' : 'hover:text-blue-200'}`}>회사소개</a></li>
              <li><a href="/consulting/musculoskeletal-survey" className={`transition-colors ${scrolled ? 'hover:text-blue-600' : 'hover:text-blue-200'}`}>EHS 컨설팅</a></li>
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
                    {/* 메인 비주얼 슬라이더 이미지 영역 수정 */}
                    <div className="flex items-center justify-center w-full h-64 md:h-96">
                      <div className="w-full h-full relative rounded-2xl overflow-hidden shadow-xl">
                        <Image
                          src={slideData[currentIndex].imageSrc}
                          alt={slideData[currentIndex].title}
                          layout="fill"
                          objectFit="cover"
                          unoptimized
                          priority={currentIndex === 0} // 첫 번째 이미지만 우선순위 높게 설정
                        />
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

      {/* --- EHS 컨설팅 서비스 섹션: 7개 서비스를 2줄(4개 + 3개) 그리드 형태로 변경 --- */}
      <section className="bg-slate-50 py-20 sm:py-24">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">EHS 컨설팅 서비스</h2>
            <p className="mt-4 text-lg text-gray-600">최고의 전문가들이 환경안전보건 문제를 해결해 드립니다.</p>
          </div>

          <div className="flex flex-col gap-6 md:gap-8">
            {/* 첫 번째 줄: 4개 서비스 (데스크톱: 4열) */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
              {consultingServices.slice(0, 4).map((service, index) => (
                <motion.div
                  key={service.name}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 overflow-hidden"
                >
                  <div className="relative h-32 w-full">
                    <Image
                      src={service.imageSrc}
                      alt={service.name}
                      layout="fill"
                      objectFit="cover"
                      unoptimized
                      className="transition-transform duration-300 hover:scale-105"
                    />
                  </div>
                  <div className="p-4 md:p-6 text-center">
                    <h3 className="text-lg font-bold text-gray-900 mb-2">{service.name}</h3>
                    <p className="text-sm text-gray-500 line-clamp-2">{service.description}</p>
                    <a
                      href="#"
                      className="mt-4 inline-flex items-center text-blue-600 font-semibold hover:text-blue-800 transition-colors text-sm"
                    >
                      자세히 <ArrowRight size={14} className="ml-1" />
                    </a>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* 두 번째 줄: 3개 서비스 (데스크톱: 중앙 정렬된 3열) */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6 md:gap-8 max-w-5xl mx-auto">
              {consultingServices.slice(4).map((service, index) => (
                <motion.div
                  key={service.name}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.5, delay: (index + 4) * 0.1 }}
                  className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 overflow-hidden"
                >
                  <div className="relative h-32 w-full">
                    <Image
                      src={service.imageSrc}
                      alt={service.name}
                      layout="fill"
                      objectFit="cover"
                      unoptimized
                      className="transition-transform duration-300 hover:scale-105"
                    />
                  </div>
                  <div className="p-4 md:p-6 text-center">
                    <h3 className="text-lg font-bold text-gray-900 mb-2">{service.name}</h3>
                    <p className="text-sm text-gray-500 line-clamp-2">{service.description}</p>
                    <a
                      href="#"
                      className="mt-4 inline-flex items-center text-blue-600 font-semibold hover:text-blue-800 transition-colors text-sm"
                    >
                      자세히 <ArrowRight size={14} className="ml-1" />
                    </a>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-blue-100 py-12 sm:py-16">
        <div className="container mx-auto">
          <div className="rounded-3xl p-8 sm:p-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div className="text-center lg:text-left">
                <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                  지금 바로 상담을<br />시작해보세요!
                </h2>
                <p className="mt-4 text-lg text-gray-600">
                  EHS 전문가가 귀사의 문제를 명쾌하게 해결해 드립니다.
                </p>
                <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                  <a
                    href="#"
                    className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-6 rounded-full transition-colors shadow-lg flex items-center justify-center gap-2"
                  >
                    <span>상담 신청하기</span>
                    <ArrowRight size={18} />
                  </a>
                  <a
                    href="#"
                    className="bg-white hover:bg-gray-100 text-gray-700 font-bold py-3 px-6 rounded-full transition-colors border border-gray-200"
                  >
                    서비스 둘러보기
                  </a>
                </div>
              </div>
              <div className="hidden lg:flex items-center justify-center min-h-[200px]">
                <div className="w-full h-full bg-blue-100 rounded-2xl flex items-center justify-center">
                  <p className="text-blue-500 font-medium">Illustration Area</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      <section className="bg-white py-20 sm:py-24">
        <div className="container mx-auto px-6 lg:px-8">
          <div className=" mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">EHS Friends, 무엇이 다른가요?</h2>
            <p className="mt-4 text-lg text-gray-600">우리 EHS 프렌즈는 언제나 쉽고 간단한 솔루션을 제공합니다</p>
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


      <section className="bg-gray-50 py-20 sm:py-24">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">생생한 고객 후기</h2>
            <p className="mt-4 text-lg text-gray-600">EHS Friends와 함께 성장한 기업들의 이야기입니다.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-8">
            {reviewData.map((review) => (
              <div
                key={review.id}
                className="bg-white rounded-xl p-6 flex flex-col justify-between min-h-40 shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div>
                  <div
                    className="text-xs font-medium text-blue-600 mb-2 py-1 px-3 bg-blue-100 rounded-full inline-block"
                  >
                    {review.tag}
                  </div>
                  <p className="text-gray-800 text-lg italic leading-relaxed">
                    "{review.text}"
                  </p>
                </div>
                <div className="mt-4 pt-4 border-t border-gray-200">
                  <p className="text-sm font-semibold text-gray-500">{review.author}</p>
                </div>
              </div>
            ))}
          </div>
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
                      className=" opacity-100 transition-all duration-300"
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